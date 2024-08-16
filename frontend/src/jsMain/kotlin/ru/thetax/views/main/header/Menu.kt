package ru.thetax.views.main.header

import js.objects.jso
import react.ChildrenBuilder
import react.FC
import react.Props
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h6
import ru.thetax.views.utils.PeriodEnum
import ru.thetax.views.utils.externals.fontawesome.*
import web.cssom.ClassName
import web.cssom.px
import web.cssom.rgb
import web.html.ButtonType

val menu = FC<SalaryProps> {
    div {
        className = ClassName("row mt-3 d-flex justify-content-center")
        div {
            className = ClassName("border col-xl-8 col-lg-8 col-md-8 col-sm-9 col-xs-10 d-flex justify-content-center px-3")
            style = jso {
                borderRadius = 10.px
            }
            menuButton(faEnvelope, "Новый", "НДФЛ", true)
            menuButton(faMoneyTrend, "Доход", "снизится?", false)
            menuButton(faSack, "Все", "налоги", false)
        }
    }
}

fun ChildrenBuilder.menuButton(faIconModule: FontAwesomeIconModule, text1: String, text2: String, isActive: Boolean) {
    button {
        type = ButtonType.button
        className = ClassName("${if (isActive) "active" else "hover-button"} my-2 btn btn-outline-light border-0 mx-1")
        div {
            style = jso {
                color = if (isActive) rgb(50, 50, 50) else rgb(210, 210, 230)
            }
            className = ClassName("col")
            div {
                className = ClassName("row d-flex justify-content-center mb-2")
                fontAwesomeIcon(faIconModule, "fa-xl mx-2")
            }
            div {
                className = ClassName("row d-flex justify-content-center")
                h6 {
                    className = ClassName("mb-0")
                    +text1
                }
            }
            div {
                className = ClassName("row d-flex justify-content-center")
                h6 {
                    className = ClassName("mb-0")
                    +text2
                }
            }
        }
    }
}

external interface MenuProps : Props {
    var setSelectedMenu: Double
    var selectedMenu: PeriodEnum
}

enum class Menu {
    NEW_TAX,
    TAX_DIFFERENCE,
    ALL_TAX,
}
