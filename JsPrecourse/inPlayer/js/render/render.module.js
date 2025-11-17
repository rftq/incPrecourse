// export function render(value) {
//     console.log(value);
    
// }

// export означает, что разрешаем использовать эту функцию во внешнем иире

// const userName = "Alex"
// console.log(userName);

import { App } from "./components/App/App.js"

export function render(someData) {
    const root = document.getElementById("root")
    root.append(
        App(someData) // => container
    // someData.playlists[0].playlistInfo.title //проверка
    )
}