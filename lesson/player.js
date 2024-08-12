//data
let playlist = {
    playlistId: '1',
    playlistInfo: {
        title: 'Hip-Hop Hits',
        coverImage: 'img/cover.jpeg',
        info: {
            totalTracksCount: 4,
            totalTrackDurationInSeconds: 733,
        },
    },

    tracks: [
        {
            trackId: '1',
            coverImageUrl: './img/eminem.jpeg',
            artistName: 'Eminem',
            title: 'Rap God',
            fileUrl: './audio/eminem_rap_god.mp3',

            trackDurationInSec: 1,
            isHot: false
        },
        {
            coverImageUrl: './img/50cent.jpeg',
            artistName: '50cent',
            title: 'In da Club',
            fileUrl: './audio/50cent_in_da_club.mp3',
            trackDurationInSec: 1,
            isHot: true
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
    renderTrack(anyPlaylist.tracks[0]);
    renderTrack(anyPlaylist.tracks[1]);
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


function renderTrack(anyTrack) {
    const trackEl = document.createElement('div');
    const cover = document.createElement('img');
    cover.src = anyTrack.coverImageUrl;
    cover.style.width = '50px';
    trackEl.append(cover);
    trackEl.append(anyTrack.artistName + ": " + anyTrack.title);
    const audio = document.createElement('audio');
    audio.src = anyTrack.fileUrl;
    audio.controls = true;
    trackEl.append(audio);

    document.body.append(trackEl);
}

renderPlaylist(playlist);


// с помощью цикла
const tracklistElement = document.createElement('ul')
for (let i = 0; i < playlist.tracks.length; i++) {
    const trackElement = document.createElement('li')

    const trackCoverElement = document.createElement('img')

    trackCoverElement.src = playlist.tracks[i].coverImageUrl
    trackCoverElement.style.width = '50px';
    trackCoverElement.style.height = '50px';
    trackElement.append(trackCoverElement)
    trackElement.append(playlist.tracks[i].artistName + ": " + playlist.tracks[i].title)
    tracklistElement.append(trackElement)
}

document.body.append(tracklistElement);





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


