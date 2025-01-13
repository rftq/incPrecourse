// export const userName = 'Bob'

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