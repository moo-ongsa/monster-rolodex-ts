import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ placheoder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placheoder}
    onChange={handleChange}
  />
);
