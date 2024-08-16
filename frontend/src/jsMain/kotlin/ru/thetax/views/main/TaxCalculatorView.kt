package ru.thetax.views.main

import react.*
import react.dom.html.ReactHTML.div
import ru.thetax.views.main.header.headerAndInput
import ru.thetax.views.utils.PeriodEnum
import web.cssom.ClassName

val taxCalculatorView: FC<Props> = FC {
    // ToDo: currency is not supported yet
    val (salaryDoubleInternal, setSalaryDoubleIntenal) = useState(0.0)
    val (validInput, setValidInput) = useState("")
    val (periodInput, setPeriodInput) = useState(PeriodEnum.YEAR)

    headerAndInput {
        this.validInput = validInput
        this.setValidInput = setValidInput

        this.salaryDoubleInternal = salaryDoubleInternal
        this.setSalaryDoubleIntenal = setSalaryDoubleIntenal

        this.setPeriodInput = setPeriodInput
        this.periodInput = periodInput
    }


        div {
            className = ClassName("collapsible ${if (validInput == "is-valid") "active" else ""} row justify-content-center country")
            cardWithCalculations {
                this.salaryDoubleInternal = salaryDoubleInternal
                this.periodInput = periodInput
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
}
