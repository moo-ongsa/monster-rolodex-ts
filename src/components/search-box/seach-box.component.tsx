import { ChangeEventHandler } from "react";

import "./search-box.styles.css";

interface ISearchBoxProps {
  placheoder?: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBox = ({ placheoder, handleChange }: ISearchBoxProps) => (
  <input
    className="search"
    type="search"
    placeholder={placheoder}
    onChange={handleChange}
  />
);
