(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-internal-html-core-runtime.js', './html-html-core.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-internal-html-core-runtime.js'), require('./html-html-core.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'web-with-react'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'web-with-react'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'web-with-react'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'web-with-react'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'web-with-react'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'web-with-react'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'web-with-react'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'web-with-react'.");
    }
    root['web-with-react'] = factory(typeof this['web-with-react'] === 'undefined' ? {} : this['web-with-react'], this['kotlin-kotlin-stdlib'], this['html-internal-html-core-runtime'], this['html-html-core'], this['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(globalThis, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.s1;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.h4;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$ReactInComposeAppKt, 'ComposableSingletons$ReactInComposeAppKt');
  //endregion
  function main() {
    var urlParams = new URLSearchParams(window.location.search);
    var tmp0_elvis_lhs = urlParams.get('app');
    var app = tmp0_elvis_lhs == null ? 'composeApp' : tmp0_elvis_lhs;
    if (app === 'composeApp') {
      reactInComposeAppExample();
    }
  }
  function mainWrapper() {
    main();
  }
  function reactInComposeAppExample() {
    renderComposable('root', ComposableSingletons$ReactInComposeAppKt_getInstance().q1w_1);
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o1u(p0, p1, p2);
    };
  }
  function ComposableSingletons$ReactInComposeAppKt$lambda_1$lambda_x4vrop($this$renderComposable, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Hello compose', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableSingletons$ReactInComposeAppKt() {
    ComposableSingletons$ReactInComposeAppKt_instance = this;
    var tmp = this;
    tmp.q1w_1 = ComposableLambda$invoke$ref(composableLambdaInstance(477177533, false, ComposableSingletons$ReactInComposeAppKt$lambda_1$lambda_x4vrop));
  }
  var ComposableSingletons$ReactInComposeAppKt_instance;
  function ComposableSingletons$ReactInComposeAppKt_getInstance() {
    if (ComposableSingletons$ReactInComposeAppKt_instance == null)
      new ComposableSingletons$ReactInComposeAppKt();
    return ComposableSingletons$ReactInComposeAppKt_instance;
  }
  mainWrapper();
  return _;
}));

//# sourceMappingURL=web-with-react.js.map
