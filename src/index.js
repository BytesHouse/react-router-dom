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
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

