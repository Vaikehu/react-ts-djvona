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

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/Bedroom', elment: <Bedroom /> },
  { path: '/Restaurants', element: <Restaurants /> },
  { path: '/Activite', element: <Activite /> },
  { path: '/Service', element: <Service /> },
  { path: '/Location', element: <Location /> },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
