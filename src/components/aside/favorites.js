import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "../../icons";
export default function () {
  return (
    <nav className="mt-6">
      <ul>
        <li>
          <NavLink className="px-2 py-3 flex items-center group  text-sm text-link  font-semibold hover:text-white ">
            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 text-black group-hover:bg-opacity-100">
              <Icon name="plus" size={12} />
            </span>
            Çalma Listesi Oluştur
          </NavLink>
        </li>
        <li>
          <NavLink className="px-2 py-3 flex items-center group  text-sm text-link font-semibold hover:text-white">
            <span className="w-6 h-6 flex items-center justify-center bg-white bg-opacity-60 mr-4 bg-gradient-to-br from-purple-900 to-blue-300 group-hover:bg-opacity-100">
              <Icon name="heart" size={12} />
            </span>
            Beğenilen Şarkılar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
