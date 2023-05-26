import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit'
import lastfmApi from "../api/data-service";
import listenerMiddleware from './middleware';
import userSlice from './userSlice';
import localBackend from '../api/local-backend';

const rootReducer = combineReducers({
    user: userSlice,
    [localBackend.reducerPath]: localBackend.reducer,
    [lastfmApi.reducerPath]: lastfmApi.reducer,


});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().prepend(
                listenerMiddleware.middleware,
                localBackend.middleware,
                lastfmApi.middleware,
            );
        },
        preloadedState
    });
}

const store = setupStore();

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
