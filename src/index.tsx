import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
} from 'react-router-dom';

import App from './App';
import Bedroom from './pages/Bedroom';
import Restaurants from './pages/Restaurants';
import Activite from './pages/Activite';
import Service from './pages/Service';
import Location from './pages/Location';
import Slider from './components/Slider';
import Footer from './components/Footer';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/bedroom', element: <Bedroom /> },
  { path: '/restaurants', element: <Restaurants /> },
  { path: '/activite', element: <Activite /> },
  { path: '/service', element: <Service /> },
  { path: '/location', element: <Location /> },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);
