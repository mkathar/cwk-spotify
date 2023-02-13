import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./navbar";
import Home from "./views/home";
import Search from "./views/search";
import Collection from "./views/collection";
export default function content() {
  return (
    <main className="bg-black flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 py -5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Collection" element={<Collection />} />
        </Routes>
      </div>
    </main>
  );
}
