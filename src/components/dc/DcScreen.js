import React from "react";
import { HeroList } from "../../components/heros/HeroList";

export const DcScreen = () => {
  return (
    <div className="container">
      <HeroList publisher="DC Comics" />
    </div>
  );
};
