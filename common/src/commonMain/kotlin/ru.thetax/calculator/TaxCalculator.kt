package ru.thetax.calculator

const val selfEmployedTax = 0.06
const val nonResidentTax = 0.30

data class TaxDetail(
    val taxRate: TaxRates, val amount: Double
)

class TaxCalculator(private val income: Double, isResident: Boolean = true, isSelfEmployed: Boolean = false, isOldTax:Boolean = false) {
    lateinit var taxDetails: List<TaxDetail>
    var totalTax: Double = 0.0

    init {
        when {
            isSelfEmployed -> {
                totalTax = income * selfEmployedTax
                taxDetails = listOf(TaxDetail(TaxRates.SELF_EMPLOYED, income * selfEmployedTax))
            }

            !isResident -> {
                totalTax = income * nonResidentTax
                taxDetails = listOf(TaxDetail(TaxRates.NON_RESIDENT, income * nonResidentTax))
            }

            isOldTax -> calculateTaxForRegularGuy { filter { it.old } }

            else -> calculateTaxForRegularGuy { filterNot { it.old } }
        }
    }

    private fun calculateTaxForRegularGuy(filter: (Array<TaxRates>).() -> List<TaxRates>) {
        var totalTax = 0.0
        var previousLimit = 0.0
        val taxDetails = mutableListOf<TaxDetail>()

        for (rate in TaxRates.entries.toTypedArray().filter().filterNot { it.limit.isNaN() }.sortedBy { it.limit }) {
            if (income <= previousLimit) break
            val taxableIncome = minOf(income, rate.limit) - previousLimit
            val taxAmount = taxableIncome * rate.rate
            taxDetails.add(TaxDetail(rate, taxAmount))
            totalTax += taxAmount
            previousLimit = rate.limit
        }

        this.totalTax = totalTax
        this.taxDetails = taxDetails
    }
}
