package ru.thetax.views.components

import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.router.useRouteError

val errorBoundary = FC<Props> {
    val error = useRouteError()
    console.error(error)
    div {
        +error.asDynamic().message.toString()
    }
}