package ru.thetax.views.utils

import io.github.sanyavertolet.jswrappers.cookie.*
import io.github.sanyavertolet.jswrappers.i18next.I18n

/**
 * Enum that contains all supported languages
 *
 * @property code language code
 * @property value language name
 * @property label language label
 */
enum class PlatformLanguages(val code: String, val value: String, val label: String) {
    /**
     * Chinese
     */
    CN("cn", "Chinese", "中文"),

    /**
     * English
     */
    EN("en", "English", "EN"),

    /**
     * Russian
     */
    RU("ru", "Russian", "РУ"),
    ;
    companion object {
        /**
         * Default platform language
         */
        val defaultLanguage = RU

        /**
         * @param code language code
         * @return [PlatformLanguages] enum entity corresponding to language [code] or [defaultLanguage]
         */
        fun getByCodeOrDefault(code: String?) = entries.find { it.code == code } ?: defaultLanguage
    }
}

/**
 * Set [language] and save it to cookies
 *
 * @param language [PlatformLanguages] enum entity corresponding to language to set
 */
fun I18n.changeLanguage(language: PlatformLanguages) = changeLanguage(language.code).also {
    cookie.saveLanguageCode(language.code)
}
