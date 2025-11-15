//data
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
                    trackCoverImgUrl: 'img/cardImage/trackList/track1.jpeg',
                    artistName: 'Eminem',
                    trackTitle: 'Rap God',
                    trackFileUrl: './audio/Eminem - Rap God.mp3',
                    isHot: true,
                },
                {
                    trackId: '2',
                    trackCoverImgUrl: 'img/cardImage/trackList/track2.jpeg',
                    artistName: '50cent',
                    trackTitle: 'In da Club',
                    trackFileUrl: './audio/50cent - In da club.mp3',
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
                    trackCoverImgUrl: 'img/cardImage/trackList/track5.jpeg',
                    artistName: 'Public Enemy',
                    trackTitle: 'Fight The Power',
                    trackFileUrl: './audio/Public Enemy - Fight The Power.mp3',
                    isHot: true,
                },
                {
                    trackId: '6',
                    trackCoverImgUrl: 'img/cardImage/trackList/track6.jpeg',
                    artistName: 'Vanila Ice',
                    trackTitle: 'Ice Ice Baby',
                    trackFileUrl: './audio/Vanila Ice - Ice Baby.mp3',
                    isHot: true
                }
            ]
        }
    ]
}



// create DOM
function App(someData) {
    const container = document.createElement("div")
    container.classList.add("App")
    container.append(
        Header(),
        Main(someData)
    )

    return container
}

function Header() {
    const header = document.createElement("header")

    const headerContainer = document.createElement("div")
    headerContainer.classList.add("header-container")

    const img = document.createElement("img")
    img.src = "img/logo/logo.svg"

    const logo = document.createElement("div")
    logo.innerText = "InPlayer"
    logo.classList.add("logo-name")

    headerContainer.append(
        img,
        logo
    )
    header.append(headerContainer)

    return header
}

//================================================================

function Main(someData) {
    const container = document.createElement("main")

    container.append(
        AddPlaylistPanel(),
        Playlists(someData)
    )
    return container
}

//=================================================================

