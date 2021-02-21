import React from "react";
import { Input } from "semantic-ui-react";

const SearchBar = ({ onSearch }) => {
  let handleSearchBar = (data) => {
    onSearch(data.target.value);
  };

  return (
    <>
      <Input
        placeholder="Search..."
        fluid
        icon="search"
        className="width-100"
        onChange={(event) => handleSearchBar(event)}
      />
    </>
  );
};

export default SearchBar;
