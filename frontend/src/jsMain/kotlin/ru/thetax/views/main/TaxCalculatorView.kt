package ru.thetax.views.main

import react.*

val taxCalculatorView: FC<Props> = FC {
    // ToDo: currency is not supported yet
    val (salaryDoubleInternal, setSalaryDoubleIntenal) = useState(0.0)
    val (validInput, setValidInput) = useState("")

    headerAndInput {
        this.validInput = validInput
        this.setValidInput = setValidInput
        this.setSalaryDoubleIntenal = setSalaryDoubleIntenal
    }

    if (validInput == "is-valid") {
        cardWithCalculations {
            this.salaryDoubleInternal = salaryDoubleInternal
        }
    }
}

external interface HeaderAndInputProps : Props {
    var setSalaryDoubleIntenal: StateSetter<Double>
    var validInput: String
    var setValidInput: StateSetter<String>
}
