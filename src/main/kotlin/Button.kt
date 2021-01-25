import kotlinx.css.*
import kotlinx.html.js.onClickFunction
import react.*
import styled.css
import styled.styledButton

external interface ButtonProps : RProps {
    var num: Any
    var buttonHandler : (Any) -> Unit
}

class Button : RComponent<ButtonProps, RState>() {
    override fun RBuilder.render() {
        styledButton {
            css {
                height = 50.px
                fontSize = 16.px
                width = 50.px
                backgroundColor = Color.white
            }
            attrs {
                onClickFunction = {props.buttonHandler(props.num)}
            }
            +"${props.num}"
        }
    }
}

fun RBuilder.button(handler: ButtonProps.() -> Unit) : ReactElement {
    return child(Button::class) {
        this.attrs(handler)
    }
}