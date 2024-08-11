package ru.thetax.views.utils.externals.i18n

import ru.thetax.views.utils.externals.cookie.cookie
import ru.thetax.views.utils.externals.cookie.saveLanguageCode

/**
 * Class that represents i18n object
 */
external class I18n {
    /**
     * Current language
     */
    val language: String

    /**
     * Set language by language code
     *
     * @param language language code
     *
     * @see I18n.changeLanguage
     */
    fun changeLanguage(language: String)
}

/**
 * Get current [PlatformLanguages]
 *
 * @return current language as [PlatformLanguages] or [PlatformLanguages.defaultLanguage]
 */
fun I18n.language(): PlatformLanguages = PlatformLanguages.getByCodeOrDefault(language)

/**
 * Set [language] and save it to cookies
 *
 * @param language [PlatformLanguages] enum entity corresponding to language to set
 */
fun I18n.changeLanguage(language: PlatformLanguages) = this.changeLanguage(language.code).also {
    cookie.saveLanguageCode(language.code)
}
