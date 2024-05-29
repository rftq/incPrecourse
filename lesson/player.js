//data
let playlist = {
    title: 'Hip-Hop Hits',
    coverImage: './hip-hop-hits.jpg',
    info: {
        totalTracksCount: 4,
        totalTrackDurationInSeconds: 733,
    },
    tracks: [
        {
            coverImageUrl: 'track1.jpeg',
            artistName: 'Eminem',
            title: 'Rap God',
            fileUrl: 'Eminem_-_Rap_God.mp3',
            isHot: false,
        },
        {
            coverImageUrl: 'track2.jpeg',
            artistName: '50cent',
            title: 'In da Club',
            fileUrl: '50_Cent_-_In_Da_Club.mp3',
            isHot: true,
        }
    ]
}



// render
renderPlaylist(playlist)

function renderPlaylist(playlistForRendering) {
    // all render code should be here.
    renderPlaylistHeader(playlistForRendering)

    renderTrack(playlistForRendering.tracks[0]);
    renderTrack(playlistForRendering.tracks[1]);
}


function renderPlaylistHeader(playlistForRendering) {
    // здесь логика отрисовки шапки "входного" плейлиста
    let playlistImageElement = document.createElement('img');
    playlistImageElement.src = playlistForRendering.coverImageUrl;
    document.body.append(playlistImageElement);

    let playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(playlistForRendering.title);
    document.body.append(playlistTitleElement);
}


function renderTrack(inputTrackForRendering) {
    // здесь логика отрисовки "входного" трека
    let trackElement = document.createElement('div');
    trackElement.append(inputTrackForRendering.artistName + ' - ' + inputTrackForRendering.title);

    let playerElement = document.createElement('audio');
    playerElement.src = inputTrackForRendering.fileUrl;
    playerElement.controls = true;
    trackElement.append(playerElement);

    let coverElement = document.createElement('img');
    coverElement.src = inputTrackForRendering.coverImageUrl;
    trackElement.append(coverElement);

    document.body.append(trackElement);
}



// 16 minuta video ot 6 января 2024