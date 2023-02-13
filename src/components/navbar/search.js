import React from "react";
import { Icon } from "../../icons";
export default function Search() {
  return (
    <div className="mr-auto ml-4 relative">
      <label
        htmlFor="search-input"
        className=" text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0 "
      >
        <Icon size={24} name="search" />
      </label>
      <input
        autoFocus={true}
        type="text"
        className="h-10 pl-12 bg-white rounded-3xl placeholder-black/50 text-sm text-black max-w-full w-[22.75rem]"
        placeholder="Ne dinlemek istiyorsun?"
      />
    </div>
  );
}
