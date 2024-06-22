import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppDetail, Login, Portal, Register } from "./pages";
import { Layout } from "./components";
import { RequireAuthService } from "./libs";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";

const router = createBrowserRouter([
    {
        path: "login",
        async lazy() {
            return { Component: Login };
        },
    },
    {
        path: "register",
        async lazy() {
            return { Component: Register };
        },
    },
    {
        Component: Layout,
        loader: RequireAuthService,
        children: [
            {
                index: true,
                async lazy() {
                    return { Component: Portal };
                },
            },
            {
                path: ":id",
                async lazy() {
                    return { Component: AppDetail };
                },
            },
        ],
    },
]);

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default function App() {
    return (
        <GoogleOAuthProvider clientId="181906300129-1pp61a8hoa9joki8231c0nhpol9cqp9l.apps.googleusercontent.com">
            <RouterProvider
                router={router}
                fallbackElement={<p>Loading...</p>}
            />
        </GoogleOAuthProvider>
    );
}
