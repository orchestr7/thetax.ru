import org.jetbrains.kotlin.js.inline.clean.removeDuplicateImports

plugins {
    kotlin("multiplatform") version ("2.0.0")
}

kotlin {
    // https://kotlinlang.org/docs/js-project-setup.html#execution-environments
    js(IR) {
        browser {
            // https://kotlinlang.org/docs/js-project-setup.html#css
            commonWebpackConfig {
                cssSupport {
                    enabled.set(true)
                }
            }
        }
        // kotlin-wrapper migrates to commonjs and have no @JsNonModule annotations
        // https://github.com/JetBrains/kotlin-wrappers/issues/1935
        useCommonJs()
        // already default for LEGACY, but explicitly needed for IR:
        binaries.executable()
    }

    sourceSets {
        commonTest.dependencies {
            implementation(kotlin("test"))
        }

        jsMain.dependencies {
            api(project(":common"))
            implementation(project.dependencies.enforcedPlatform(libs.kotlin.wrappers.bom))
            implementation("org.jetbrains.kotlin-wrappers:kotlin-react")
            implementation("org.jetbrains.kotlin-wrappers:kotlin-extensions")
            implementation("org.jetbrains.kotlin-wrappers:kotlin-react-dom")
            implementation("org.jetbrains.kotlin-wrappers:kotlin-react-router-dom")
            implementation("org.jetbrains.kotlin-wrappers:kotlin-tanstack-react-table")


            // ====== unknown technical dependencies
            compileOnly(devNpm("sass", "^1.43.0"))
            compileOnly(devNpm("sass-loader", "^12.0.0"))
            compileOnly(devNpm("style-loader", "^3.3.1"))
            compileOnly(devNpm("css-loader", "^6.5.0"))
            compileOnly(devNpm("file-loader", "^6.2.0"))
            // https://getbootstrap.com/docs/4.0/getting-started/webpack/#importing-precompiled-sass
            compileOnly(devNpm("postcss-loader", "^6.2.1"))
            compileOnly(devNpm("postcss", "^8.2.13"))
            // See https://stackoverflow.com/a/72828500; newer versions are supported only for Bootstrap 5.2+
            compileOnly(devNpm("autoprefixer", "10.4.5"))
            compileOnly(devNpm("webpack-bundle-analyzer", "^4.5.0"))
            compileOnly(devNpm("mini-css-extract-plugin", "^2.6.0"))
            compileOnly(devNpm("html-webpack-plugin", "^5.5.0"))

            implementation(npm("os-browserify", "^0.3.0"))
            implementation(npm("path-browserify", "^1.0.1"))

            // ====== used modules ======
            implementation(npm("bootstrap", "5.3.3"))
            implementation(npm("react", "^18.0.0"))
            implementation(npm("react-dom", "^18.0.0"))
            implementation(npm("react-modal", "^3.0.0"))
            implementation(npm("@popperjs/core", "2.11.8"))
            implementation(npm("animate.css", "^4.1.1"))
            // ====== font awesome ======
            implementation(npm("@fortawesome/fontawesome-svg-core", "6.5.2"))
            implementation(npm("@fortawesome/free-solid-svg-icons", "6.5.2"))
            implementation(npm("@fortawesome/free-brands-svg-icons", "6.5.2"))
            implementation(npm("@fortawesome/react-fontawesome", "0.2.2"))
            // ====== translation ======
            implementation(npm("i18next", "^23.12.2"))
            implementation(npm("react-i18next", "^15.0.0"))
            implementation(npm("i18next-http-backend", "^2.5.2"))
            implementation(npm("js-cookie", "^3.0.5"))
            // ====== animation =========
            implementation(npm("animate.css", "^4.1.1"))
        }
    }
}

// somehow index.html started to duplicate after I added a common module
// "Entry index.html is a duplicate but no duplicate handling strategy has been set."
tasks.named<Copy>("jsBrowserDistribution") {
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
}

tasks.withType<org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpack> {
    // Since we inject timestamp into HTML file, we would like this task to always be re-run.
    inputs.property("Build timestamp", System.currentTimeMillis())
    doFirst {
        val additionalWebpackResources = fileTree("$buildDir/processedResources/js/main/") {
            include("scss/**")
            include("index.html")
        }
        copy {
            from(additionalWebpackResources)
            into("${rootProject.buildDir}/js/packages/${rootProject.name}-${project.name}")
        }
    }
}
