import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./components/Landing";
import LearnNLP from "./components/LearnNLP";
import ExploreNLP from "./components/ExploreNLP";
import Stories from "./components/Stories";

import App from "./App";

function AppRouter() {
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
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default AppRouter;