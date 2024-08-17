package ru.thetax.views.utils

fun Double.formatNumber(fractual: Int = 2): String {
    val numberParts = this.toString().split('.')
    val integerPart = numberParts[0]
    val fractualPart = numberParts.getOrElse(1) { "" }.take(fractual)

    val formattedIntegerPart = integerPart.reversed().chunked(3).joinToString(" ").reversed()
    return "$formattedIntegerPart${if (fractualPart.isNotBlank()) ".$fractualPart" else ""}"
}
