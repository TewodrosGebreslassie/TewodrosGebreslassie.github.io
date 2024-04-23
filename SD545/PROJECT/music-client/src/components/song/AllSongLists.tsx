import React, { MouseEvent } from "react";
import addmusic from "../../images/addmusic.webp";
import image22 from "../../images/image22.png";
import Playlists from "../../types/playlist";
import musicServices from "../../apis/services/musicServices";

// import { useNavigate } from "react-router-dom";
// import PubSub from "pubsub-js"; // Import PubSub

interface Props {
  propsMusicList: Playlists[];
  propPlayList: Playlists[];
  onsetPlayList: (playlist: Playlists[]) => void;
}

export default function AllSongLists({ propsMusicList, propPlayList, onsetPlayList }: Props) {
  // const navigate = useNavigate();
  const addtoPlaylist = async (e: MouseEvent<HTMLImageElement>) => {
    const id = e.currentTarget.alt;
    const response = await musicServices.addToPlaylist(id);
    console.log(response.data);
    onsetPlayList(response.data);
  };

  // const handleMyFavorite = () => {
  //   navigate("/playlist", { state: { propPlayList, onsetPlayList } }); // Pass props to "/playlist" route
  // };

  return (
    <div style={{ marginTop: "10px" }}>
      <div
        className="comenBground"
        style={{
          position: "relative",

          backgroundPosition: "center",

          textAlign: "center",
        }}
      >
        <span>
          <img src={image22} alt="addddd" width="120px" />
        </span>
        {/* className="h3 other-styles" to make the massage movabel */}
        <div className="impressive-text" style={{ position: "absolute", top: "0%", left: "50%", transform: "translate(-50%, -50%)" }}>
          Songs you may be interested
        </div>
      </div>

      <div className="bd-example">
        <table className="table table-hover">
          <thead>
            <tr style={{ marginTop: "20px" }}>
              <th scope="col">Index</th>
              <th scope="col">Title</th>
              <th scope="col">Release Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {propsMusicList.map((obj, index) => (
              <tr key={obj.id}>
                <th scope="row">{index + 1}</th>
                <td>{obj.title}</td>
                <td>{obj.releaseDate}</td>
                <td className="align-text-top" style={{ textAlign: "center" }}>
                  <img src={addmusic} alt={obj.id} width="30" height="30" onClick={addtoPlaylist} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button onClick={handleMyFavorite}>myfavorit Songs</button> */}
      </div>
    </div>
  );
}
