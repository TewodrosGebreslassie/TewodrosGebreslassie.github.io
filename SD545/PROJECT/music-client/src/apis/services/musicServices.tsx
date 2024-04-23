import { UserInfo } from "../../types/login";
import url from "./axios";

const login = (data: UserInfo) => {
  return url.post("/auth/login", data);
};

const list = (query: string = "") => {
  const path = query === "" ? "/music" : `/music?search=${query}`;
  return url.get(path);
};
const playlist = () => {
  return url.get("/playlist");
};
const removeFromPlaylist = (songId: string) => {
  return url.post("/playlist/remove", { songId: songId });
};
const addToPlaylist = (songId: string) => {
  return url.post("/playlist/add", { songId: songId });
};
const pagNotFound=()=>{
  
}
export default {
  login,
  list,
  playlist,
  removeFromPlaylist,
  addToPlaylist,
};
