import React from "react";
import { Icon } from "../../icons";
import { NavLink } from "react-router-dom";
export default function menu() {
  const activeStyle = { backgroundColor: "#282828", color: "white" };

  return (
    <div className="px-2 ">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to="/"
            className="text-link hover:text-white transition h-10 flex gap-x-4 items-center text-sm font-semibold px-4 rounded  "
            href=""
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <span>
              <Icon name="home" />
            </span>
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Search"
            className="text-link hover:text-white transition h-10 flex gap-x-4 items-center text-sm font-semibold px-4 rounded "
            href=""
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Collection"
            className="text-link hover:text-white transition h-10 flex gap-x-4 items-center text-sm font-semibold px-4 rounded "
            href=""
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <span>
              <Icon name="collection" />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
