import React from "react";
import { Icon } from "../../icons";
import { useNavigate } from "react-router-dom";
export default function Navigation() {
  const Navigate = useNavigate();
  return (
    <nav className="flex items-center gap-x-4">
      <button
        onClick={() => {
          Navigate(-1);
        }}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <Icon name="prev" size={22} />
      </button>
      <button
        onClick={() => {
          Navigate(+1);
        }}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <Icon name="next" size={22} />
      </button>
    </nav>
  );
}
