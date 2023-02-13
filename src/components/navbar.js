import React from "react";
import Navigation from "./navbar/navigation";
import Auth from "./navbar/auth";
import Search from "./navbar/search";
import { useMatch } from "react-router-dom";

export default function Nav({ a }) {
  const searchRoute = useMatch({ path: "/search" });
  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation />
      {searchRoute && <Search />}
      <Auth />
    </nav>
  );
}
