import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit'
import api from "../api/data-service";
import listenerMiddleware from './middleware';
import userSlice from './userSlice';

const rootReducer = combineReducers({
    user: userSlice,
    [api.reducerPath]: api.reducer
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().prepend(
                listenerMiddleware.middleware,
                api.middleware
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
