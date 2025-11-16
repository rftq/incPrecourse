import { AddPlaylistPanel } from "./AddPlayListPanel/AddPlayListPanel.js"
import { Playlists } from "./PlayLists/PlayLists.js"

export function Main(someData) {
    const container = document.createElement("main")

    container.append(
        AddPlaylistPanel(),
        Playlists(someData)
    )
    return container
}