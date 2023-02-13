import React from "react";
import Section from "../section";
import Songs from "../data/songs";
export default function home() {
  return (
    <div className="grid gap-y-8 ">
      <Section title={"Recently played"} more="/linkss" items={Songs}></Section>
      <Section title={"Show to try"} more="/linkss" items={Songs}></Section>
      <Section title={"Made for KATHAR"} more="/linkss" items={Songs}></Section>
    </div>
  );
}
