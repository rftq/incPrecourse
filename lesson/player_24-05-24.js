//data
const data = {
    playlists: [
        {
            playlistInfo: {
                id: "1-0",
                title: 'Hip-Hop Hits',
                coverImgUrl: 'img/cover.jpeg',
                trackCount: 4
            },
            tracks: [
                {
                    trackId: '1',
                    trackCoverImageUrl: './img/eminem.jpeg',
                    artistName: 'Eminem',
                    trackTitle: 'Rap God',
                    trackFileUrl: './audio/eminem_rap_god.mp3',
                    isHot: true,
                },
                {
                    trackId: '2',
                    trackCoverImageUrl: './img/50cent.jpeg',
                    artistName: '50cent',
                    trackTitle: 'In da Club',
                    trackFileUrl: './audio/50cent_in_da_club.mp3',
                    isHot: false
                }
            ]
        },
        {
            playlistInfo: {
                id: "1-1",
                title: 'Rap Hits 1990s',
                coverImgUrl: 'img/cover.jpeg',
                trackCount: 4
            },
            tracks: [
                {
                    trackId: '5',
                    trackCoverImageUrl: './img/Public Enemy.jpeg',
                    artistName: 'Public Enemy',
                    trackTitle: 'Fight The Power',
                    trackFileUrl: './audio/Public Enemy.mp3',
                    isHot: true,
                },
                {
                    trackId: '6',
                    trackCoverImageUrl: './img/Vanila Ice.jpeg',
                    artistName: 'Vanila Ice',
                    trackTitle: 'Ice Ice Baby',
                    trackFileUrl: './audio/Ice Ice Baby.mp3',
                    isHot: true
                }
            ]
        }
    ]
}



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








function renderPlaylist(anyPlaylist) {
    renderPlaylistHeader(anyPlaylist.playlistInfo)
    renderTracksList(anyPlaylist.tracks);
}


function renderPlaylistHeader(anyPlaylistInfo) {
    const playlistTitleEl = document.createElement('h1');
    playlistTitleEl.append(anyPlaylistInfo.title);
    document.body.append(playlistTitleEl);

    const playlistCoverEl = document.createElement('img');
    playlistCoverEl.src = anyPlaylistInfo.coverImage;
    playlistCoverEl.style.width = '150px';
    playlistCoverEl.style.height = '150px';
    document.body.append(playlistCoverEl);
}

// не работает исправь смотри выше функцию renderPlaylist
function renderTracksList(anyTracks) {
    const trackEl = document.createElement('div');
    const cover = document.createElement('img');
    cover.src = anyTracks.coverImageUrl;
    cover.style.width = '50px';
    trackEl.append(cover);
    trackEl.append(anyTracks.artistName + ": " + anyTracks.title);
    const audio = document.createElement('audio');
    audio.src = anyTracks.fileUrl;
    audio.controls = true;
    trackEl.append(audio);

    document.body.append(trackEl);
}



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





// с помощью цикла улучшено
function renderTracksList(anyTracks) {
    const tracklistElement = document.createElement('ul')
    for (let i = 0; i < anyTracks.length; i++) {
        const trackElement = createTrack(anyTracks[i])
        tracklistElement.append(trackElement)
    }
    document.body.append(tracklistElement);
}

function createTrack(anyTrack) {
    const trackElement = document.createElement('li')
    const trackCoverElement = document.createElement('img')

    trackCoverElement.src = anyTrack.coverImageUrl
    trackCoverElement.style.width = '50px';
    trackCoverElement.style.height = '50px';

    const audio = document.createElement("audio")
    audio.src = anyTrack.fileUrl
    audio.controls = true

    trackElement.append(trackCoverElement)
    trackElement.append(anyTrack.artistName + ": " + anyTrack.title)
    trackElement.append(audio)

    return trackElement
}

renderPlaylist(playlist);


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


