let config = {
  mode: 'production',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: [require('path').resolve(__dirname, "kotlin/web-compose-in-js.js")]
};
config.output = {
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "web-compose-in-js.js"
            : "web-compose-in-js-[name].js";
    },
    library: "web-compose-in-js",
    libraryTarget: "umd",
    globalObject: "this"
};
config.output.path = require('path').resolve(__dirname, "../../../kotlin-webpack/js/productionExecutable")
    // source maps
    config.module.rules.push({
            test: /\.m?js$/,
            use: ["source-map-loader"],
            enforce: "pre"
    });
    config.devtool = 'source-map';
config.ignoreWarnings = [/Failed to parse source map/]
    
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);

// configModuleName.js
config.output = config.output || {};
config.output.library = "MyComposables";



module.exports = config
