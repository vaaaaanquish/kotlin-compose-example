import androidx.compose.runtime.*
import org.jetbrains.compose.web.css.margin
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.width
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.renderComposable
import kotlinx.browser.window
import org.w3c.dom.HTMLElement
import react.RBuilder
import react.dom.render
import react.dom.unmountComponentAtNode

fun reactInComposeAppExample() {
    renderComposable(rootElementId = "root") {

        Text("Hello compose")
    }
}
