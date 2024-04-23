import React, { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";
import logo2 from "../../../images/logo2.jpg";
import Playlists from "../../../types/playlist";
import { useNavigate } from "react-router-dom";
import musicServices from "../../../apis/services/musicServices";
import "./index.css";

type Props = {
  onsetallMusicList: (allsonglist: Playlists[]) => void;
};

export default function Header({ onsetallMusicList }: Props) {
  const [searchInput, setSearchInput] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  };

  const searchButton = () => {
    getSelectedSongs(searchInput);
  };

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
    localStorage.removeItem("access_Token");
  };

  async function getSelectedSongs(value: string) {
    const response = await musicServices.list(value);
    onsetallMusicList(response.data);
  }

  const enterHandleForm = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      getSelectedSongs(searchInput.trim());
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container bagroundHeader">
      <header className="py-3 bg-purple text-light" style={{ backgroundSize: "cover" }}>
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <img className="mb-4" src={logo2} alt="logoForLogin" width="150" height="100" />
          <form className="flex-grow mx-4" role="search" onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control form-control-lg text-dark bg-white rounded-full px-4 py-3 focus:outline-none w-full"
              placeholder="Search for music..."
              aria-label="Search"
              name="searchInput"
              onKeyUp={enterHandleForm}
              onChange={onChangeHandler}
            />
          </form>

          <button type="button" className="btn btn-light " onClick={searchButton}>
            Search
          </button>
          <img className="mb-4" src={logo2} alt="logoForLogin" width="150" height="100" />
        </div>{" "}
        <button type="button" className="btn btn-outline-light px-6 py-3" style={{ marginLeft: "960px" }} onClick={navigateHandler}>
          Logout
        </button>
      </header>
    </div>
  );
}
