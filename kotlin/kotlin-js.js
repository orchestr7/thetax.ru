(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var constructor = (class IteratorYieldResult {
    static [Symbol.hasInstance](instance) {
        return instance && (typeof instance === 'object') && (instance.done === false)
    }
    }.prototype).constructor;
  var iterator = kotlin_kotlin.$_$.a2;
  var CoroutineImpl = kotlin_kotlin.$_$.i1;
  var Unit_instance = kotlin_kotlin.$_$.v;
  var protoOf = kotlin_kotlin.$_$.x1;
  var THROW_CCE = kotlin_kotlin.$_$.k2;
  var SequenceScope = kotlin_kotlin.$_$.z1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a1;
  var initMetadataForLambda = kotlin_kotlin.$_$.u1;
  var VOID = kotlin_kotlin.$_$.b;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(iteratorFor$slambda, CoroutineImpl, VOID, [1]);
  //endregion
  function get_POW() {
    _init_properties_BigInt_kt__agomkx();
    return POW;
  }
  var POW;
  function get_n(_this__u8e3s4) {
    _init_properties_BigInt_kt__agomkx();
    return BigInt(_this__u8e3s4);
  }
  var properties_initialized_BigInt_kt_nhzooh;
  function _init_properties_BigInt_kt__agomkx() {
    if (!properties_initialized_BigInt_kt_nhzooh) {
      properties_initialized_BigInt_kt_nhzooh = true;
      POW = Function('base', 'exponent', 'return base ** exponent');
    }
  }
  function invoke(_this__u8e3s4, p1, p2) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4(p1, p2);
  }
  function iteratorFor(source) {
    // Inline function 'js.iterable.JsIteratorLike.iterator' call
    var this_0 = source[Symbol.iterator]();
    return iteratorFor_0(this_0);
  }
  function iteratorFor_0(source) {
    return iterator(iteratorFor$slambda_0(source, null));
  }
  function iteratorFor$slambda($source, resultContinuation) {
    this.ae_1 = $source;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(iteratorFor$slambda).fe = function ($this$iterator, $completion) {
    var tmp = this.ge($this$iterator, $completion);
    tmp.d4_1 = Unit_instance;
    tmp.e4_1 = null;
    return tmp.j4();
  };
  protoOf(iteratorFor$slambda).e5 = function (p1, $completion) {
    return this.fe(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(iteratorFor$slambda).j4 = function () {
    var suspendResult = this.d4_1;
    $sm: do
      try {
        var tmp = this.b4_1;
        switch (tmp) {
          case 0:
            this.c4_1 = 5;
            this.b4_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            var tmp_1 = this.ae_1.next();
            tmp_0.ce_1 = tmp_1 instanceof constructor ? tmp_1 : null;
            if (this.ce_1 == null) {
              this.b4_1 = 4;
              var tmp_2 = this;
              continue $sm;
            } else {
              this.de_1 = this.ce_1;
              this.b4_1 = 2;
              continue $sm;
            }

          case 2:
            this.ee_1 = this.de_1;
            this.b4_1 = 3;
            suspendResult = this.be_1.h7(this.ee_1.value, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.b4_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.e4_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.c4_1 === 5) {
          throw e;
        } else {
          this.b4_1 = this.c4_1;
          this.e4_1 = e;
        }
      }
     while (true);
  };
  protoOf(iteratorFor$slambda).ge = function ($this$iterator, completion) {
    var i = new iteratorFor$slambda(this.ae_1, completion);
    i.be_1 = $this$iterator;
    return i;
  };
  function iteratorFor$slambda_0($source, resultContinuation) {
    var i = new iteratorFor$slambda($source, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.fe($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function awaitPromiseLike(promise, $completion) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return await_0(promise, $completion);
  }
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js')));

//# sourceMappingURL=kotlin-js.js.map
