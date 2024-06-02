package ru.thetax

import ru.thetax.calculator.TaxCalculator
import ru.thetax.calculator.TaxDetail
import ru.thetax.calculator.TaxRates
import kotlin.test.Test
import kotlin.test.assertEquals

class TaxCalculatorTest {
    @Test
    fun basicScenarios() {
        assertEquals(13000.0, TaxCalculator(100000.0).totalTax)

        assertEquals(
            listOf(
                TaxDetail(TaxRates.RATE_13, 13000.0),
            ),

            TaxCalculator(100000.0).taxDetails
        )
    }
}