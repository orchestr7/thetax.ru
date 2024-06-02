plugins {
    kotlin("multiplatform") version("2.0.0")
}

kotlin {
    jvm()
    js(IR) {
        browser()
        useCommonJs()
    }

    sourceSets {
        commonTest.dependencies {
            implementation(kotlin("test"))
        }
    }
}
