package ru.thetax.calculator

enum class TaxRates(val rate: Double, val limit: Double) {
    SELF_EMPLOYED(0.06, Double.NaN),
    NON_RESIDENT(0.30, Double.NaN),
    RATE_13(0.13, 2400000.0),
    RATE_15(0.15,5000000.0),
    RATE_18(0.18,20000000.0),
    RATE_20(0.20,50000000.0),
    RATE_22(0.22, Double.POSITIVE_INFINITY),
}
