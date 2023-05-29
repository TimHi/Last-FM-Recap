import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit'
import lastfmApi from "../api/data-service";
import userSlice from './userSlice';
import localBackend from '../api/local-backend';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import listenerMiddleware from './middleware';


const rootReducer = combineReducers({
    user: userSlice,
    [localBackend.reducerPath]: localBackend.reducer,
    [lastfmApi.reducerPath]: lastfmApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        }).prepend(
            listenerMiddleware.middleware,
            localBackend.middleware,
            lastfmApi.middleware,
        ),
        preloadedState
    });
}

const store = setupStore();

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

