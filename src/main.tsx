import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Provider } from 'react-redux';
import store, { persistor } from './store/store.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './routes/LandingPage.tsx';
import TopArtistPage from './routes/TopArtistPage.tsx';
import TopAlbumsPage from './routes/TopAlbumsPage.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import TopTracksPage from './routes/TopTracksPage.tsx';
import GenresPage from './routes/GenresPage.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import ArtistDetailPage from './routes/ArtistDetailPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  { path: "/artists", element: <TopArtistPage />, errorElement: <ErrorPage /> },
  {
    path: "/artists/:id/:name",
    element: <ArtistDetailPage />, errorElement: <ErrorPage />
  },
  { path: "/albums", element: <TopAlbumsPage />, errorElement: <ErrorPage /> },
  { path: "/tracks", element: <TopTracksPage />, errorElement: <ErrorPage /> },
  { path: "/genres", element: <GenresPage />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
