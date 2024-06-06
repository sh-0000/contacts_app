import { useState } from "react";
import React from "react";

const Searchbar = ({ setQuery }) => {
  return (
    <input className="searchbar" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
  );
};

export default Searchbar;
