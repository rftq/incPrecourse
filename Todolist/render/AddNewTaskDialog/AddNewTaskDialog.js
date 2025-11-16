import { Button } from "../common/Button/Button.js"
import { addtask, closeAddNewTaskDialog, data } from "../../data/data.js"

export function AddNewTaskDialog() {
    const container = document.createElement("dialog")
    const titleElement = document.createElement("h3")
    titleElement.innerText = "Add new task title"
    container.open = data.AddNewTaskDialog.isOpen

    const inputElement = document.createElement("input")

    container.append(
        titleElement,
        inputElement,
        Button("save", () => addtask(inputElement.value)),
        Button("cancel", () => closeAddNewTaskDialog())
    )

    return container
}