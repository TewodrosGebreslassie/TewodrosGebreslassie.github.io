import React from "react";
import Header from "./components/header/Header";
import SuggestionSongs from "./components/suggestionMusicLIst/SuggestionSongs";
import YourPlayList from "./components/yourPlayList/YourPlayList";
import Home from "./pages/Home";
import musiciconebg from "./components/images/musiciconebg.jpg";

function App() {
  return (
    <div className="container" style={{ backgroundImage: `url(${musiciconebg})`, backgroundSize: "cover" }}>
      <div>
        <Header />
        <Home />
      </div>

      <SuggestionSongs />
      <YourPlayList />
    </div>
  );
}

export default App;