function AddPlaylistPanel(){
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

//=================================================================

function Playlists(someData) {
    const container = document.createElement("div")
    container.classList.add('playlists')

    for (let i = 0; i < someData.playlists.length; i++) {
        container.append(Playlist(someData.playlists[i]));
    }

    return container
}

//=================================================================

function Playlist(somePlaylist) {
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

//=================================================================

function PlaylistInfo(somePlaylistInfo){
    const {coverImgUrl, title, tracksCount } = somePlaylistInfo
    
    const container = document.createElement('div')
    container.classList.add('playlist-info')

    const img  = document.createElement('img')
    img.classList.add('playlist-cover-image')
    // img.src = playlistInfo.coverImgUrl
    img.src = coverImgUrl

    const wrapper = document.createElement('div')

    const titleElement = document.createElement('h2')
    titleElement.classList.add('title')
    // titleElement.innerText = playlistInfo.title
    titleElement.innerText = title

    const tracksCountElement = document.createElement('div')
    tracksCountElement.classList.add('tracks-count')
    // tracksCountElement.innerText = playlistInfo.tracksCount + ' tracks'
    tracksCountElement.innerText = tracksCount + ' tracks'

    wrapper.append(titleElement, tracksCountElement)

    // ButtonsEditDelete
    // const buttonsContainer = document.createElement('div')
    // buttonsContainer.classList.add('buttons-container')
    
    // const editBtn = document.createElement('button')
    // const editBtnImg = document.createElement('img')
    // editBtnImg.src = 'img/icons/edit.svg'
    // editBtn.append(editBtnImg)

    // const delBtn = document.createElement('button')
    // const delBtnImg = document.createElement('img')
    // delBtnImg.src = 'img/icons/basket.svg'
    // delBtn.append(delBtnImg)

    // buttonsContainer.append(
    //     editBtn,
    //     delBtn
    // )

    container.append(img, wrapper, ButtonsEditDelete())
    // Функцию ButtonsEditDelete вызвали снизу, так как повторяющийся код

    return container
}

//=================================================================

function Tracklist(someTracks){
    const container = document.createElement('div')
    container.classList.add('tracklist') 

    container.append(
        AddTrackPanel(),
        List(someTracks)
    )

    return container
}

//=================================================================

function AddTrackPanel() {
    const container = document.createElement("div")
    container.classList.add("add-track-panel") 

    // вызов функции с условием или без, вместо повторяющегося кода
    // const container = createElement('div', 'add-track-panel')

    const title = document.createElement("h3")
    title.innerText = "Tracks"
    title.classList.add("tracklist-title")

    const addTrackButton = document.createElement("button")
    addTrackButton.classList.add("button-add-track")

    const addTrackButtonImg = document.createElement('img')
    addTrackButtonImg.src = 'img/icons/add.svg'

    addTrackButton.append(addTrackButtonImg, "Add Track")

    container.append(
        title,
        addTrackButton
    )

    return container
}

//=================================================================

// сокращение повторяющегося кода с помощью функции 
// function createElement(typeOfElement, className) {
//     const container = document.createElement(typeOfElement)
//     container.classList.add(className)
//     return container
// }

// сокращение повторяющегося кода с помощью функции с условием
// function createElement(typeOfElement, param) {
//     const container = document.createElement(typeOfElement)
//     if (typeof param === 'string') {
//         container.classList.add(param)
//     } else if (typeof param === 'object') {
//         for (const key in param) {
//         }
//     }
//     return container
// }

// createElement('div', {class: 'button-add-track', innerText: 'Btn', src: 'etc'})

//=================================================================

function List(someTracks) {
    const container = document.createElement("ul")
    container.classList.add("list")

    for (let i = 0; i < someTracks.length; i++) {
        container.append(Track(someTracks[i]))
    }
    
    return container
}

//=================================================================

function Track(someTrack) {
    const {trackCoverImgUrl, ...restTrackData} = someTrack

    const container = document.createElement("li")
    container.classList.add("track-element")

    const trackCoverImg = document.createElement("img")
    trackCoverImg.classList.add("track-cover-image")

    // trackCoverImg.src = track.trackCoverImgUrl
    trackCoverImg.src = trackCoverImgUrl

    container.append(
        trackCoverImg,
        TrackDetails(restTrackData)
    )

    return container
}

//=================================================================

function TrackDetails(someRestTrackData) {
    const {trackFileUrl, ...restTrackData} = someRestTrackData

    const container = document.createElement("div")
    container.classList.add("track-details")

    const audio = document.createElement("audio")
    // audio.src = track.trackFileUrl
    audio.src = trackFileUrl
    audio.controls = true

    container.append(
        TrackTopLine(restTrackData),
        audio
    )

    return container
}

//=================================================================

function TrackTopLine(someRestTrackData) {
    const {isHot, artistName, trackTitle} = someRestTrackData

    const container = document.createElement("div")
    container.classList.add("track-top-line")

    if (isHot) { //track.isHot
        const trackHotImg = document.createElement('img')
        trackHotImg.classList.add('track-status')
        trackHotImg.src = 'img/icons/hot.svg'
        container.append(trackHotImg)
    }
    const trackInfo = document.createElement('div')
    trackInfo.classList.add('track-info')

    const trackName = document.createElement('div')
    trackName.classList.add('track-name')
    // trackName.innerText = track.artistName + '-' + track.trackTitle
    trackName.innerText = artistName + '-' + trackTitle
    trackInfo.append(
        trackName,
        ButtonsEditDelete()
    )

    container.append(trackInfo)

    return container
}

//========================================================

function ButtonsEditDelete() {
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

    return buttonsContainer
}

//=================================================================

// render DOM
function render(someData) {
    const root = document.getElementById("root")
    root.append(
    App(someData) // => container
    )
}

render(data)

//=================================================================

// const playlistTitleEl = document.createElement('h1');
// playlistTitleEl.append(playlist.title);
// document.body.append(playlistTitleEl);

// const playlistCoverEl = document.createElement('img');
// playlistCoverEl.src = playlist.coverImage;
// playlistCoverEl.style.width = '100px';
// playlistCoverEl.style.height = '100px';
// document.body.append(playlistCoverEl);



// const tracksListEl = document.createElement('ul');

// const track_1_El = document.createElement('li');
// track_1_El.append(playlist.tracks[0].artistName + ": " + playlist.tracks[0].title);

// const track_2_El = document.createElement('li');
// track_2_El.append(playlist.tracks[1].artistName + ": " + playlist.tracks[1].title);

// tracksListEl.append(track_1_El, track_2_El);
// document.body.append(tracksListEl)








// function renderPlaylist(anyPlaylist) {
//     renderPlaylistHeader(anyPlaylist.playlistInfo)
//     renderTracksList(anyPlaylist.tracks);
// }


// function renderPlaylistHeader(anyPlaylistInfo) {
//     const playlistTitleEl = document.createElement('h1');
//     playlistTitleEl.append(anyPlaylistInfo.title);
//     document.body.append(playlistTitleEl);

//     const playlistCoverEl = document.createElement('img');
//     playlistCoverEl.src = anyPlaylistInfo.coverImage;
//     playlistCoverEl.style.width = '150px';
//     playlistCoverEl.style.height = '150px';
//     document.body.append(playlistCoverEl);
// }

// // не работает исправь смотри выше функцию renderPlaylist
// function renderTracksList(anyTracks) {
//     const trackEl = document.createElement('div');
//     const cover = document.createElement('img');
//     cover.src = anyTracks.coverImageUrl;
//     cover.style.width = '50px';
//     trackEl.append(cover);
//     trackEl.append(anyTracks.artistName + ": " + anyTracks.title);
//     const audio = document.createElement('audio');
//     audio.src = anyTracks.fileUrl;
//     audio.controls = true;
//     trackEl.append(audio);

//     document.body.append(trackEl);
// }



// с помощью цикла
// function renderTracksList(anyTracks) {
// const tracklistElement = document.createElement('ul')
// for (let i = 0; i < anyTracks.length; i++) {
//     const trackElement = document.createElement('li')

//     const trackCoverElement = document.createElement('img')

//     trackCoverElement.src = anyTracks[i].coverImageUrl
//     trackCoverElement.style.width = '50px';
//     trackCoverElement.style.height = '50px';
//     trackElement.append(trackCoverElement)
//     trackElement.append(anyTracks[i].artistName + ": " + anyTracks[i].title)
//     tracklistElement.append(trackElement)
// }

// document.body.append(tracklistElement);
// }








// // с помощью цикла улучшено
// function renderTracksList(anyTracks) {
//     const tracklistElement = document.createElement('ul')
//     for (let i = 0; i < anyTracks.length; i++) {
//         const trackElement = createTrack(anyTracks[i])
//         tracklistElement.append(trackElement)
//     }
//     document.body.append(tracklistElement);
// }

// function createTrack(anyTrack) {
//     const trackElement = document.createElement('li')
//     const trackCoverElement = document.createElement('img')

//     trackCoverElement.src = anyTrack.coverImageUrl
//     trackCoverElement.style.width = '50px';
//     trackCoverElement.style.height = '50px';

//     const audio = document.createElement("audio")
//     audio.src = anyTrack.fileUrl
//     audio.controls = true

//     trackElement.append(trackCoverElement)
//     trackElement.append(anyTrack.artistName + ": " + anyTrack.title)
//     trackElement.append(audio)

//     return trackElement
// }

// renderPlaylist(playlist);











// // render
// renderPlaylist(playlist)

// function renderPlaylist(playlistForRendering) {
//     // all render code should be here.
//     renderPlaylistHeader(playlistForRendering)

//     renderTrack(playlistForRendering.tracks[0]);
//     renderTrack(playlistForRendering.tracks[1]);
// }


// function renderPlaylistHeader(playlistForRendering) {
//     // здесь логика отрисовки шапки "входного" плейлиста
//     let playlistImageElement = document.createElement('img');
//     playlistImageElement.src = playlistForRendering.coverImageUrl;
//     document.body.append(playlistImageElement);

//     let playlistTitleElement = document.createElement('h2');
//     playlistTitleElement.append(playlistForRendering.title);
//     document.body.append(playlistTitleElement);
// }


// function renderTrack(inputTrackForRendering) {
//     // здесь логика отрисовки "входного" трека
//     let trackElement = document.createElement('div');
//     trackElement.append(inputTrackForRendering.artistName + ' - ' + inputTrackForRendering.title);

//     let playerElement = document.createElement('audio');
//     playerElement.src = inputTrackForRendering.fileUrl;
//     playerElement.controls = true;
//     trackElement.append(playerElement);

//     let coverElement = document.createElement('img');
//     coverElement.src = inputTrackForRendering.coverImageUrl;
//     trackElement.append(coverElement);

//     document.body.append(trackElement);
// }