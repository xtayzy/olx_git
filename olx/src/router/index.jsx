import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainPage} from "../pages/MainPage/index.jsx";
import {RegisterPage} from "../pages/RegisterPage/index.jsx";
import {LogInPage} from "../pages/LogInPage/index.jsx";
import {ProfilePage} from "../pages/ProfilePage/index.jsx";
import ProtectedRoute from "./protectedRoute.jsx";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    },
    {
        path: "/login",
        element: <LogInPage/>
    },
    {
        path: "/profile",
        element: <ProfilePage/>
    },
])

