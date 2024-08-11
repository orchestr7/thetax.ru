package ru.thetax.views.utils.externals.i18n

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
        fun getByCodeOrDefault(code: String) = entries.find { it.code == code } ?: defaultLanguage
    }
}
