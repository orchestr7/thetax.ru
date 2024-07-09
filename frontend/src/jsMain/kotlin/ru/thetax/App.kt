/**
 * Main entrypoint
 */

package ru.thetax


import js.objects.jso
import react.*
import react.dom.client.createRoot

import web.dom.document
import web.html.HTMLElement

import kotlinx.browser.window
import react.router.dom.RouterProvider
import react.router.dom.createBrowserRouter
import ru.thetax.views.main.taxCalculatorView


/**
 * Main component for the whole App
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
val App: FC<Props> = FC {
    RouterProvider {
        router = createBrowserRouter(
            routes = arrayOf(
                jso {
                    path = "/"
                    element = taxCalculatorView.create()
                }
            )
        )
    }
}

fun main() {
    /* Workaround for issue: https://youtrack.jetbrains.com/issue/KT-31888 */
    @Suppress("UnsafeCastFromDynamic")
    if (window.asDynamic().__karma__) {
        return
    }
  // this is needed for webpack to include resources
    kotlinext.js.require<dynamic>("../scss/tax-app.scss")
    // this is needed for webpack to include bootstrap
    kotlinext.js.require<dynamic>("bootstrap")
/*    ReactModal.setAppElement(document.getElementById("wrapper") as HTMLElement)  // required for accessibility in react-modal

    initI18n()*/
    val mainDiv = document.getElementById("wrapper") as HTMLElement
    createRoot(mainDiv).render(App.create())
}
