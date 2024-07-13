package ru.thetax.views.utils

import js.objects.jso
import react.ChildrenBuilder
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.div
import web.cssom.ClassName
import web.cssom.Cursor

fun ChildrenBuilder.tab(
    selectedTab: String,
    tabsList: List<String>,
    navClassName: String = "nav nav-tabs mb-4",
    setSelectedTab: (String) -> Unit
) {
    div {
        className = ClassName("row justify-content-center")

        ReactHTML.nav {
            className = ClassName(navClassName)
            tabsList.forEachIndexed { i, value ->
                ReactHTML.li {
                    key = i.toString()
                    className = ClassName("nav-item")
                    val classVal =
                        if (selectedTab == value) {
                            " active font-weight-bold"
                        } else {
                            ""
                        }
                    ReactHTML.p {
                        className = ClassName("nav-link $classVal text-gray-800")
                        onClick = {
                            if (selectedTab != value) {
                                setSelectedTab(value)
                            }
                        }
                        style = jso {
                            cursor = "pointer".unsafeCast<Cursor>()
                        }

                        +value
                    }
                }
            }
        }
    }
}