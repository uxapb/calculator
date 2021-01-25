import kotlinx.css.*
import react.*
import styled.css
import styled.styledDiv

external interface ResultProps: RProps {
    var resultHandler : Unit
}

external interface ResultState: RState {
    var value : String
}

class Result : RComponent<ResultProps, ResultState>() {
    override fun RBuilder.render() {
        styledDiv {
            css {
                border = "1px solid grey"
            }
            +state.value
        }
    }
}