const data = {
    playlists: [
        {
            playlistInfo: {
                id: "1-0",
                title: 'Hip-Hop Hits',
                coverImgUrl: 'img/cardImage/image1.jpeg',
                tracksCount: 4
            },
            tracks: [
                {
                    trackId: '1',
                    trackCoverImageUrl: 'img/cardImage/trackList/track1.jpeg',
                    artistName: 'Eminem',
                    trackTitle: 'Rap God',
                    trackFileUrl: 'audio/Eminem - Rap God.mp3',
                    isHot: true,
                },
                {
                    trackId: '2',
                    trackCoverImageUrl: 'img/cardImage/trackList/track2.jpeg',
                    artistName: '50 cent',
                    trackTitle: 'In da Club',
                    trackFileUrl: 'audio/50cent%20-%20In%20da%20club.mp3',
                    isHot: false
                }
            ]
        },
        {
            playlistInfo: {
                id: "1-1",
                title: 'Rap Hits 1990s',
                coverImgUrl: 'img/cardImage/image2.jpeg',
                tracksCount: 4
            },
            tracks: [
                {
                    trackId: '5',
                    trackCoverImageUrl: 'img/cardImage/trackList/track5.jpeg',
                    artistName: 'Public Enemy',
                    trackTitle: 'Fight the Power',
                    trackFileUrl: 'audio/Public%20Enemy%20-%20Fight%20The%20Power.mp3',
                    isHot: true,
                },
                {
                    trackId: '6',
                    trackCoverImageUrl: 'img/cardImage/trackList/track6.jpeg',
                    artistName: 'Vanila Ice',
                    trackTitle: 'Ice Ice Baby',
                    trackFileUrl: 'audio/Vanila%20Ice%20-%20Ice%20Baby.mp3',
                    isHot: true
                }
            ]
        }
    ]
}

function App() {
    const container = document.createElement('div')
    container.classList.add('App')

    container.append(
        Header(),
        Main(),
    )

    return container
}

//========================================================

function Header(){
    const header = document.createElement('header')

    const headerContainer = document.createElement('div')
    headerContainer.classList.add('header-container')

    const headerImg = document.createElement('img')
    headerImg.src = 'img/logo/logo.svg'

    const headerLogo = document.createElement('div')
    headerLogo.innerText = 'InPlayer'
    headerLogo.classList.add('logo-name')

    headerContainer.append(
        headerImg,
        headerLogo
    )

    header.append(headerContainer)

    return header
}

//========================================================

function Main(){
    const container = document.createElement('main')

    container.append(
        AddPlaylistPanel(),
        Playlists()
    )

    return container
}

//========================================================

function AddPlaylistPanel(){
    const container = document.createElement('div')
    container.classList.add('add-playlist-panel')

    const appHeader = document.createElement('h1')
    appHeader.innerText = 'My playlists'
    appHeader.classList.add('title')

    const addButton = document.createElement('button')
    addButton.innerText = 'Add Playlist'
    addButton.classList.add('button')

    container.append(
        appHeader,
        addButton
    )

    return container

}

//========================================================

function Playlists(){
    const container = document.createElement('div')
    container.classList.add('playlists')

    for (let i = 0; i < data.playlists.length; i++) {
        container.append(Playlist(data.playlists[i]));
    }

    return container
}

//========================================================

function Playlist(playlist) {
    const container = document.createElement('article')
    container.classList.add('playlist')
    container.append(
        PlaylistInfo(playlist.playlistInfo),
        Tracklist(playlist.tracks)
    )

    return container
}

//========================================================

function PlaylistInfo(playlistInfo) {
    const container = document.createElement('div')
    container.classList.add('playlist-info')

    const img  = document.createElement('img')
    img.classList.add('playlist-cover-image')
    img.src = playlistInfo.coverImgUrl

    const wrapper = document.createElement('div')

    const title = document.createElement('h2')
    title.classList.add('title')
    title.innerText = playlistInfo.title

    const tracksCount = document.createElement('div')
    tracksCount.classList.add('tracks-count')
    tracksCount.innerText = playlistInfo.tracksCount + ' tracks'

    wrapper.append(title, tracksCount)

    const buttonsContainer = document.createElement('div')
    buttonsContainer.classList.add('buttons-container')

    const editBtn = document.createElement('button')
    const editBtnImg = document.createElement('img')
    editBtnImg.src = 'img/icons/edit.svg'
    editBtn.append(editBtnImg)

    const delBtn = document.createElement('button')
    const delBtnImg = document.createElement('img')
    delBtnImg.src = 'img/icons/basket.svg'
    delBtn.append(delBtnImg)

    buttonsContainer.append(
        editBtn,
        delBtn
    )

    container.append(img, wrapper, buttonsContainer)

    return container
}

//========================================================

function Tracklist(tracks) {
    const container = document.createElement('div')
    container.classList.add('tracklist')

    container.append(
        AddTrackPanel(),
        List(tracks)
    )

    return container
}
//========================================================

function AddTrackPanel(params) {
    // const container = document.createElement('div')
    // container.classList.add('add-track-panel')
    
    // вызов функции с условием или без
    const container = createElement('div', 'add-track-panel')

    const title = document.createElement('h3')
    title.innerText = 'Tracks'
    title.classList.add('tracklist-title')

    const addTrackButton = document.createElement('button')
    addTrackButton.classList.add('button-add-track')

    const addTrackButtonImg = document.createElement('img')
    addTrackButtonImg.src = 'img/icons/add.svg'

    addTrackButton.append(addTrackButtonImg, 'Add Track')

    container.append(title, addTrackButton)

    return container
}

// сокращение повторяющегося кода с помощью функции 
// function createElement(typeOfElement, className) {
//     const container = document.createElement(typeOfElement)
//     container.classList.add(className)
//     return container
// }

// сокращение повторяющегося кода с помощью функции с условием
function createElement(typeOfElement, param) {
    const container = document.createElement(typeOfElement)
    if (typeof param === 'string') {
        container.classList.add(param)
    } else if (typeof param === 'object') {
        for (const key in param) {
        }
    }
    return container
}

createElement('div', {class: 'button-add-track', innerText: 'Btn', src: 'etc'})


//========================================================

function List(tracks) {
    const container = document.createElement('ul')
    container.classList.add('list')

    for (let i = 0; i < tracks.length; i++) {
        // container.append(tracks[i].trackTitle)
        container.append(Track(tracks[i]))
    }

    return container
}

//========================================================

function Track(track) {
    const container = document.createElement('li')
    container.classList.add('track-element')

    const trackCoverImg = document.createElement('img')
    trackCoverImg.classList.add('track-cover-image')
    trackCoverImg.src = track.trackCoverImageUrl

    container.append(
        trackCoverImg,
        TrackDetails(track)
    )

    return container
}

//========================================================

function TrackDetails(track) {
    const container = document.createElement('div')
    container.classList.add('track-details')

    const audio = document.createElement('audio')
    audio.src = track.trackFileUrl
    audio.controls = true

    container.append(
        trackTopLine(track),
        audio
    )

    return container
}

//========================================================

function trackTopLine(track) {
    const container = document.createElement('div')
    container.classList.add('track-top-line')

    return container
}

//========================================================

const root = document.getElementById('root')
root.append(
    App()   // application
)