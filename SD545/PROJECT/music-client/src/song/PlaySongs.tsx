import React, { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Playlists from "../types/playlist";
import "./index.css";

type Props = {
  songUrlPath: string;
  playList: Playlists[];
  onsetSongUrlPath: (play: string) => void;
};

export const PlayerIcon = ({ songUrlPath, playList, onsetSongUrlPath }: Props) => {
  const findurl = playList.find((song) => song.urlPath === songUrlPath);
  const [indexofSOng, setIndexOfSong] = useState(-1);

  useEffect(() => {
    if (findurl) {
      const foundIndex = playList.findIndex((song) => song.urlPath === songUrlPath);
      setIndexOfSong(foundIndex !== -1 ? foundIndex : 0);
      onsetSongUrlPath(findurl.urlPath);
    } else {
      onsetSongUrlPath(songUrlPath);
    }
  }, [findurl, songUrlPath, playList, onplay]);

  const onClickNext = () => {
    if (indexofSOng < playList.length - 1) {
      setIndexOfSong(indexofSOng + 1);
    } else {
      setIndexOfSong(0);
    }
  };

  const onClickPrevious = () => {
    if (indexofSOng > 0) {
      setIndexOfSong(indexofSOng - 1);
    } else {
      setIndexOfSong(playList.length - 1);
    }
  };

  return (
    <div className="player-container ">
      <h2>
        <h2 className="slidtext ">{findurl && playList[indexofSOng]?.title}</h2>
      </h2>

      <AudioPlayer
        className="audio-player rhap_controls"
        onClickNext={onClickNext}
        onClickPrevious={onClickPrevious}
        src={`http://localhost:8000/${playList[indexofSOng]?.urlPath}`}
        showSkipControls
      />
    </div>
  );
};
