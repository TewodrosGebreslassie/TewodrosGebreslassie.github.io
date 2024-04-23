import React, { MouseEvent, useState } from "react";
import Playlists from "../types/playlist";
import musicLibrary from "../images/musicLibrary.jpeg";
import submusic from "../images/submusic.jpg";
import playbuton from "../images/playbuton.jpg";
import "./index.css";
import { PlayerIcon } from "./PlaySongs";
import musicServices from "../apis/services/musicServices";

type Props = {
  propPlaylist: Playlists[];
  onsetPlayList: (playList: Playlists[]) => void;
};

export default function YourPlayList({ propPlaylist, onsetPlayList }: Props) {
  const [songUrlPath, setSongUrlPath] = useState("");

  const onRemove = async (e: MouseEvent<HTMLImageElement>) => {
    const songId = e.currentTarget.alt;
    const response = await musicServices.removeFromPlaylist(songId);
    onsetPlayList(response.data);
  };

  const playMus = (e: MouseEvent<HTMLImageElement>) => {
    const urlPath = e.currentTarget.alt;
    setSongUrlPath(urlPath);
  };

  return (
    <div className="allsongBackground" style={{ marginTop: "20px" }}>
      <div
        className="backgroundWithText"
        style={{
          backgroundImage: `url(${musicLibrary})`,
          marginTop: "40px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
          margin: "20px",
        }}
      >
        <span className="impressive-text">Your List of Favorite Songs</span>
      </div>
      <div className="bd-example">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Title</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {propPlaylist.map((obj, index) => (
              <tr key={obj.id}>
                <th scope="row">{index + 1}</th>
                <td>{obj.title}</td>
                <td className="align-text-top" style={{ textAlign: "center" }}>
                  <img src={submusic} alt={obj.songId} width="30" height="30" onClick={onRemove} style={{ marginRight: "40px" }} />
                  <img src={playbuton} alt={obj.urlPath} width="40" height="40" onClick={playMus} style={{ marginLeft: "40px" }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PlayerIcon songUrlPath={songUrlPath} playList={propPlaylist} onsetSongUrlPath={setSongUrlPath} />
    </div>
  );
}
