export const userName = "Bob"

export const data = {
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