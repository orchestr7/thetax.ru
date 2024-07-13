package ru.thetax.views.main

import js.objects.jso
import react.ChildrenBuilder
import react.FC
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.div
import ru.thetax.calculator.TaxCalculator
import ru.thetax.calculator.TaxDetail
import ru.thetax.calculator.TaxRates
import ru.thetax.views.utils.PeriodEnum
import ru.thetax.views.utils.formatNumber
import web.cssom.BorderRadius
import web.cssom.ClassName

/**
 * Detailed tax calculations
 */
val cardWithCalculations = FC<SalaryProps> { props ->
    val tax = TaxCalculator(props.salaryDoubleInternal, true, false)
    div {
        className = ClassName("row justify-content-center")
        div {
            className = ClassName("col-lg-5 col-md-7 col-sm-8 col-xs-12")
            div {
                className = ClassName("card mb-3")
                style = jso {
                    borderRadius = 0.unsafeCast<BorderRadius>()
                }
                div {
                    className = ClassName("card-header")
                    +"Расчет"
                }
                div {
                    className = ClassName("card-body text-dark")
                    generalRow("Доход до налогов", props.salaryDoubleInternal)
                    ReactHTML.hr {
                        className = ClassName("bg-danger border-2 border-top border-secondary")
                    }
                    rowWithRates(TaxRates.RATE_13, tax.taxDetails)
                    rowWithRates(TaxRates.RATE_15, tax.taxDetails)
                    rowWithRates(TaxRates.RATE_18, tax.taxDetails)
                    rowWithRates(TaxRates.RATE_20, tax.taxDetails)
                    rowWithRates(TaxRates.RATE_22, tax.taxDetails)
                    ReactHTML.hr {
                        className = ClassName("bg-danger border-2 border-top border-secondary")
                    }
                    generalRow("Общий налог", tax.totalTax)
                    ReactHTML.hr {
                        className = ClassName("bg-danger border-2 border-top border-success")
                    }
                    generalRow("После налогов", props.salaryDoubleInternal - tax.totalTax)
                }
            }
        }
    }
}

fun parseAndCalculateYearSalary(inputSalary: String, periodInput: PeriodEnum): Double =
    try {
        val salary = inputSalary
            .replace(" ", "")
            .replace(",", ".")
            .toDouble()

        when (periodInput) {
            PeriodEnum.YEAR -> salary
            PeriodEnum.MONTH -> salary * 12
            PeriodEnum.WEEK -> salary * 52
            PeriodEnum.DAY -> salary * 245
        }
    } catch (e: NumberFormatException) {
        Double.NaN
    }

fun ChildrenBuilder.rowWithRates(rate: TaxRates, value: List<TaxDetail>) {
    div {
        className = ClassName("row")
        div {
            className = ClassName("col-7")
            ReactHTML.p {
                className = ClassName("ms-5 fs-6")
                +"Налог ${rate.rate * 100}%"
            }
        }
        div {
            className = ClassName("col-5 fs-6 text-end")
            +((value.find { it.taxRate == rate }?.amount?.formatNumber() ?: "0.0") + " ₽")
        }
    }
}

fun ChildrenBuilder.generalRow(text: String, value: Double) {
    div {
        className = ClassName("row")
        div {
            className = ClassName("col-7")
            ReactHTML.h5 {
                +text
            }
        }
        div {
            className = ClassName("col-5 text-end")
            +((if (value.isNaN() || value == 0.0) "0.0" else value.formatNumber()) + " ₽")
        }
    }
}
