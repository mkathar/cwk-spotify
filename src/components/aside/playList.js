import React from "react";

export default function playList() {
  return (
    <nav className="mx-6 py-2 mt-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
      <ul>
        {new Array(40).fill(
          <li>
            <a
              href="#"
              className="text-s text-link hover:text-white flex h-8 items-center"
            >
              13. Çalma Listem
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
