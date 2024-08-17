package ru.thetax.views.main

import react.*
import react.dom.html.ReactHTML.div
import ru.thetax.views.main.header.Menu
import ru.thetax.views.main.header.headerAndInput
import ru.thetax.views.utils.PeriodEnum
import web.cssom.ClassName

val taxCalculatorView: FC<Props> = FC {
    // ToDo: currency is not supported yet
    val (salaryDoubleInternal, setSalaryDoubleIntenal) = useState(0.0)
    val (validInput, setValidInput) = useState("")
    val (periodInput, setPeriodInput) = useState(PeriodEnum.YEAR)
    val (selectedMenu, setSelectedMenu) = useState(Menu.NEW_TAX)

    headerAndInput {
        this.validInput = validInput
        this.setValidInput = setValidInput

        this.salaryDoubleInternal = salaryDoubleInternal
        this.setSalaryDoubleIntenal = setSalaryDoubleIntenal

        this.setPeriodInput = setPeriodInput
        this.periodInput = periodInput

        this.setSelectedMenu = setSelectedMenu
        this.selectedMenu = selectedMenu
    }

    div {
        className =
            ClassName("collapsible ${if (validInput == "is-valid") "active" else ""} row justify-content-center country")
        when (selectedMenu) {
            Menu.NEW_TAX -> cardWithCalculations {
                this.salaryDoubleInternal = salaryDoubleInternal
                this.periodInput = periodInput
            }
            Menu.TAX_DIFFERENCE -> cardWithDifference {
                this.salaryDoubleInternal = salaryDoubleInternal
                this.periodInput = periodInput
            }
            else -> {}
        }
    }
}

external interface HeaderAndInputProps : Props {
    var setSalaryDoubleIntenal: StateSetter<Double>
    var salaryDoubleInternal: Double

    var validInput: String
    var setValidInput: StateSetter<String>

    var periodInput: PeriodEnum
    var setPeriodInput: StateSetter<PeriodEnum>

    var setSelectedMenu: StateSetter<Menu>
    var selectedMenu: Menu
}
