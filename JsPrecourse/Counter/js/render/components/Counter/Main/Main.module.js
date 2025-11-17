import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer.js"
import { currentValue } from "./CurrentValue/CurrentValue.js"
import { ProgressBar } from "./ProgressBar/ProgressBar.js"

export function Main() {
    const container = document.createElement("div")
    container.classList.add("main")
    container.append(
       currentValue(),
       ProgressBar(),
       ButtonsContainer(),
    )

    return container
}