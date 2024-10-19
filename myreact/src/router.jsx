import {
    BrowserRouter,
    Routes,
    Route,
    createBrowserRouter,
    Navigate,
} from "react-router-dom";
import Users from "./pages/User";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound";
import DefaultLayout from "./components/layout/DefaultLayout";
import GuestLayout from "./components/layout/GuestLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,

        children: [
            {
                path: "/dashboard",
                element: <Dashboard/>,
            },
            {
                path: "/user",
                element: <Users />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
