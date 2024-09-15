import React from "react";

import "./navigation.css";

import { Logo } from "./symbol";
import { Searchbar } from "./searchbar";
import { ProfileDesc } from "./profileDescription";

export const Navigation = () => {
  return (
    <div className="navigation-bar p-5 flex flex-row justify-between items-center">
      <Logo />
      <Searchbar />
      <ProfileDesc />
    </div>
  );
};
