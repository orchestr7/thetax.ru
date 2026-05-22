/**
 * Main entrypoint
 */

package ru.thetax


import io.github.sanyavertolet.jswrappers.i18next.backend
import io.github.sanyavertolet.jswrappers.i18next.init
import io.github.sanyavertolet.jswrappers.i18next.requireI18next
import io.github.sanyavertolet.jswrappers.i18nexthttpbackend.HttpBackendConfiguration
import io.github.sanyavertolet.jswrappers.i18nexthttpbackend.useHttpBackendPlugin
import io.github.sanyavertolet.jswrappers.reacti18next.useReactI18next
import js.objects.jso
import react.*
import react.dom.client.createRoot

import web.dom.document
import web.html.HTMLElement

import kotlinx.browser.window
import react.router.dom.RouterProvider
import react.router.dom.createBrowserRouter
import ru.thetax.views.components.errorBoundary
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
                        errorElement = errorBoundary.create()
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
    /*    ReactModal.setAppElement(document.getElementById("wrapper") as HTMLElement)  // required for accessibility in react-modal */

    requireI18next()
        .useHttpBackendPlugin()
        .useReactI18next()
        .init {
            loadStrategy = "languageOnly"
            initImmediate = false
            partialBundledLanguages = true
            namespaces = listOf("main")
            backend<HttpBackendConfiguration> {
                loadPath = "/locales/{{lng}}/{{ns}}.json"
            }
            language = "en"
            fallbackLanguage = "en"
        }

    val mainDiv = document.getElementById("wrapper") as HTMLElement
    createRoot(mainDiv).render(App.create())
}
