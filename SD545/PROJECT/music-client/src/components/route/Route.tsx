import { Navigate } from "react-router-dom";

import Music from "../../pages/musicHomePage/MusicHomePage";

export default [
  {
    path: "/music",
    element: <Music />,
  },
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
];
