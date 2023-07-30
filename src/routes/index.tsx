import {createBrowserRouter} from "react-router-dom"
import HomePage from "../pages"
import Root from "./root"
import Detail from "../pages/detail.";
import Profile from "../pages/profile/index";
import Answers from "../pages/profile/answers";
import Comments from "../pages/profile/comments";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "",
                element: <HomePage/>
            },
            {
                path: "soru-cevap/:id",
                element: <Detail/>
            },
            {
                path: "profil/:id",
                element: <Profile/>
            },
            {
                path: "profil/:id/cevaplar",
                element: <Answers/>
            },
            {
                path: "profil/:id/yorumlar",
                element: <Comments/>
            },

        ]
    }
])