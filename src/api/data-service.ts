import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootArtist } from '../model/TopArtist'
import { RootAlbum } from '../model/TopAlbum'
import { RootTracks } from '../model/TopTracks'
import { TopAlbumTagsModel } from '../model/AlbumTopTags'
import { RootSimilarartists } from '../model/SimilarArtist'


const lastfmApi = createApi({
    reducerPath: 'lastfmApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://ws.audioscrobbler.com/2.0',
        credentials: "same-origin",
        mode: 'cors',
    }),

    endpoints: (builder) => ({
        getTopArtistForUser: builder.query<RootArtist, string>({
            query: (userName) =>
                `?method=user.gettopartists&user=${userName}&api_key=${import.meta.env.VITE_LAST_FM_KEY}&period=12month&format=json`,
        }),
        getTopAlbumsForUser: builder.query<RootAlbum, string>({
            query: (userName) => `?method=user.gettopalbums&user=${userName}&api_key=${import.meta.env.VITE_LAST_FM_KEY}&period=12month&format=json`,
        }),
        getTopTracksForUser: builder.query<RootTracks, string>({
            query: (userName) => `?method=user.gettoptracks&user=${userName}&api_key=${import.meta.env.VITE_LAST_FM_KEY}&period=12month&format=json`,
        }),
        getTopTagsForAlbum: builder.query<TopAlbumTagsModel, TopTagsRequestParameters>({
            query: (params) => `?method=album.gettoptags&artist=${params.artistName}&album=${params.albumName}&mbid=${params.mbid}&api_key=${import.meta.env.VITE_LAST_FM_KEY}&format=json`,
        }),
        getSimilarArtists: builder.query<RootSimilarartists, string>({
            query: (artist) => `?method=artist.getsimilar&artist=${artist}&api_key=${import.meta.env.VITE_LAST_FM_KEY}&format=json`,
        })
    })
});

interface TopTagsRequestParameters {
    mbid: string,
    albumName: string,
    artistName: string,
}

interface SimilarArtistParameters {
    artistName: string,
    mbid: string,
}

export default lastfmApi
