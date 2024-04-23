import React, { useEffect, useState } from "react";
import Playlists from "../../types/playlist";
import Header from "./header/Header";
import musicServices from "../../apis/services/musicServices";
import AllSongLists from "../../song/AllSongLists";
import YourPlayList from "../../song/YourPlayList";

export default function MusicHomePage() {
  const [allMusicList, setallMusicList] = useState<Playlists[]>([]);
  const [playlist, setPlaylist] = useState<Playlists[]>([]);

  useEffect(() => {
    async function getAllMusicList() {
      const response = await musicServices.list();
      setallMusicList(response.data);
    }
    getAllMusicList();

    async function getPlayList() {
      const response = await musicServices.playlist();
      setPlaylist(response.data);
      console.log(playlist);
    }
    getPlayList();
  }, []);

  return (
    <div>
      <Header onsetallMusicList={setallMusicList} />
      <AllSongLists propsMusicList={allMusicList} propPlayList={playlist} onsetPlayList={setPlaylist} />
      <YourPlayList propPlaylist={playlist} onsetPlayList={setPlaylist} />
    </div>
  );
}
