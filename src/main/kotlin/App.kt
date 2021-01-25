import kotlinx.css.*
import kotlinx.html.js.onClickFunction
import react.*
import react.dom.*
import styled.*

external interface AppProps: RProps {
    var name: String
}

fun resultFiller() {

}

class App : RComponent<RProps, RState>() {
    override fun RBuilder.render() {
        form {}
    }

}