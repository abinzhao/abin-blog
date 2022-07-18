import React from 'react';
// import { Navigate } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import { BlogEmpty, BlogError404, Home, Datelis } from '@/pages';

const routers = [
    // { path: '/', element: <Navigate to="/home" /> }, //重定向
    { path: '/', element: <Home /> }, //重定向
    { path: '/home', element: <Home /> },
    {
        path: '/home',
        element: (
            <PrivateRoute when={true}>
                <Home />
            </PrivateRoute>
        ),
    },
    {
        path: '/blog',
        element: <BlogEmpty />,
    },
    {
        path: '/github',
        element: <BlogEmpty />,
    },
    {
        path: '/detail/:id',
        element: <Datelis />,
    },
    {
        path: '*',
        element: <BlogError404 />,
    },
];

export default routers;
