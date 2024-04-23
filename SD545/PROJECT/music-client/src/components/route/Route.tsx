// import React from "react";

// export default function Route() {
//   return <div>Route</div>;
// }

import { Navigate } from "react-router-dom";
import Login from "../../pages/Login";
import List from "../../components/suggestionMusicLIst/SuggestionSongs";
import YourPlayList from "../../components/yourPlayList/YourPlayList";
import ErrorHandler from "../Error/ErrorHandler";
import { Children } from "react";

export default [
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/music",
    element: <List />,
  },
  {
    path: "/playlist",
    element: <YourPlayList />,
    Children: [
      {
        path: "add",
        element: <YourPlayList />,
      },
      {
        path: "remove",
        element: <YourPlayList />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="auth/login" />,
  },
  {
    path: "*",
    element: <ErrorHandler />,
  },
];
