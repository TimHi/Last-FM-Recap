import { FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootArtist } from '../model/TopArtist'
import { RootAlbum, Topalbums } from '../model/TopAlbum'
import { RootTracks } from '../model/TopTracks'
import { Tag, TopAlbumTagsModel } from '../model/AlbumTopTags'


// Define a service using a base URL and expected endpoints
const lastfmApi = createApi({
    reducerPath: 'lastfmApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://ws.audioscrobbler.com/2.0',
        credentials: "same-origin",
        mode: 'cors',
    }),

    endpoints: (builder) => ({
        getTopArtistForUser: builder.query<RootArtist, string>({
            query: (userName) => `?method=user.gettopartists&user=${userName}&api_key=${import.meta.env.VITE_LAST_FM_KEY}&period=12month&format=json`,
        }),
        getTopAlbumsForUser: builder.query<RootAlbum, string>({
            query: (userName) => `?method=user.gettopalbums&user=${userName}&api_key=${import.meta.env.VITE_LAST_FM_KEY}&period=12month&format=json`,
        }),
        getTopTracksForUser: builder.query<RootTracks, string>({
            query: (userName) => `?method=user.gettoptracks&user=${userName}&api_key=${import.meta.env.VITE_LAST_FM_KEY}&period=12month&format=json`,
        }),
        getTopTagsForAlbum: builder.query<TopAlbumTagsModel, TopTagsRequestParamets>({
            query: (rqParameter) => `?method=album.gettoptags&artist=${rqParameter.artist}&album=${rqParameter.albumName}&api_key=${import.meta.env.VITE_LAST_FM_KEY}&format=json`,
        })
    }),
})

export default lastfmApi

interface TopTagsRequestParamets {
    albumName: string,
    artist: string
}