import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import News from "./pages/News";
import MapPage from "./pages/MapPage";

const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <App/>,
        children: [
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'map',
                element: <MapPage/>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/*',
        element: <div>404</div>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

