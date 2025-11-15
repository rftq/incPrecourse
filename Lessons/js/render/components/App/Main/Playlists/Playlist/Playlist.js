import { PlaylistInfo } from "./PlaylistInfo/PlaylistInfo.js"
import { Tracklist } from "./Tracklist/Tracklist.js"

export function Playlist(somePlaylist) {
    // другие способы сократить somePlaylist.playlistInfo
    // const playlistInfo = somePlaylist.playlistInfo
    // const tracks = somePlaylist.tracks
    const {playlistInfo, tracks} = somePlaylist

    const container = document.createElement("article")
    container.classList.add('playlist')
    container.append(
        PlaylistInfo(somePlaylist.playlistInfo),
        Tracklist(somePlaylist.tracks)
    )

    return container
}