(function (_, $module$react, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core) {
  'use strict';
  //region block: imports
  var createElement = $module$react.createElement;
  var Fragment = $module$react.Fragment;
  var Unit_instance = kotlin_kotlin.$_$.v;
  var getChildArray = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core.$_$.c;
  var VOID = kotlin_kotlin.$_$.b;
  //endregion
  //region block: pre-declaration
  //endregion
  function FC(block) {
    var component = FC$lambda(block);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return component;
  }
  function FC_0(block) {
    var component = FC$lambda_0(block);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return component;
  }
  function FC$lambda($block) {
    return function () {
      return createElementOrNull($block);
    };
  }
  function FC$lambda$lambda($block, $props) {
    return function ($this$createElementOrNull) {
      $block($this$createElementOrNull, $props);
      return Unit_instance;
    };
  }
  function FC$lambda_0($block) {
    return function (props) {
      return createElementOrNull(FC$lambda$lambda($block, props));
    };
  }
  function create(_this__u8e3s4) {
    return createElement(_this__u8e3s4);
  }
  function createElementOrNull(block) {
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var tmp0_elvis_lhs = getChildArray(this_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var children = tmp;
    return createElement.apply(null, [Fragment, VOID].concat([].slice.call(children.slice())));
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FC;
  _.$_$.b = FC_0;
  _.$_$.c = create;
  //endregion
  return _;
}(module.exports, require('react'), require('./kotlin-kotlin-stdlib.js'), require('./kotlin-react-core.js')));

//# sourceMappingURL=kotlin-react.js.map
