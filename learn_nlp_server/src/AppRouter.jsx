import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Landing from "./views/Landing";
import LearnNLP from "./views/LearnNLP";
import ExploreNLP from "./views/ExploreNLP";
import Stories from "./views/Stories";
import Story from "./components/Story";
import Login from "./views/Login";
import NotFound from "./components/NotFound";
import App from "./App";
import { useState, useEffect } from "react";
import AuthContext from "./context/AuthContext";
import {jwtDecode} from "jwt-decode";
import StoryForm from "./views/StoryForm";
import ConfirmDelete from "./views/ConfirmDelete";
import Authors from "./views/Authors";
import AuthorForm from "./components/AuthorForm";
import ConfirmDeleteAuthor from "./components/ConfirmDeleteAuthor";

const LOCAL_STORAGE_TOKEN_KEY = "nlp_app_token";

const timer = 1000 * 60 * 14; // 14 minutes


function AppRouter() {
    const [user, setUser] = useState(null);

    const [restoreLoginAttemptCompleted, setRestoreLoginAttemptCompleted] = useState(false);

    // NEW: Define a useEffect hook callback function to attempt
    // to restore the user's token from localStorage
    function refreshToken() {
        if (localStorage.getItem("jwt")) {
            refresh()
                .then(setUser)
                .catch(logout)
                .finally(() => {
                    setRestoreLoginAttemptCompleted(true);
                    localStorage.getItem("jwt") &&
                        setTimeout(refreshToken, timer);
                });
        } else {
            setRestoreLoginAttemptCompleted(true);
        }
    }

    useEffect(() => {
        refreshToken();
    }, []);

    const login = (token) => {

        // Save the token to localStorage
        localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);

        // Decode the token
        const { sub: username, authorities: roles } = jwtDecode(token);

        // Split the authorities string into an array of roles
        // Create the "user" object
        const user = {
            username,
            roles,
            token,
            hasRole(role) {
                return this.roles.includes(role);
            }
        };

        // Log the user for debugging purposes
        console.log(user);

        // Update the user state
        setUser(user);

        // Return the user to the caller
        return user;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    };

    const auth = {
        user: user ? { ...user } : null,
        login,
        logout
    };

    // Log the auth object for debugging purposes
    console.log(auth);

    if (!restoreLoginAttemptCompleted) {
        return null;
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Landing />
                },
                {
                    path: "/LearnNLP",
                    element: <LearnNLP />
                },
                {
                    path: "/ExploreNLP",
                    element: <ExploreNLP />
                },
                {
                    path: "/Stories",
                    element: <Stories />
                },
                {
                    path: "/story/:id",
                    element: <Story />
                },
                {
                    path: "/login",
                    element: !user ? <Login /> : <Navigate to="/" replace={true} />
                },
                {
                    path: "*",
                    element: <NotFound />
                },
                {
                    path: "/edit/:id",
                    element: user ? <StoryForm /> : <Navigate to="/login" replace={true} />
                },
                {
                    path: "/add",
                    element: user ? <StoryForm /> : <Navigate to="/login" replace={true} />
                },
                {
                    path: "/delete/:id",
                    element: user ? <ConfirmDelete /> : <Navigate to="/login" replace={true} />
                },
                {
                    path: "/authors",
                    element: user ? <Authors /> : <Navigate to="/login" replace={true} />
                },
                { 
                    path: "/authors/add", 
                    element: user ? <AuthorForm /> : <Navigate to="/login" replace={true} />
                },
                {
                    path: "authors/delete/:id",
                    element: user ? <ConfirmDeleteAuthor /> : <Navigate to="/login" replace={true} />

                }
            ]
        }
    ]);

    return (

        <AuthContext.Provider value={auth}>
            <RouterProvider router={router} />
        </AuthContext.Provider>

    );
}

export default AppRouter;