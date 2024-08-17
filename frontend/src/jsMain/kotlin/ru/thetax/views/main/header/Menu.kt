package ru.thetax.views.main.header

import js.objects.jso
import react.ChildrenBuilder
import react.FC
import react.Props
import react.StateSetter
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h6
import ru.thetax.views.utils.externals.fontawesome.*
import web.cssom.ClassName
import web.cssom.px
import web.cssom.rgb
import web.html.ButtonType

val menu = FC<MenuProps> { props ->
    div {
        className = ClassName("row d-flex justify-content-center mt-2")
        div {
            className = ClassName("border col-xl-8 col-lg-11 col-md-11 col-sm-11 col-12 d-flex justify-content-center")
            style = jso {
                borderRadius = 10.px
            }
            menuButton(faEnvelope, "Новый", "НДФЛ", Menu.NEW_TAX, props.selectedMenu, props.setSelectedMenu)
            menuButton(faMoneyTrend, "Доход", "снизится?", Menu.TAX_DIFFERENCE, props.selectedMenu, props.setSelectedMenu)
            menuButton(faSack, "Все", "налоги", Menu.ALL_TAX, props.selectedMenu, props.setSelectedMenu)
        }
    }
}

fun ChildrenBuilder.menuButton(
    faIconModule: FontAwesomeIconModule,
    text1: String,
    text2: String,
    menu: Menu,
    selectedMenu: Menu,
    setSelectedMenu: StateSetter<Menu>
) {
    val isActive = menu == selectedMenu

    button {
        type = ButtonType.button
        className = ClassName("${if (isActive) "active" else "hover-button"} btn btn-outline-light border-0 mx-1 my-2")
        onClick = {
            setSelectedMenu { menu }
        }
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
    var setSelectedMenu: StateSetter<Menu>
    var selectedMenu: Menu
}

enum class Menu {
    NEW_TAX,
    TAX_DIFFERENCE,
    ALL_TAX,
}
