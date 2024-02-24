import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/UserLogin";
import Home from "./pages/Home";
import { MantineProvider } from "@mantine/core";
import UserRegister from "./pages/UserRegister";
import Post from "./pages/Post";
import UserAccount from "./pages/UserAccount";
import { AuthProvider } from "./utility/Context/Auth.Context";

export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <UserRegister></UserRegister>,
        },
        {
            path: "/posts",
            element: <Post></Post>,
        },
        {
            path: "/account",
            element: <UserAccount></UserAccount>,
        },
    ]);
    return (
        <MantineProvider>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </MantineProvider>
    );
}
