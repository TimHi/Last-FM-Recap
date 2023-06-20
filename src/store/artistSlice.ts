import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { ArtistModel } from '../model/TopArtist';
import lastfmApi from '../api/data-service';
import { RootState } from './store';


const artistAdapter = createEntityAdapter<ArtistModel>({
    selectId: (c) => c.mbid + c.name,
    sortComparer: (a, b) => (a.mbid + a.name).localeCompare(b.mbid + b.name)
});

export const artistSlice = createSlice({
    name: 'artist',
    initialState: artistAdapter.getInitialState(),
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addMatcher(lastfmApi.endpoints.getTopArtistForUser.matchFulfilled, (state, action) => {
            artistAdapter.setAll(state, action.payload.topartists.artist);
        });
    },
});

const selectors = artistAdapter.getSelectors<RootState>((state) => state.artist);
export const selectAllArtist = selectors.selectAll;
export const selectArtistById = selectors.selectById;
export default artistSlice.reducer;