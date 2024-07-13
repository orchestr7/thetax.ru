package ru.thetax.views.main

import js.objects.jso
import react.FC
import react.Props
import react.dom.aria.ariaLabel
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.img
import react.useState
import ru.thetax.views.utils.PeriodEnum
import ru.thetax.views.utils.externals.fontawesome.faGithub
import ru.thetax.views.utils.externals.fontawesome.faQuestionCircle
import ru.thetax.views.utils.externals.fontawesome.fontAwesomeIcon
import web.cssom.BorderBottomRightRadius
import web.cssom.BorderTopRightRadius
import web.cssom.ClassName
import web.cssom.rem

/**
 * Header with an input of salary and meta information
 */
val headerAndInput = FC<HeaderAndInputProps> { props ->
    val (salaryInput, setSalaryInput) = useState("")
    val (periodInput, setPeriodInput) = useState(PeriodEnum.YEAR)

    div {
        className = ClassName("full-width-container")
        id = "gradient"
        div {
            className = ClassName("row justify-content-center pt-2")
            div {
                className = ClassName("col-lg-5 col-md-7 col-sm-8 col-xs-12 px-0")
                div {
                    className = ClassName("row")
                    div {
                        className = ClassName("col-6")
                        div {
                            className = ClassName("row d-flex align-items-center text-white")
                            img {
                                className = ClassName("ps-0")
                                src = "/img/logo.png"
                                style = jso {
                                    width = 2.3.rem
                                }
                            }
                            +"thetax.ru"
                        }
                    }
                    div {
                        className = ClassName("col-6 d-flex justify-content-end")
                        a {
                            href = "https://github.com/orchestr7/thetax.ru"
                            fontAwesomeIcon(faGithub, "text-white me-3 fa-xl")
                        }
                        a {
                            href = "https://www.vedomosti.ru/economics/news/2024/07/10/1049144-sovet-federatsii-odobril?from=read_also=2"
                            fontAwesomeIcon(faQuestionCircle, "text-white fa-xl")
                        }
                    }
                }
                div {
                    className = ClassName("row text-center pt-5")
                    ReactHTML.h1 {
                        className = ClassName("text-white")
                        +"Налоговый калькулятор"
                    }
                    ReactHTML.p {
                        className = ClassName("text-white")
                        +"Каким будет Ваш налог с 2025го года?"
                    }
                }
                div {
                    className = ClassName("row justify-content-center")

                    // tab("", listOf("a", "b")) { }

                    div {
                        className = ClassName("row justify-content-center mb-4")
                        // ====== input salary ====
                        div {
                            className = ClassName("col-8 ps-0 pe-1")
                            div {
                                className = ClassName("input-group-lg shadow mb-1")
                                ReactHTML.input {
                                    className = ClassName("form-control custom-input ${props.validInput}")
                                    value = salaryInput
                                    placeholder = "Введите доход"
                                    style = jso {
                                        borderTopRightRadius = 0.unsafeCast<BorderTopRightRadius>()
                                        borderBottomRightRadius = 0.unsafeCast<BorderBottomRightRadius>()
                                    }
                                    title = "Зарплата в рублях"
                                    asDynamic()["data-toggle"] = "tooltip"
                                    asDynamic()["data-placement"] = "top"
                                    onChange = {
                                        val inputValue = it.target.value
                                        setSalaryInput(inputValue)
                                        val yearSalary = parseAndCalculateYearSalary(inputValue, periodInput)
                                        props.setSalaryDoubleIntenal(yearSalary)
                                        if (yearSalary.isNaN()) props.setValidInput("is-invalid") else props.setValidInput(
                                            "is-valid"
                                        )
                                    }
                                }
                            }
                        }
                        // ====== input period ====
                        div {
                            className = ClassName("col-4 ps-0 pe-0")
                            ReactHTML.select {
                                className = ClassName("form-select shadow form-select-lg")
                                ariaLabel = "Default select example"
                                ReactHTML.option {
                                    selected = true
                                    value = PeriodEnum.YEAR
                                    +"В год"
                                }
                                style = jso {
                                    borderTopLeftRadius = 0.unsafeCast<BorderTopRightRadius>()
                                    borderBottomLeftRadius = 0.unsafeCast<BorderBottomRightRadius>()
                                }
                                ReactHTML.option {
                                    value = PeriodEnum.MONTH
                                    +"В месяц"
                                }
                                onChange = {
                                    val period = PeriodEnum.valueOf(it.target.value)
                                    setPeriodInput(period)
                                    props.setSalaryDoubleIntenal(parseAndCalculateYearSalary(salaryInput, period))
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

external interface SalaryProps : Props {
    var salaryDoubleInternal: Double
}