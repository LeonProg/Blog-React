import React from 'react'
import { useRoutes } from 'react-router-dom';


import Home from '../pages/HomePage';
import Login from '../pages/LoginPage';
import Post from '../pages/PostPage';
import Registration from '../pages/RegistrationPage';
import CreatePost from '../pages/CreatePostPage';
import { CREATE_ROUTE, HOME_ROUTE, LOGIN_ROUTE, POST_ROUTE, REGISTRATION_ROUTE } from '../utils/Route';

const PublicRoutes = () => useRoutes([
    {
        element: <Home/>,
        path: HOME_ROUTE
    },
    {
        element: <Login/>,
        path: LOGIN_ROUTE
    },
    {
        element: <Registration/>,
        path: REGISTRATION_ROUTE
    },
    {
        element: <Post/>,
        path: POST_ROUTE + '/:id'
    },
])

const PrivateRoutes = () => useRoutes([
    {
        element: <CreatePost/>,
        path: CREATE_ROUTE
    },

])



export  {PublicRoutes, PrivateRoutes }
