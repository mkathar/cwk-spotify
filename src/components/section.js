import React from "react";
import { NavLink } from "react-router-dom";
import SongItem from "./songItem";
import Title from "./title";
function Section({ title, more = false, items }) {
  return (
    <section className="overflow-auto">
      <Title title={title} more={more} />

      <div className="grid grid-cols-5 gap-x-6 aspect-h-1">
        {items.map((item) => (
          <SongItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
export default Section;
