import { data, openAddNewTaskDialog } from "../data/data.js"
import { AddNewTaskDialog } from "./AddNewTaskDialog/AddNewTaskDialog.js"
import { Button } from "./common/Button/Button.js"
import { Header } from "./Header/Header.js"
import { Tasklist } from "./Tasklist/Tasklist.js"
import { EditTaskDialog } from "./EditTaskDialog/EditTaskDialog.js"

export function Todolist() {
    const container = document.createElement("div")
    // container.innerText = data.todolist.title
    container.append(
        Header(),
        Tasklist(),
        AddNewTaskDialog(),
        EditTaskDialog(),
        Button("add", () => openAddNewTaskDialog())
    )

    return container
}