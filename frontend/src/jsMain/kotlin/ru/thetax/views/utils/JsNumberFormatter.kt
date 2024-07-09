package ru.thetax.views.utils

fun Double.formatNumber(): String {
    val numberParts = this.toString().split('.')
    val integerPart = numberParts[0]
    val fractualPart = numberParts.getOrElse(1) { "" }.take(2)

    val formattedIntegerPart = integerPart.reversed().chunked(3).joinToString(" ").reversed()
    return "$formattedIntegerPart${if (fractualPart.isNotBlank()) ".$fractualPart" else ""}"
}
