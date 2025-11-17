import { Header } from "./Header/Header.js"
import { Main } from "./Main/Main.module.js"

export function Counter() {
    const container = document.createElement("div")
    container.classList.add("counter")
    container.append(
        Header(),
        Main()
    )

    return container
}