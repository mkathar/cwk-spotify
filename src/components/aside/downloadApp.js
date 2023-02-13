import React from "react";
import { Icon } from "../../icons";

export default function downloadApp() {
  return (
    <a className="h-10 flex flex-shrink-0 font-semibold text-link text-sm hover:text-white items-center px-6 gap-x-6">
      <Icon name="download" size={20 }/>
      Uygulamayı Yükle
    </a>
  );
}
