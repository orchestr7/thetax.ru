(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var copyToArray = kotlin_kotlin.$_$.w;
  var isNaN_0 = kotlin_kotlin.$_$.o2;
  var Unit_instance = kotlin_kotlin.$_$.v;
  var sortedWith = kotlin_kotlin.$_$.y;
  var protoOf = kotlin_kotlin.$_$.x1;
  var initMetadataForClass = kotlin_kotlin.$_$.s1;
  var compareValues = kotlin_kotlin.$_$.z;
  var VOID = kotlin_kotlin.$_$.b;
  var listOf = kotlin_kotlin.$_$.x;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.p2;
  var getNumberHashCode = kotlin_kotlin.$_$.q1;
  var THROW_CCE = kotlin_kotlin.$_$.k2;
  var equals = kotlin_kotlin.$_$.p1;
  var enumEntries = kotlin_kotlin.$_$.l1;
  var Enum = kotlin_kotlin.$_$.e2;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0');
  initMetadataForClass(TaxCalculator, 'TaxCalculator');
  initMetadataForClass(TaxDetail, 'TaxDetail');
  initMetadataForClass(TaxRates, 'TaxRates', VOID, Enum);
  //endregion
  function calculateTaxForRegularGuy($this) {
    var totalTax = 0.0;
    var previousLimit = 0.0;
    // Inline function 'kotlin.collections.mutableListOf' call
    var taxDetails = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = get_entries();
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_1 = copyToArray(this_0);
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = this_1.length;
    while (inductionVariable < last) {
      var element = this_1[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'ru.thetax.calculator.TaxCalculator.calculateTaxForRegularGuy.<anonymous>' call
      if (!isNaN_0(element.a8_1)) {
        destination.i(element);
      }
    }
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = TaxCalculator$calculateTaxForRegularGuy$lambda;
    var tmp$ret$5 = new sam$kotlin_Comparator$0(tmp);
    var _iterator__ex2g4s = sortedWith(destination, tmp$ret$5).f();
    $l$loop: while (_iterator__ex2g4s.g()) {
      var rate = _iterator__ex2g4s.h();
      if ($this.b8_1 <= previousLimit)
        break $l$loop;
      // Inline function 'kotlin.comparisons.minOf' call
      var a = $this.b8_1;
      var b = rate.a8_1;
      var taxableIncome = Math.min(a, b) - previousLimit;
      var taxAmount = taxableIncome * rate.z7_1;
      taxDetails.i(new TaxDetail(rate, taxAmount));
      totalTax = totalTax + taxAmount;
      previousLimit = rate.a8_1;
    }
    $this.d8_1 = totalTax;
    $this.c8_1 = taxDetails;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.e8_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).f8 = function (a, b) {
    return this.e8_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.f8(a, b);
  };
  function TaxCalculator$calculateTaxForRegularGuy$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'ru.thetax.calculator.TaxCalculator.calculateTaxForRegularGuy.<anonymous>' call
    var tmp = a.a8_1;
    // Inline function 'ru.thetax.calculator.TaxCalculator.calculateTaxForRegularGuy.<anonymous>' call
    var tmp$ret$1 = b.a8_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function TaxCalculator(income, isResident, isSelfEmployed) {
    isResident = isResident === VOID ? true : isResident;
    isSelfEmployed = isSelfEmployed === VOID ? false : isSelfEmployed;
    this.b8_1 = income;
    this.d8_1 = 0.0;
    if (isSelfEmployed) {
      this.d8_1 = this.b8_1 * 0.06;
      this.c8_1 = listOf(new TaxDetail(TaxRates_SELF_EMPLOYED_getInstance(), this.b8_1 * 0.06));
    } else if (!isResident) {
      this.d8_1 = this.b8_1 * 0.3;
      this.c8_1 = listOf(new TaxDetail(TaxRates_NON_RESIDENT_getInstance(), this.b8_1 * 0.3));
    } else {
      calculateTaxForRegularGuy(this);
    }
  }
  protoOf(TaxCalculator).g8 = function () {
    var tmp = this.c8_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('taxDetails');
    }
  };
  function TaxDetail(taxRate, amount) {
    this.h8_1 = taxRate;
    this.i8_1 = amount;
  }
  protoOf(TaxDetail).toString = function () {
    return 'TaxDetail(taxRate=' + this.h8_1.toString() + ', amount=' + this.i8_1 + ')';
  };
  protoOf(TaxDetail).hashCode = function () {
    var result = this.h8_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.i8_1) | 0;
    return result;
  };
  protoOf(TaxDetail).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TaxDetail))
      return false;
    var tmp0_other_with_cast = other instanceof TaxDetail ? other : THROW_CCE();
    if (!this.h8_1.equals(tmp0_other_with_cast.h8_1))
      return false;
    if (!equals(this.i8_1, tmp0_other_with_cast.i8_1))
      return false;
    return true;
  };
  var TaxRates_SELF_EMPLOYED_instance;
  var TaxRates_NON_RESIDENT_instance;
  var TaxRates_RATE_13_instance;
  var TaxRates_RATE_15_instance;
  var TaxRates_RATE_18_instance;
  var TaxRates_RATE_20_instance;
  var TaxRates_RATE_22_instance;
  function values() {
    return [TaxRates_SELF_EMPLOYED_getInstance(), TaxRates_NON_RESIDENT_getInstance(), TaxRates_RATE_13_getInstance(), TaxRates_RATE_15_getInstance(), TaxRates_RATE_18_getInstance(), TaxRates_RATE_20_getInstance(), TaxRates_RATE_22_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var TaxRates_entriesInitialized;
  function TaxRates_initEntries() {
    if (TaxRates_entriesInitialized)
      return Unit_instance;
    TaxRates_entriesInitialized = true;
    TaxRates_SELF_EMPLOYED_instance = new TaxRates('SELF_EMPLOYED', 0, 0.06, NaN);
    TaxRates_NON_RESIDENT_instance = new TaxRates('NON_RESIDENT', 1, 0.3, NaN);
    TaxRates_RATE_13_instance = new TaxRates('RATE_13', 2, 0.13, 2400000.0);
    TaxRates_RATE_15_instance = new TaxRates('RATE_15', 3, 0.15, 5000000.0);
    TaxRates_RATE_18_instance = new TaxRates('RATE_18', 4, 0.18, 2.0E7);
    TaxRates_RATE_20_instance = new TaxRates('RATE_20', 5, 0.2, 5.0E7);
    TaxRates_RATE_22_instance = new TaxRates('RATE_22', 6, 0.22, Infinity);
  }
  var $ENTRIES;
  function TaxRates(name, ordinal, rate, limit) {
    Enum.call(this, name, ordinal);
    this.z7_1 = rate;
    this.a8_1 = limit;
  }
  function TaxRates_SELF_EMPLOYED_getInstance() {
    TaxRates_initEntries();
    return TaxRates_SELF_EMPLOYED_instance;
  }
  function TaxRates_NON_RESIDENT_getInstance() {
    TaxRates_initEntries();
    return TaxRates_NON_RESIDENT_instance;
  }
  function TaxRates_RATE_13_getInstance() {
    TaxRates_initEntries();
    return TaxRates_RATE_13_instance;
  }
  function TaxRates_RATE_15_getInstance() {
    TaxRates_initEntries();
    return TaxRates_RATE_15_instance;
  }
  function TaxRates_RATE_18_getInstance() {
    TaxRates_initEntries();
    return TaxRates_RATE_18_instance;
  }
  function TaxRates_RATE_20_getInstance() {
    TaxRates_initEntries();
    return TaxRates_RATE_20_instance;
  }
  function TaxRates_RATE_22_getInstance() {
    TaxRates_initEntries();
    return TaxRates_RATE_22_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = TaxRates_RATE_13_getInstance;
  _.$_$.b = TaxRates_RATE_15_getInstance;
  _.$_$.c = TaxRates_RATE_18_getInstance;
  _.$_$.d = TaxRates_RATE_20_getInstance;
  _.$_$.e = TaxRates_RATE_22_getInstance;
  _.$_$.f = TaxCalculator;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js')));

//# sourceMappingURL=thetax-common.js.map
