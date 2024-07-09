package ru.thetax.views.main

import react.*
import react.dom.aria.*
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h5
import react.dom.html.ReactHTML.hr
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.option
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.select
import ru.thetax.calculator.TaxCalculator
import ru.thetax.calculator.TaxDetail
import ru.thetax.calculator.TaxRates
import ru.thetax.views.utils.formatNumber
import web.cssom.ClassName


val taxCalculatorView: FC<Props> = FC {
    // ToDo: currency is not supported yet
    val (salaryInput, setSalaryInput) = useState("")
    val (periodInput, setPeriodInput) = useState(PeriodEnum.YEAR)
    val (salaryDoubleInternal, setSalaryDoubleIntenal) = useState(0.0)
    val (validInput, setValidInput) = useState("")

    div {
        className = ClassName("container")
        div {
            className = ClassName("row justify-content-center")
            div {
                className = ClassName("col-lg-5 col-md-7 col-sm-8 col-xs-12")
                div {
                    className = ClassName("row justify-content-center mb-4")
                    // ====== input salary ====
                    div {
                        className = ClassName("col-8 pe-1")
                        div {
                            className = ClassName("input-group shadow mb-1 px-0")
                            input {
                                className = ClassName("form-control custom-input $validInput")
                                value = salaryInput
                                placeholder = "Введите доход"
                                title = "Зарплата в рублях"
                                asDynamic()["data-toggle"] = "tooltip"
                                asDynamic()["data-placement"] = "top"
                                onChange = {
                                    val inputValue = it.target.value
                                    setSalaryInput(inputValue)
                                    val yearSalary = parseAndCalculateYearSalary(inputValue, periodInput)
                                    setSalaryDoubleIntenal(yearSalary)
                                    if (yearSalary.isNaN()) setValidInput("is-invalid") else setValidInput("is-valid")
                                }
                            }
                        }
                    }
                    // ====== input period ====
                    div {
                        className = ClassName("col-4 ps-0")
                        select {
                            className = ClassName("form-select")
                            ariaLabel = "Default select example"
                            option {
                                selected = true
                                value = PeriodEnum.YEAR
                                +"В год"
                            }
                            option {
                                value = PeriodEnum.MONTH
                                +"В месяц"
                            }
                            onChange = {
                                val period = PeriodEnum.valueOf(it.target.value)
                                setPeriodInput(period)
                                setSalaryDoubleIntenal(parseAndCalculateYearSalary(salaryInput, period))
                            }
                        }
                    }
                }
            }
        }
        if (validInput == "is-valid") {
            card {
                this.salaryDoubleInternal = salaryDoubleInternal
            }
        }
    }
}

external interface SalaryProps : Props {
    var salaryDoubleInternal: Double
}

/**
 * <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
 *   <div class="card-header">Header</div>
 *   <div class="card-body">
 *     <h5 class="card-title">Dark card title</h5>
 *     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 *   </div>
 * </div>
 */
val card = FC<SalaryProps> { props ->
    val tax = TaxCalculator(props.salaryDoubleInternal, true, false)
    div {
        className = ClassName("row justify-content-center")
        div {
            className = ClassName("col-lg-5 col-md-7 col-sm-8 col-xs-12")
            div {
                className = ClassName("card mb-3")
                div {
                    className = ClassName("card-header")
                    +"Расчет"
                }
                div {
                    className = ClassName("card-body text-dark")
                    generalRow("Доход до налогов", props.salaryDoubleInternal)
                    hr {
                        className = ClassName("bg-danger border-2 border-top border-secondary")
                    }
                    rowWithRates(TaxRates.RATE_13, tax.taxDetails)
                    rowWithRates(TaxRates.RATE_15, tax.taxDetails)
                    rowWithRates(TaxRates.RATE_18, tax.taxDetails)
                    rowWithRates(TaxRates.RATE_20, tax.taxDetails)
                    rowWithRates(TaxRates.RATE_22, tax.taxDetails)
                    hr {
                        className = ClassName("bg-danger border-2 border-top border-secondary")
                    }
                    generalRow("Общий налог", tax.totalTax)
                    hr {
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
            p {
                className = ClassName("ms-5 fs-6")
                +"Сумма налога ${rate.rate * 100}%"
            }
        }
        div {
            className = ClassName("col-5 fs-6 text-end")
            +(value.find { it.taxRate == rate }?.amount?.formatNumber() ?: "0.0")
        }
    }
}

fun ChildrenBuilder.generalRow(text: String, value: Double) {
    div {
        className = ClassName("row")
        div {
            className = ClassName("col-7")
            h5 {
                +text
            }
        }
        div {
            className = ClassName("col-5 text-end")
            +(if (value.isNaN() || value == 0.0) "0.0" else value.formatNumber())
        }
    }
}
