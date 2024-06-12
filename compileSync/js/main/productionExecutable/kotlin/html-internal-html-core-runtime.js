(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    root['html-internal-html-core-runtime'] = factory(typeof this['html-internal-html-core-runtime'] === 'undefined' ? {} : this['html-internal-html-core-runtime'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kotlinx-coroutines-core']);
  }
}(globalThis, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.u4;
  var Unit_instance = kotlin_kotlin.$_$.s1;
  var ensureNotNull = kotlin_kotlin.$_$.v5;
  var initMetadataForClass = kotlin_kotlin.$_$.g4;
  var AbstractApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.o5;
  var clear = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var VOID = kotlin_kotlin.$_$.c;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var Companion_instance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var CoroutineImpl = kotlin_kotlin.$_$.s3;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.p4;
  var initMetadataForLambda = kotlin_kotlin.$_$.k4;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var initMetadataForObject = kotlin_kotlin.$_$.l4;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var get_DefaultMonotonicFrameClock = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var Recomposer = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ControlledComposition = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DomNodeWrapper, 'DomNodeWrapper');
  initMetadataForClass(DomApplier, 'DomApplier', VOID, AbstractApplier);
  initMetadataForLambda(GlobalSnapshotManager$schedule$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(GlobalSnapshotManager, 'GlobalSnapshotManager');
  initMetadataForClass(JsMicrotasksDispatcher, 'JsMicrotasksDispatcher', JsMicrotasksDispatcher, CoroutineDispatcher);
  initMetadataForLambda(renderComposable$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(renderComposable$scope$1);
  //endregion
  function DomNodeWrapper(node) {
    this.u1v_1 = node;
    this.v1v_1 = 0;
  }
  protoOf(DomNodeWrapper).w1v = function () {
    return this.u1v_1;
  };
  protoOf(DomNodeWrapper).x1v = function (index, nodeWrapper) {
    var length = this.w1v().childNodes.length;
    if (index < length) {
      var tmp = this.w1v();
      var tmp_0 = nodeWrapper.w1v();
      // Inline function 'org.w3c.dom.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = this.w1v().childNodes[index];
      tmp.insertBefore(tmp_0, ensureNotNull(tmp$ret$1));
    } else {
      this.w1v().appendChild(nodeWrapper.w1v());
    }
  };
  protoOf(DomNodeWrapper).fs = function (index, count) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.internal.runtime.DomNodeWrapper.remove.<anonymous>' call
        var tmp = this.w1v();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.w1v().childNodes[index];
        tmp.removeChild(ensureNotNull(tmp$ret$1));
      }
       while (inductionVariable < count);
  };
  protoOf(DomNodeWrapper).gs = function (from, to, count) {
    if (from === to) {
      return Unit_instance;
    }
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromIndex = from > to ? from + i | 0 : from;
        var toIndex = from > to ? to + i | 0 : (to + count | 0) - 2 | 0;
        var tmp = this.w1v();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.w1v().childNodes[fromIndex];
        var child = tmp.removeChild(ensureNotNull(tmp$ret$1));
        var tmp_0 = this.w1v();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = this.w1v().childNodes[toIndex];
        tmp_0.insertBefore(child, ensureNotNull(tmp$ret$3));
      }
       while (inductionVariable < count);
  };
  function DomApplier(root) {
    AbstractApplier.call(this, root);
    this.b1w_1 = 0;
  }
  protoOf(DomApplier).c1w = function (index, instance) {
  };
  protoOf(DomApplier).ds = function (index, instance) {
    return this.c1w(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).d1w = function (index, instance) {
    this.yr().x1v(index, instance);
  };
  protoOf(DomApplier).es = function (index, instance) {
    return this.d1w(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).fs = function (index, count) {
    this.yr().fs(index, count);
  };
  protoOf(DomApplier).gs = function (from, to, count) {
    this.yr().gs(from, to, count);
  };
  protoOf(DomApplier).ps = function () {
    clear(this.ks_1.w1v());
  };
  function synchronize($this) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.j1w_1.e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      // Inline function 'org.jetbrains.compose.web.internal.runtime.GlobalSnapshotManager.synchronize.<anonymous>' call
      element();
    }
    $this.j1w_1.p2();
    $this.k1w_1 = false;
  }
  function schedule($this, block) {
    $this.j1w_1.m(block);
    if (!$this.k1w_1) {
      $this.k1w_1 = true;
      launch($this.h1w_1, VOID, VOID, GlobalSnapshotManager$schedule$slambda_0(null));
    }
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda(it) {
    if (!GlobalSnapshotManager_getInstance().f1w_1) {
      GlobalSnapshotManager_getInstance().f1w_1 = true;
      var tmp = GlobalSnapshotManager_getInstance();
      schedule(tmp, GlobalSnapshotManager$globalWriteObserver$lambda$lambda);
    }
    return Unit_instance;
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda$lambda() {
    GlobalSnapshotManager_getInstance().f1w_1 = false;
    Companion_instance.f1c();
    return Unit_instance;
  }
  function GlobalSnapshotManager$schedule$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GlobalSnapshotManager$schedule$slambda).u1c = function ($this$launch, $completion) {
    var tmp = this.v1c($this$launch, $completion);
    tmp.s7_1 = Unit_instance;
    tmp.t7_1 = null;
    return tmp.y7();
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).x8 = function (p1, $completion) {
    return this.u1c((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).y7 = function () {
    var suspendResult = this.s7_1;
    $sm: do
      try {
        var tmp = this.q7_1;
        if (tmp === 0) {
          this.r7_1 = 1;
          synchronize(GlobalSnapshotManager_getInstance());
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.t7_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).v1c = function ($this$launch, completion) {
    var i = new GlobalSnapshotManager$schedule$slambda(completion);
    i.u1w_1 = $this$launch;
    return i;
  };
  function GlobalSnapshotManager$schedule$slambda_0(resultContinuation) {
    var i = new GlobalSnapshotManager$schedule$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.u1c($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GlobalSnapshotManager() {
    GlobalSnapshotManager_instance = this;
    this.e1w_1 = false;
    this.f1w_1 = false;
    this.g1w_1 = null;
    this.h1w_1 = CoroutineScope_0((new JsMicrotasksDispatcher()).zb(SupervisorJob()));
    var tmp = this;
    tmp.i1w_1 = GlobalSnapshotManager$globalWriteObserver$lambda;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.j1w_1 = ArrayList_init_$Create$();
    this.k1w_1 = false;
    this.l1w_1 = 8;
  }
  protoOf(GlobalSnapshotManager).v1w = function () {
    if (!this.e1w_1) {
      this.e1w_1 = true;
      this.g1w_1 = Companion_instance.j1r(this.i1w_1);
    }
  };
  var GlobalSnapshotManager_instance;
  function GlobalSnapshotManager_getInstance() {
    if (GlobalSnapshotManager_instance == null)
      new GlobalSnapshotManager();
    return GlobalSnapshotManager_instance;
  }
  function JsMicrotasksDispatcher$dispatch$lambda($block) {
    return function (it) {
      $block.uh();
      return Unit_instance;
    };
  }
  function JsMicrotasksDispatcher() {
    CoroutineDispatcher.call(this);
    this.x1w_1 = 0;
  }
  protoOf(JsMicrotasksDispatcher).di = function (context, block) {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(JsMicrotasksDispatcher$dispatch$lambda(block));
  };
  function renderComposable(rootElementId, content) {
    return renderComposable_0(ensureNotNull(document.getElementById(rootElementId)), VOID, content);
  }
  function renderComposable_0(root, monotonicFrameClock, content) {
    monotonicFrameClock = monotonicFrameClock === VOID ? get_DefaultMonotonicFrameClock() : monotonicFrameClock;
    GlobalSnapshotManager_getInstance().v1w();
    var context = monotonicFrameClock.zb(new JsMicrotasksDispatcher());
    var recomposer = new Recomposer(context);
    var tmp = CoroutineScope_0(context);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp, VOID, tmp_0, renderComposable$slambda_0(recomposer, null));
    var composition = ControlledComposition(new DomApplier(new DomNodeWrapper(root)), recomposer);
    var scope = new renderComposable$scope$1(root);
    composition.z18(ComposableLambda$invoke$ref(composableLambdaInstance(-1520853124, true, renderComposable$lambda(content, scope))));
    return composition;
  }
  function renderComposable$slambda($recomposer, resultContinuation) {
    this.g1x_1 = $recomposer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderComposable$slambda).u1c = function ($this$launch, $completion) {
    var tmp = this.v1c($this$launch, $completion);
    tmp.s7_1 = Unit_instance;
    tmp.t7_1 = null;
    return tmp.y7();
  };
  protoOf(renderComposable$slambda).x8 = function (p1, $completion) {
    return this.u1c((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderComposable$slambda).y7 = function () {
    var suspendResult = this.s7_1;
    $sm: do
      try {
        var tmp = this.q7_1;
        switch (tmp) {
          case 0:
            this.r7_1 = 2;
            this.q7_1 = 1;
            suspendResult = this.g1x_1.l1f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.t7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.r7_1 === 2) {
          throw e;
        } else {
          this.q7_1 = this.r7_1;
          this.t7_1 = e;
        }
      }
     while (true);
  };
  protoOf(renderComposable$slambda).v1c = function ($this$launch, completion) {
    var i = new renderComposable$slambda(this.g1x_1, completion);
    i.h1x_1 = $this$launch;
    return i;
  };
  function renderComposable$slambda_0($recomposer, resultContinuation) {
    var i = new renderComposable$slambda($recomposer, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.u1c($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function renderComposable$scope$1($root) {
    this.i1x_1 = $root;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.c14(p0, p1);
    };
  }
  function renderComposable$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.e14()) {
        if (isTraceInProgress()) {
          traceEventStart(-1520853124, $changed, -1, 'org.jetbrains.compose.web.renderComposable.<anonymous> (renderComposable.kt:60)');
        }
        $content($scope, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.vy();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DomApplier;
  _.$_$.b = DomNodeWrapper;
  _.$_$.c = renderComposable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-internal-html-core-runtime.js.map
