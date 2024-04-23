import MusicHomePage from "./pages/musicHomePage/MusicHomePage";

import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/Error/PageNotFound";

// import Music from "./pages/MusicHomePage/Music";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/music" element={<MusicHomePage />} />
            <Route path="/playlist" element={<MusicHomePage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
