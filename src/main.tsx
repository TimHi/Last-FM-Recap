import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Provider } from 'react-redux';
import store from './store/store.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './routes/LandingPage.tsx';
import TopArtistPage from './routes/TopArtistPage.tsx';
import TopAlbumsPage from './routes/TopAlbumsPage.tsx';
import ErrorPage from './routes/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  { path: "/artists", element: <TopArtistPage /> },
  { path: "/albums", element: <TopAlbumsPage /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
