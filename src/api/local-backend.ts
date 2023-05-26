import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ArtistImage } from '../model/ArtistImage';
const localBackend = createApi({
    reducerPath: 'localBackend',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080',
        credentials: "same-origin",
        mode: 'cors',

    }),
    endpoints: (builder) => ({
        scrapeImage: builder.query<string, string>({
            query: (url) => `/img/${url}`,
            transformResponse: (message: ArtistImage) => {
                return message.message;
            }
        })
    }),
})


export default localBackend
