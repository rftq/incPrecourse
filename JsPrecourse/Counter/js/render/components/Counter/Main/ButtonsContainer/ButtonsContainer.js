import { increment, reset } from "../../../../../data/data.module.js"
import { Button } from "./Button/Button.js"

export function ButtonsContainer(data) {
    const container = document.createElement("div")
    container.classList.add("buttons-container")
    container.append(
        Button("Увеличить", increment),
        Button("Сбросить", reset)
    )

    return container
}