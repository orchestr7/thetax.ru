(function (_, $module$react_dom_client_y5z5eu, $module$react_router_dom_s6xi74, $module$react, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom, kotlin_thetax_common) {
  'use strict';
  //region block: imports
  var createRoot = $module$react_dom_client_y5z5eu.createRoot;
  var RouterProvider = $module$react_router_dom_s6xi74.RouterProvider;
  var createBrowserRouter = $module$react_router_dom_s6xi74.createBrowserRouter;
  var useState = $module$react.useState;
  var Unit_instance = kotlin_kotlin.$_$.v;
  var THROW_CCE = kotlin_kotlin.$_$.k2;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.c;
  var addChild = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core.$_$.b;
  var FC = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.a;
  var defineProp = kotlin_kotlin.$_$.o1;
  var ReactHTML_instance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.a;
  var useEffect = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core.$_$.d;
  var replace = kotlin_kotlin.$_$.c2;
  var toDouble = kotlin_kotlin.$_$.d2;
  var NumberFormatException = kotlin_kotlin.$_$.i2;
  var addChildNode = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core.$_$.a;
  var TaxCalculator = kotlin_thetax_common.$_$.f;
  var TaxRates_RATE_13_getInstance = kotlin_thetax_common.$_$.a;
  var TaxRates_RATE_15_getInstance = kotlin_thetax_common.$_$.b;
  var TaxRates_RATE_18_getInstance = kotlin_thetax_common.$_$.c;
  var TaxRates_RATE_20_getInstance = kotlin_thetax_common.$_$.d;
  var TaxRates_RATE_22_getInstance = kotlin_thetax_common.$_$.e;
  var isNaN_0 = kotlin_kotlin.$_$.o2;
  var FC_0 = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.b;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_App() {
    _init_properties_App_kt__fk8usv();
    return App;
  }
  var App;
  function main() {
    _init_properties_App_kt__fk8usv();
    // Inline function 'kotlin.js.asDynamic' call
    if (window.__karma__) {
      return Unit_instance;
    }
    require('../scss/tax-app.scss');
    require('bootstrap');
    var tmp = document.getElementById('wrapper');
    var mainDiv = tmp instanceof HTMLElement ? tmp : THROW_CCE();
    createRoot(mainDiv).render(create(get_App()));
  }
  function App$lambda($this$FC) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'react.ChildrenBuilder.invoke' call
    var this_0 = RouterProvider;
    var block = App$lambda$lambda;
    addChild($this$FC, this_0, block);
    return Unit_instance;
  }
  function App$lambda$lambda($this$RouterProvider) {
    _init_properties_App_kt__fk8usv();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'js.objects.jso' call
    // Inline function 'kotlin.apply' call
    // Inline function 'js.objects.jso' call
    var this_0 = {};
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ru.thetax.App.<anonymous>.<anonymous>.<anonymous>' call
    this_0.path = '/';
    this_0.element = create(get_taxCalculatorView());
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [this_0];
    $this$RouterProvider.router = createBrowserRouter(tmp$ret$5);
    return Unit_instance;
  }
  var properties_initialized_App_kt_kalemn;
  function _init_properties_App_kt__fk8usv() {
    if (!properties_initialized_App_kt_kalemn) {
      properties_initialized_App_kt_kalemn = true;
      App = FC(App$lambda);
    }
  }
  function mainWrapper() {
    main();
  }
  function get_taxCalculatorView() {
    _init_properties_TaxCalculatorView_kt__vx5rj4();
    return taxCalculatorView;
  }
  var taxCalculatorView;
  function get_card() {
    _init_properties_TaxCalculatorView_kt__vx5rj4();
    return card;
  }
  var card;
  function rowWithRates(_this__u8e3s4, rate, value) {
    _init_properties_TaxCalculatorView_kt__vx5rj4();
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.div' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = rowWithRates$lambda(rate, value);
    addChild(_this__u8e3s4, 'div', block);
  }
  function generalRow(_this__u8e3s4, text, value) {
    _init_properties_TaxCalculatorView_kt__vx5rj4();
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.div' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = generalRow$lambda(text, value);
    addChild(_this__u8e3s4, 'div', block);
  }
  function taxCalculatorView$lambda($this$FC) {
    _init_properties_TaxCalculatorView_kt__vx5rj4();
    var _destruct__k2r9zo = useState('');
    // Inline function 'react.StateInstance.component1' call
    // Inline function 'seskar.js.internal.getIndexedValue' call
    var inputSalary = _destruct__k2r9zo[0];
    // Inline function 'react.StateInstance.component2' call
    // Inline function 'seskar.js.internal.getIndexedValue' call
    var setSalary = _destruct__k2r9zo[1];
    var _destruct__k2r9zo_0 = useState(0.0);
    // Inline function 'react.StateInstance.component1' call
    // Inline function 'seskar.js.internal.getIndexedValue' call
    var salaryDouble = _destruct__k2r9zo_0[0];
    // Inline function 'react.StateInstance.component2' call
    // Inline function 'seskar.js.internal.getIndexedValue' call
    var setSalaryDouble = _destruct__k2r9zo_0[1];
    var _destruct__k2r9zo_1 = useState('');
    // Inline function 'react.StateInstance.component1' call
    // Inline function 'seskar.js.internal.getIndexedValue' call
    var validInput = _destruct__k2r9zo_1[0];
    // Inline function 'react.StateInstance.component2' call
    // Inline function 'seskar.js.internal.getIndexedValue' call
    var setValidInput = _destruct__k2r9zo_1[1];
    useEffect([inputSalary], taxCalculatorView$lambda$lambda(setValidInput, setSalaryDouble, inputSalary, salaryDouble));
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.div' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = taxCalculatorView$lambda$lambda_0(validInput, inputSalary, setSalary, salaryDouble);
    addChild($this$FC, 'div', block);
    return Unit_instance;
  }
  function taxCalculatorView$lambda$lambda($setValidInput, $setSalaryDouble, $inputSalary, $salaryDouble) {
    return function ($this$useEffect) {
      var tmp;
      try {
        $setSalaryDouble(toDouble(replace(replace($inputSalary, ' ', ''), ',', '.')));
        tmp = $salaryDouble < 0 ? 'is-invalid' : 'is-valid';
      } catch ($p) {
        var tmp_0;
        if ($p instanceof NumberFormatException) {
          var e = $p;
          $setSalaryDouble(NaN);
          tmp_0 = 'is-invalid';
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      $setValidInput(tmp);
      return Unit_instance;
    };
  }
  function taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($setSalary) {
    return function (event) {
      $setSalary(event.target.value);
      return Unit_instance;
    };
  }
  function taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($validInput, $inputSalary, $setSalary) {
    return function ($this$input) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$input.className = 'form-control custom-input ' + $validInput;
      $this$input.value = $inputSalary;
      $this$input.placeholder = '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043E\u0445\u043E\u0434';
      $this$input.title = '\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430 \u0432 \u0440\u0443\u0431\u043B\u044F\u0445';
      // Inline function 'kotlin.js.asDynamic' call
      $this$input['data-toggle'] = 'tooltip';
      // Inline function 'kotlin.js.asDynamic' call
      $this$input['data-placement'] = 'top';
      $this$input.onChange = taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($setSalary);
      return Unit_instance;
    };
  }
  function taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda$lambda($validInput, $inputSalary, $setSalary) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'input-group shadow mb-1 px-0';
      // Inline function 'react.dom.html.ReactHTML.input' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($validInput, $inputSalary, $setSalary);
      addChild($this$div, 'input', block);
      return Unit_instance;
    };
  }
  function taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda($validInput, $inputSalary, $setSalary) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'col-8 pe-1';
      // Inline function 'react.dom.html.ReactHTML.div' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda$lambda($validInput, $inputSalary, $setSalary);
      addChild($this$div, 'div', block);
      return Unit_instance;
    };
  }
  function taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda_0($this$div) {
    _init_properties_TaxCalculatorView_kt__vx5rj4();
    // Inline function 'web.cssom.ClassName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$div.className = 'col-4 ps-0';
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.select' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
    addChild($this$div, 'select', block);
    return Unit_instance;
  }
  function taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($this$select) {
    _init_properties_TaxCalculatorView_kt__vx5rj4();
    // Inline function 'web.cssom.ClassName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$select.className = 'form-select';
    // Inline function 'react.dom.aria.ariaLabel' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$select['aria-label'] = 'Default select example';
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.option' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
    addChild($this$select, 'option', block);
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.option' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block_0 = taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1;
    addChild($this$select, 'option', block_0);
    return Unit_instance;
  }
  function taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($this$option) {
    _init_properties_TaxCalculatorView_kt__vx5rj4();
    $this$option.selected = true;
    $this$option.value = '\u0412 \u0433\u043E\u0434';
    // Inline function 'react.ChildrenBuilder.unaryPlus' call
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = '\u0412 \u0433\u043E\u0434';
    addChildNode($this$option, tmp$ret$2);
    return Unit_instance;
  }
  function taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($this$option) {
    _init_properties_TaxCalculatorView_kt__vx5rj4();
    $this$option.value = '\u0412 \u043C\u0435\u0441\u044F\u0446';
    // Inline function 'react.ChildrenBuilder.unaryPlus' call
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = '\u0412 \u043C\u0435\u0441\u044F\u0446';
    addChildNode($this$option, tmp$ret$2);
    return Unit_instance;
  }
  function taxCalculatorView$lambda$lambda$lambda$lambda$lambda($validInput, $inputSalary, $setSalary) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'row justify-content-center mb-4';
      // Inline function 'react.dom.html.ReactHTML.div' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda($validInput, $inputSalary, $setSalary);
      addChild($this$div, 'div', block);
      // Inline function 'react.dom.html.ReactHTML.div' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block_0 = taxCalculatorView$lambda$lambda$lambda$lambda$lambda$lambda_0;
      addChild($this$div, 'div', block_0);
      return Unit_instance;
    };
  }
  function taxCalculatorView$lambda$lambda$lambda$lambda($validInput, $inputSalary, $setSalary) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'col-lg-5 col-md-7 col-sm-8 col-xs-12';
      // Inline function 'react.dom.html.ReactHTML.div' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = taxCalculatorView$lambda$lambda$lambda$lambda$lambda($validInput, $inputSalary, $setSalary);
      addChild($this$div, 'div', block);
      return Unit_instance;
    };
  }
  function taxCalculatorView$lambda$lambda$lambda($validInput, $inputSalary, $setSalary) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'row justify-content-center';
      // Inline function 'react.dom.html.ReactHTML.div' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = taxCalculatorView$lambda$lambda$lambda$lambda($validInput, $inputSalary, $setSalary);
      addChild($this$div, 'div', block);
      return Unit_instance;
    };
  }
  function taxCalculatorView$lambda$lambda$lambda_0($salaryDouble) {
    return function ($this$card) {
      $this$card.salaryDouble = $salaryDouble;
      return Unit_instance;
    };
  }
  function taxCalculatorView$lambda$lambda_0($validInput, $inputSalary, $setSalary, $salaryDouble) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'container';
      // Inline function 'react.dom.html.ReactHTML.div' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = taxCalculatorView$lambda$lambda$lambda($validInput, $inputSalary, $setSalary);
      addChild($this$div, 'div', block);
      var tmp;
      if ($validInput === 'is-valid') {
        var this_0 = get_card();
        var block_0 = taxCalculatorView$lambda$lambda$lambda_0($salaryDouble);
        addChild($this$div, this_0, block_0);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function card$lambda($this$FC, props) {
    _init_properties_TaxCalculatorView_kt__vx5rj4();
    var tax = new TaxCalculator(props.salaryDouble, true, false);
    // Inline function 'react.ChildrenBuilder.invoke' call
    // Inline function 'react.dom.html.ReactHTML.div' call
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var block = card$lambda$lambda(props, tax);
    addChild($this$FC, 'div', block);
    return Unit_instance;
  }
  function card$lambda$lambda$lambda$lambda$lambda($this$div) {
    _init_properties_TaxCalculatorView_kt__vx5rj4();
    // Inline function 'web.cssom.ClassName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$div.className = 'card-header';
    // Inline function 'react.ChildrenBuilder.unaryPlus' call
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = '\u0420\u0430\u0441\u0447\u0435\u0442';
    addChildNode($this$div, tmp$ret$5);
    return Unit_instance;
  }
  function card$lambda$lambda$lambda$lambda$lambda$lambda($this$hr) {
    _init_properties_TaxCalculatorView_kt__vx5rj4();
    // Inline function 'web.cssom.ClassName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$hr.className = 'bg-danger border-2 border-top border-secondary';
    return Unit_instance;
  }
  function card$lambda$lambda$lambda$lambda$lambda$lambda_0($this$hr) {
    _init_properties_TaxCalculatorView_kt__vx5rj4();
    // Inline function 'web.cssom.ClassName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$hr.className = 'bg-danger border-2 border-top border-secondary';
    return Unit_instance;
  }
  function card$lambda$lambda$lambda$lambda$lambda$lambda_1($this$hr) {
    _init_properties_TaxCalculatorView_kt__vx5rj4();
    // Inline function 'web.cssom.ClassName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$hr.className = 'bg-danger border-2 border-top border-success';
    return Unit_instance;
  }
  function card$lambda$lambda$lambda$lambda$lambda_0($props, $tax) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'card-body text-dark';
      generalRow($this$div, '\u0414\u043E\u0445\u043E\u0434 \u0434\u043E \u043D\u0430\u043B\u043E\u0433\u043E\u0432', $props.salaryDouble);
      // Inline function 'react.dom.html.ReactHTML.hr' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = card$lambda$lambda$lambda$lambda$lambda$lambda;
      addChild($this$div, 'hr', block);
      rowWithRates($this$div, TaxRates_RATE_13_getInstance(), $tax.g8());
      rowWithRates($this$div, TaxRates_RATE_15_getInstance(), $tax.g8());
      rowWithRates($this$div, TaxRates_RATE_18_getInstance(), $tax.g8());
      rowWithRates($this$div, TaxRates_RATE_20_getInstance(), $tax.g8());
      rowWithRates($this$div, TaxRates_RATE_22_getInstance(), $tax.g8());
      // Inline function 'react.dom.html.ReactHTML.hr' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block_0 = card$lambda$lambda$lambda$lambda$lambda$lambda_0;
      addChild($this$div, 'hr', block_0);
      generalRow($this$div, '\u041E\u0431\u0449\u0438\u0439 \u043D\u0430\u043B\u043E\u0433', $tax.d8_1);
      // Inline function 'react.dom.html.ReactHTML.hr' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block_1 = card$lambda$lambda$lambda$lambda$lambda$lambda_1;
      addChild($this$div, 'hr', block_1);
      generalRow($this$div, '\u041F\u043E\u0441\u043B\u0435 \u043D\u0430\u043B\u043E\u0433\u043E\u0432', $props.salaryDouble - $tax.d8_1);
      return Unit_instance;
    };
  }
  function card$lambda$lambda$lambda$lambda($props, $tax) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'card mb-3';
      // Inline function 'react.dom.html.ReactHTML.div' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = card$lambda$lambda$lambda$lambda$lambda;
      addChild($this$div, 'div', block);
      // Inline function 'react.dom.html.ReactHTML.div' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block_0 = card$lambda$lambda$lambda$lambda$lambda_0($props, $tax);
      addChild($this$div, 'div', block_0);
      return Unit_instance;
    };
  }
  function card$lambda$lambda$lambda($props, $tax) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'col-lg-5 col-md-7 col-sm-8 col-xs-12';
      // Inline function 'react.dom.html.ReactHTML.div' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = card$lambda$lambda$lambda$lambda($props, $tax);
      addChild($this$div, 'div', block);
      return Unit_instance;
    };
  }
  function card$lambda$lambda($props, $tax) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'row justify-content-center';
      // Inline function 'react.dom.html.ReactHTML.div' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = card$lambda$lambda$lambda($props, $tax);
      addChild($this$div, 'div', block);
      return Unit_instance;
    };
  }
  function rowWithRates$lambda$lambda$lambda($rate) {
    return function ($this$p) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$p.className = 'ms-5 fs-6';
      // Inline function 'react.ReactNode' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = '\u0421\u0443\u043C\u043C\u0430 \u043D\u0430\u043B\u043E\u0433\u0430 ' + $rate.z7_1 * 100 + '%';
      addChildNode($this$p, tmp$ret$5);
      return Unit_instance;
    };
  }
  function rowWithRates$lambda$lambda($rate) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'col-7';
      // Inline function 'react.dom.html.ReactHTML.p' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = rowWithRates$lambda$lambda$lambda($rate);
      addChild($this$div, 'p', block);
      return Unit_instance;
    };
  }
  function rowWithRates$lambda$lambda_0($value, $rate) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'col-5 fs-6 text-end';
      // Inline function 'kotlin.collections.find' call
      var this_0 = $value;
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator = this_0.f();
        while (tmp0_iterator.g()) {
          var element = tmp0_iterator.h();
          // Inline function 'ru.thetax.views.rowWithRates.<anonymous>.<anonymous>.<anonymous>' call
          if (element.h8_1.equals($rate)) {
            tmp$ret$4 = element;
            break $l$block;
          }
        }
        tmp$ret$4 = null;
      }
      var tmp0_safe_receiver = tmp$ret$4;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i8_1;
      var tmp0_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString();
      // Inline function 'react.ReactNode' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$8 = tmp0_elvis_lhs == null ? '0.0' : tmp0_elvis_lhs;
      addChildNode($this$div, tmp$ret$8);
      return Unit_instance;
    };
  }
  function rowWithRates$lambda($rate, $value) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'row';
      // Inline function 'react.dom.html.ReactHTML.div' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = rowWithRates$lambda$lambda($rate);
      addChild($this$div, 'div', block);
      // Inline function 'react.dom.html.ReactHTML.div' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block_0 = rowWithRates$lambda$lambda_0($value, $rate);
      addChild($this$div, 'div', block_0);
      return Unit_instance;
    };
  }
  function generalRow$lambda$lambda$lambda($text) {
    return function ($this$h5) {
      // Inline function 'react.ReactNode' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = $text;
      addChildNode($this$h5, tmp$ret$2);
      return Unit_instance;
    };
  }
  function generalRow$lambda$lambda($text) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'col-7';
      // Inline function 'react.dom.html.ReactHTML.h5' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = generalRow$lambda$lambda$lambda($text);
      addChild($this$div, 'h5', block);
      return Unit_instance;
    };
  }
  function generalRow$lambda$lambda_0($value) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'col-5 text-end';
      // Inline function 'react.ReactNode' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = isNaN_0($value) || $value === 0.0 ? '0.0' : $value.toString();
      addChildNode($this$div, tmp$ret$5);
      return Unit_instance;
    };
  }
  function generalRow$lambda($text, $value) {
    return function ($this$div) {
      // Inline function 'web.cssom.ClassName' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$div.className = 'row';
      // Inline function 'react.dom.html.ReactHTML.div' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block = generalRow$lambda$lambda($text);
      addChild($this$div, 'div', block);
      // Inline function 'react.dom.html.ReactHTML.div' call
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var block_0 = generalRow$lambda$lambda_0($value);
      addChild($this$div, 'div', block_0);
      return Unit_instance;
    };
  }
  var properties_initialized_TaxCalculatorView_kt_dyh8w2;
  function _init_properties_TaxCalculatorView_kt__vx5rj4() {
    if (!properties_initialized_TaxCalculatorView_kt_dyh8w2) {
      properties_initialized_TaxCalculatorView_kt_dyh8w2 = true;
      taxCalculatorView = FC(taxCalculatorView$lambda);
      card = FC_0(card$lambda);
    }
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $ru = _.ru || (_.ru = {});
    var $ru$thetax = $ru.thetax || ($ru.thetax = {});
    defineProp($ru$thetax, 'App', get_App);
  }
  $jsExportAll$(_);
  //endregion
  mainWrapper();
  return _;
}(module.exports, require('react-dom/client'), require('react-router-dom'), require('react'), require('./kotlin-kotlin-stdlib.js'), require('./kotlin-react.js'), require('./kotlin-react-core.js'), require('./kotlin-react-dom.js'), require('./thetax-common.js')));

//# sourceMappingURL=thetax-frontend.js.map
