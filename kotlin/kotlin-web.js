(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.v;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var sequenceOf = kotlin_kotlin.$_$.b2;
  var resume = kotlin_kotlin.$_$.k1;
  var resumeWithException = kotlin_kotlin.$_$.j1;
  //endregion
  //region block: pre-declaration
  //endregion
  function addEventHandler(_this__u8e3s4, type, handler) {
    return addEventHandler_0(_this__u8e3s4, type, undefined, handler);
  }
  function addEventHandler_0(_this__u8e3s4, type, options, handler) {
    _this__u8e3s4.addEventListener(type, handler, options);
    return addEventHandler$lambda(_this__u8e3s4, type, handler, options);
  }
  function addEventHandler$lambda($this_addEventHandler, $type, $handler, $options) {
    return function () {
      $this_addEventHandler.removeEventListener($type, $handler, $options);
      return Unit_instance;
    };
  }
  function safeAny(signal1, signal2) {
    if (signal1 == null)
      return signal2;
    if (signal1.aborted)
      return signal1;
    if (signal2.aborted)
      return signal2;
    var controller = new AbortController();
    // Inline function 'kotlin.collections.mutableListOf' call
    var handlers = ArrayList_init_$Create$();
    // Inline function 'web.events.EventHandler' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var abortHandler = safeAny$lambda(handlers, controller);
    // Inline function 'kotlin.sequences.mapTo' call
    var tmp0_iterator = sequenceOf([signal1, signal2]).f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      // Inline function 'web.abort.internal.safeAny.<anonymous>' call
      // Inline function 'web.events.EventTypes.abort' call
      var tmp$ret$5 = addEventHandler(item, 'abort', abortHandler);
      handlers.i(tmp$ret$5);
    }
    return controller.signal;
  }
  function safeAny$lambda($handlers, $controller) {
    return function (event) {
      var tmp0_iterator = $handlers.f();
      while (tmp0_iterator.g()) {
        var element = tmp0_iterator.h();
        // Inline function 'web.abort.internal.safeAny.<anonymous>.<anonymous>' call
        element();
      }
      $controller.abort(event.currentTarget.reason);
      return Unit_instance;
    };
  }
  function patchAbortOptions(options, controller) {
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'web.abort.internal.patchAbortOptions.<anonymous>' call
    this_0.signal = safeAny(options == null ? null : options.signal, controller.signal);
    var abortOptions = this_0;
    var tmp = Object;
    // Inline function 'js.objects.jso' call
    var tmp$ret$3 = {};
    return tmp.assign(tmp$ret$3, options, abortOptions);
  }
  function awaitPromiseLike$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_instance;
    };
  }
  function resume$ref($boundThis) {
    var l = function (p0) {
      resume($boundThis, p0);
      return Unit_instance;
    };
    l.callableName = 'resume';
    return l;
  }
  function resumeWithException$ref($boundThis) {
    var l = function (p0) {
      resumeWithException($boundThis, p0);
      return Unit_instance;
    };
    l.callableName = 'resumeWithException';
    return l;
  }
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js')));

//# sourceMappingURL=kotlin-web.js.map
