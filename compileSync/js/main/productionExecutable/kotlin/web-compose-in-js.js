(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./html-html-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'me.user:web-compose-in-js'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'me.user:web-compose-in-js'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'me.user:web-compose-in-js'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'me.user:web-compose-in-js'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'me.user:web-compose-in-js'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'me.user:web-compose-in-js'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'me.user:web-compose-in-js'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'me.user:web-compose-in-js'.");
    }
    root['me.user:web-compose-in-js'] = factory(typeof this['me.user:web-compose-in-js'] === 'undefined' ? {} : this['me.user:web-compose-in-js'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-internal-html-core-runtime'], this['html-html-core']);
  }
}(globalThis, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.u4;
  var initMetadataForClass = kotlin_kotlin.$_$.g4;
  var VOID = kotlin_kotlin.$_$.c;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.s1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var THROW_CCE = kotlin_kotlin.$_$.o5;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var initMetadataForObject = kotlin_kotlin.$_$.l4;
  var KMutableProperty0 = kotlin_kotlin.$_$.b5;
  var THROW_ISE = kotlin_kotlin.$_$.p5;
  var getLocalDelegateReference = kotlin_kotlin.$_$.b4;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ComposeCounterAppController, 'ComposeCounterAppController');
  initMetadataForObject(ComposableSingletons$ComposablesKt, 'ComposableSingletons$ComposablesKt');
  initMetadataForClass(ComposeCounterApp$2, VOID, VOID, ComposeCounterAppController);
  //endregion
  var ComposeCounterAppController$stable;
  function ComposeCounterAppController() {
  }
  function ComposeCounterApp(rootId, onCountChange) {
    var tmp;
    if (onCountChange === VOID) {
      tmp = ComposeCounterApp$lambda_1;
    } else {
      tmp = onCountChange;
    }
    onCountChange = tmp;
    var count$delegate = mutableStateOf(0);
    var composition = renderComposable(rootId, ComposableLambda$invoke$ref_1(composableLambdaInstance(-1346337092, true, ComposeCounterApp$lambda_2(count$delegate, onCountChange))));
    return new ComposeCounterApp$2(count$delegate, composition);
  }
  function Counter(count, onCountChange, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.n15(1378543192);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.d15(count) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.c15(onCountChange) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.e14()) {
      $composer_0.h14(-938699752);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.a16();
      var tmp;
      if (false || it === Companion_getInstance().bz_1) {
        // Inline function 'Counter.<anonymous>' call
        var value = Counter$lambda;
        this_0.b16(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.i14();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Counter.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1251797655, true, Counter$lambda_0(onCountChange, count));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.h14(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.cw(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.a16();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().bz_1) {
        // Inline function 'Counter.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.b16(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.i14();
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
    } else {
      $composer_0.vy();
    }
    var tmp1_safe_receiver = $composer_0.o15();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.c1b(Counter$lambda_1(count, onCountChange, $changed));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j1v(p0, p1, p2);
    };
  }
  function ComposableSingletons$ComposablesKt$lambda_1$lambda_dbm0ro($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    Text('-', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j1v(p0, p1, p2);
    };
  }
  function ComposableSingletons$ComposablesKt$lambda_2$lambda_fi0gaj($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    Text('+', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableSingletons$ComposablesKt() {
    ComposableSingletons$ComposablesKt_instance = this;
    var tmp = this;
    tmp.i21_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1188431715, false, ComposableSingletons$ComposablesKt$lambda_1$lambda_dbm0ro));
    var tmp_0 = this;
    tmp_0.j21_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1221307540, false, ComposableSingletons$ComposablesKt$lambda_2$lambda_fi0gaj));
  }
  var ComposableSingletons$ComposablesKt_instance;
  function ComposableSingletons$ComposablesKt_getInstance() {
    if (ComposableSingletons$ComposablesKt_instance == null)
      new ComposableSingletons$ComposablesKt();
    return ComposableSingletons$ComposablesKt_instance;
  }
  function ComposeCounterApp$lambda($count$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('count', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $count$delegate.b1();
  }
  function ComposeCounterApp$lambda_0($count$delegate, _set____db54di) {
    getLocalDelegateReference('count', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $count$delegate.hn(_set____db54di);
    return Unit_instance;
  }
  function ComposeCounterApp$lambda_1(it) {
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j1v(p0, p1, p2);
    };
  }
  function ComposeCounterApp$lambda$lambda($onCountChange, $count$delegate) {
    return function (it) {
      ComposeCounterApp$lambda_0($count$delegate, it);
      $onCountChange(ComposeCounterApp$lambda($count$delegate));
      return Unit_instance;
    };
  }
  function ComposeCounterApp$lambda_2($count$delegate, $onCountChange) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = ComposeCounterApp$lambda($count$delegate);
      $composer_0.h14(339215545);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.cw($count$delegate) | $composer_0.cw($onCountChange));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.a16();
      var tmp_0;
      if (invalid || it === Companion_getInstance().bz_1) {
        // Inline function 'ComposeCounterApp.<anonymous>.<anonymous>' call
        var value = ComposeCounterApp$lambda$lambda($onCountChange, $count$delegate);
        $composer_0.b16(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.i14();
      Counter(tmp, tmp0_group, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposeCounterApp$2($count$delegate, $composition) {
    this.k21_1 = $count$delegate;
    this.l21_1 = $composition;
    ComposeCounterAppController.call(this);
  }
  protoOf(ComposeCounterApp$2).setCount = function (newCount) {
    ComposeCounterApp$lambda_0(this.k21_1, newCount);
  };
  protoOf(ComposeCounterApp$2).dispose = function () {
    this.l21_1.jh();
  };
  function Counter$lambda($this$Div) {
    $this$Div.u1x(Counter$lambda$lambda);
    return Unit_instance;
  }
  function Counter$lambda$lambda($this$style) {
    padding($this$style, [get_px(25)]);
    return Unit_instance;
  }
  function Counter$lambda$lambda$lambda($onCountChange, $count) {
    return function (it) {
      $onCountChange($count - 1 | 0);
      return Unit_instance;
    };
  }
  function Counter$lambda$lambda_0($onCountChange, $count) {
    return function ($this$Button) {
      $this$Button.q1x(Counter$lambda$lambda$lambda($onCountChange, $count));
      return Unit_instance;
    };
  }
  function Counter$lambda$lambda_1($this$Span) {
    $this$Span.u1x(Counter$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function Counter$lambda$lambda$lambda_0($this$style) {
    padding($this$style, [get_px(15)]);
    return Unit_instance;
  }
  function Counter$lambda$lambda_2($count) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      Text('' + $count, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j1v(p0, p1, p2);
    };
  }
  function Counter$lambda$lambda$lambda_1($onCountChange, $count) {
    return function (it) {
      $onCountChange($count + 1 | 0);
      return Unit_instance;
    };
  }
  function Counter$lambda$lambda_3($onCountChange, $count) {
    return function ($this$Button) {
      $this$Button.q1x(Counter$lambda$lambda$lambda_1($onCountChange, $count));
      return Unit_instance;
    };
  }
  function Counter$lambda_0($onCountChange, $count) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.h14(635859763);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.cw($onCountChange) | $composer_0.d15($count));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.a16();
      var tmp;
      if (invalid || it === Companion_getInstance().bz_1) {
        // Inline function 'Counter.<anonymous>.<anonymous>.<anonymous>' call
        var value = Counter$lambda$lambda_0($onCountChange, $count);
        $composer_0.b16(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.i14();
      Button(tmp0_group, ComposableSingletons$ComposablesKt_getInstance().i21_1, $composer_0, 48, 0);
      $composer_0.h14(635864119);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.a16();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().bz_1) {
        // Inline function 'Counter.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = Counter$lambda$lambda_1;
        $composer_0.b16(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.i14();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Counter.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 326948213, true, Counter$lambda$lambda_2($count));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.h14(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.cw(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.a16();
      var tmp_4;
      if (invalid_0 || it_1 === Companion_getInstance().bz_1) {
        // Inline function 'Counter.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.b16(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.i14();
      Span(tmp1_group, tmp0, $composer_0, 54, 0);
      $composer_0.h14(635867155);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = !!($composer_0.cw($onCountChange) | $composer_0.d15($count));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.a16();
      var tmp_6;
      if (invalid_1 || it_2 === Companion_getInstance().bz_1) {
        // Inline function 'Counter.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = Counter$lambda$lambda_3($onCountChange, $count);
        $composer_0.b16(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.i14();
      Button(tmp2_group, ComposableSingletons$ComposablesKt_getInstance().j21_1, $composer_0, 48, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.j1v(p0, p1, p2);
    };
  }
  function Counter$lambda_1($count, $onCountChange, $$changed) {
    return function ($composer, $force) {
      Counter($count, $onCountChange, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  //region block: init
  ComposeCounterAppController$stable = 0;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    _.ComposeCounterAppController = ComposeCounterAppController;
    _.ComposeCounterApp = ComposeCounterApp;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=web-compose-in-js.js.map
