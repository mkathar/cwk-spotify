import React from "react";
import { Icon } from "../icons";
import Player from "./Footer/player";

export default function footer({ a }) {
  return (
    <div className="h-24 bg-footer border-t border-white border-opacity-5">
      
      <Player/>
    </div>
  );
}
