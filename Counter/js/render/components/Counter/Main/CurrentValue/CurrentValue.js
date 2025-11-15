import { data } from "../../../../../data/data.module.js"

export function currentValue() {
    const container = document.createElement("div")
    container.classList.add("current-value")
    const spanElement = document.createElement("span")
    spanElement.innerText = data.currentValue
    container.append(
        spanElement
    )

    return container
}