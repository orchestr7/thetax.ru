package ru.thetax.views.main

import js.objects.jso
import react.ChildrenBuilder
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h4
import react.dom.html.ReactHTML.h5
import react.dom.html.ReactHTML.h6
import ru.thetax.calculator.TaxCalculator
import ru.thetax.views.utils.formatNumber
import web.cssom.BorderRadius
import web.cssom.ClassName
import web.cssom.rgb


/**
 * Detailed tax calculations
 */
val cardWithDifference = FC<SalaryProps> { props ->
    val newTax = TaxCalculator(props.salaryDoubleInternal)
    val oldTax = TaxCalculator(props.salaryDoubleInternal, isOldTax = true)
    val differenceTotal = newTax.totalTax - oldTax.totalTax

    div {
        className = ClassName("card shadow col-xl-5 col-lg-5 col-md-7 col-sm-8 col-11 d-flex mt-2")
        div {
            className = ClassName("row d-flex justify-content-center mt-2")
            h1 {
                className = ClassName("text-center")
                style = jso {
                    color = rgb(70, 80, 170)
                }
                +(if (differenceTotal > 0) "ДА" else "НЕТ")
            }
        }
        div {
            className = ClassName("row d-flex justify-content-center")
            if (differenceTotal > 0) {
                h4 {
                    className = ClassName("text-center px-1")
                    +"Вы станете получать меньше"
                }
                h5 {
                    style = jso {
                        color = rgb(70, 80, 170)
                    }
                    className = ClassName("text-center px-1")
                    +"на ${(differenceTotal).formatNumber()} в год"
                }
                h6 {
                    className = ClassName("text-center px-1")
                    +"и в среднем на ${(differenceTotal / 12).formatNumber(0)} в месяц"
                }
            } else {
                h4 {
                    className = ClassName("text-center px-1")
                    +"Вас не затронет налоговая реформа"
                }
                h5 {
                    className = ClassName("text-center px-1")
                    +"Налог сохранится"
                }
                h6 {
                    className = ClassName("text-center px-1")
                    +"${oldTax.totalTax.formatNumber(0)}₽ в год"
                }
            }
        }
    }
}
