import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.*
import kotlinx.html.*
import kotlinx.html.js.*
import react.*
import react.dom.*
import styled.css
import styled.*

var value : String? = null

fun myToDouble(value: String) : Double {
    return if (value == "") 0.0
    else value.toDouble()
}

fun getResult(firstNumber : Double, secondNumber : Double, operator : Char?) : Double {
    return when(operator) {
        '+' -> firstNumber + secondNumber
        '*' -> firstNumber * secondNumber
        '/' -> firstNumber / secondNumber
        '%' -> firstNumber % secondNumber
        else -> 0.0
    }
}

external interface FormState : RState {
    var inputValue : String
    var firstNumber : Double
    var secondNumber : Double
    var result : Double
    var operator : Char?
    var equalsPressed : Boolean
}

external interface FormProps: RProps {

}

class Form : RComponent<FormProps, FormState>() {
    override fun FormState.init() {
        MainScope().launch {
            setState {
                inputValue = "0"
                firstNumber = 0.0
                secondNumber = 0.0
                result = 0.0
                equalsPressed = false
            }
        }
    }

    override fun RBuilder.render() {
        h1 {
            +"Calculator"
        }

        styledDiv {
            css {
                display = Display.flex
                flexDirection = FlexDirection.column
                width = 500.px
            }
            styledDiv {
                css {
                    minHeight = 18.px
                    fontSize = 16.px
                    padding = "10px"
                    marginBottom = 20.px
                    border = "1px solid grey"
                }

                +state.inputValue
            }
            styledDiv {
                css {
                    display = Display.flex
                }

                styledDiv {
                    css {
                        width = 150.px
                        display = Display.flex
                        flexWrap = FlexWrap.wrap
                        marginRight = 10.px
                    }
                    for (i in 1..9) {
                        button {
                            num = i
                            buttonHandler = { num ->
                                setState {
                                    if ( inputValue == "0" || result == myToDouble(inputValue) ) { inputValue = "" }
                                    inputValue += num.toString()
                                    equalsPressed = false
                                }
                            }
                        }
                    }
                    styledDiv {
                        css {
                            marginLeft = 50.px
                        }
                        button {
                            num = 0
                            buttonHandler = { num ->
                                setState {
                                    if ( inputValue == "0" || result == myToDouble(inputValue) ) { inputValue = "" }
                                    inputValue += num.toString()
                                    equalsPressed = false
                                }
                            }
                        }
                        button {
                            num = "."
                            buttonHandler = { num ->
                                setState {
                                    if ( inputValue == "" ) { inputValue = "0" }
                                    inputValue += num.toString()
                                    equalsPressed = false
                                }
                            }
                        }
                    }
                }

                styledDiv {
                    css {
                        marginLeft = 40.px
                    }
                    button {
                        num = "C"
                        buttonHandler = { _ ->
                            setState {
                                inputValue = "0"
                                result = 0.0
                                firstNumber = 0.0
                                secondNumber = 0.0
                                equalsPressed = false
                            }
                        }
                    }
                    button {
                        num = "+"
                        buttonHandler = { _ ->
                            setState {
                                if (firstNumber == 0.0) {
                                    firstNumber = myToDouble(inputValue)
                                } else secondNumber = myToDouble(inputValue)
                                result = if (secondNumber == 0.0) firstNumber
                                    else getResult(firstNumber, secondNumber, operator)
                                operator = '+'
                                inputValue = if (result == firstNumber || result == 0.0) ""
                                else result.toString()
                                if (result != 0.0) firstNumber = result
                                equalsPressed = false
                            }
                        }
                    }
                    button {
                        num = "*"
                        buttonHandler = { _ ->
                            setState {
                                if (firstNumber == 0.0) {
                                    firstNumber = myToDouble(inputValue)
                                } else secondNumber = myToDouble(inputValue)
                                result = if (secondNumber == 0.0) getResult(firstNumber, 1.0, operator)
                                        else getResult(firstNumber, secondNumber, operator)
                                if (equalsPressed) result = firstNumber
                                operator = '*'
                                inputValue = if (result == firstNumber || result == 0.0) ""
                                else result.toString()
                                if (result != 0.0) firstNumber = result
                                equalsPressed = false
                            }
                        }
                    }
                    button {
                        num = "/"
                        buttonHandler = { _ ->
                            setState {
                                if (firstNumber == 0.0) {
                                    firstNumber = myToDouble(inputValue)
                                } else {
                                    secondNumber = myToDouble(inputValue)
                                }
                                if (secondNumber == 0.0) secondNumber = 1.0
                                result = getResult(firstNumber, secondNumber, operator)
                                if (equalsPressed) result = firstNumber
                                operator = '/'
                                inputValue = if (result == firstNumber || result == 0.0) ""
                                else result.toString()
                                if (result != 0.0) firstNumber = result
                                equalsPressed = false
                            }
                        }
                    }
                    button {
                        num = "%"
                        buttonHandler = { _ ->
                            setState {
                                if (firstNumber == 0.0) {
                                    firstNumber = myToDouble(inputValue)
                                } else {
                                    secondNumber = myToDouble(inputValue)
                                }
                                if (secondNumber == 0.0) secondNumber = 1.0
                                result = getResult(firstNumber, secondNumber, operator)
                                if (equalsPressed) result = firstNumber
                                operator = '%'
                                inputValue = if (result == firstNumber || result == 0.0) ""
                                else result.toString()
                                if (result != 0.0) firstNumber = result
                                equalsPressed = false
                            }
                        }
                    }
                    button {
                        num = "="
                        buttonHandler = { _ ->
                            setState {
                                println(firstNumber)
                                secondNumber = myToDouble(inputValue)
                                println(secondNumber)
                                result = getResult(firstNumber, secondNumber, operator)
                                inputValue = result.toString()
                                firstNumber = 0.0
                                secondNumber = 0.0
                                equalsPressed = true
                            }
                        }
                    }
                }
            }

        }
    }
}

fun RBuilder.form(handler: FormProps.() -> Unit) : ReactElement {
    return child(Form::class) {
        this.attrs(handler)
    }
}