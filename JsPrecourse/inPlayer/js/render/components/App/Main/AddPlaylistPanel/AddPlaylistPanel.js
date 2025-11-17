export function AddPlaylistPanel(){
    const container = document.createElement("div")
    container.classList.add('add-playlist-panel')

    const appHeader = document.createElement("h1")
    appHeader.innerText = "My playlists"
    appHeader.classList.add("title")

    const addButton = document.createElement("button")
    addButton.innerText = "Add playlist"
    addButton.classList.add("button")

    container.append(
        appHeader,
        addButton
    )

    return container
}