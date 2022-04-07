import React from "react";
import { HeroList } from "../../components/heros/HeroList";

export const MarvelScreen = () => {
  return (
    <div className="container">
      <h1>Marvel</h1>
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
