export const data = {
    todolist: {
        id: crypto.randomUUID(),
        title: "Todolist",
        tasks: [
            {
                id: crypto.randomUUID(),
                title: "Learn HTML"
            },
            {
                id: crypto.randomUUID(),
                title: "Learn CSS"
            },
            {
                id: crypto.randomUUID(),
                title: "Learn Js"
            },
            {
                id: crypto.randomUUID(),
                title: "Learn React"
            },
        ]
    },
    AddNewTaskDialog: {
        isOpen: false
    },
    EdiTaskDialog: {
        isOpen: false,
        taskId: undefined,
        taskTitle:""
    },
}

let changeDataCallback = () => { }

export function subscribe(subscriber) {
    changeDataCallback = subscriber
}

// CRUD
export function deleteTask(taskId) {
    // const tasks = data.todolist.tasks
    // const filteredTasks = tasks.filter(t => t.id !== taskId)
    // data.todolist.tasks = filteredTasks

    // в одну строку
    data.todolist.tasks = data.todolist.tasks.filter(t => t.id !== taskId)
    changeDataCallback()
}

export function addtask(title) {
    const newTask = {
        id: crypto.randomUUID(),
        title: title
    }
    data.todolist.tasks.push(newTask)
    changeDataCallback()
}

export function editTask(taskId, newTitle) {
    const task = data.todolist.tasks.find(t => t.id === taskId)
    task.title = newTitle
    changeDataCallback()
}

// UI
export function openAddNewTaskDialog() {
    data.AddNewTaskDialog.isOpen = true
    changeDataCallback()
}

export function closeAddNewTaskDialog() {
    data.AddNewTaskDialog.isOpen = false
    changeDataCallback()
}

export function openEditTaskDialog(taskId, title) {
    data.EdiTaskDialog.isOpen = true
    data.EdiTaskDialog.taskId = taskId
    data.EdiTaskDialog.taskTitle = title
    changeDataCallback()
}
export function closeEditTaskDialog() {
    data.EdiTaskDialog.isOpen = false
    changeDataCallback()
}