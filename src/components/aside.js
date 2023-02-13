import React from "react";
import logo from "../img/logo.svg";
import Menu from "./aside/menu";
import Favorites from "./aside/favorites";
import PlayList from "./aside/playList";
import DownloadApp from "./aside/downloadApp";
import { useSelector } from "react-redux";
import SidebarCover from "./aside/sidebarCover";
export default function Aside({ a }) {
  const sidebar = useSelector((state) => state.player.sidebar);
  return (
    <aside className="w-60 pt-6 flex flex-col flex-shrink-0 bg-black">
      <a href="#" className="mb-7 px-6">
        <img src={logo} alt="" className="h-10" />
      </a>
      <Menu />
      <Favorites />
      <PlayList />
      <DownloadApp />
      {sidebar && <SidebarCover />}
    </aside>
  );
}
