import React, { useState } from "react";
import { Input } from "semantic-ui-react";
const SearchBar = () => {
  return (
    <>
      <Input
        placeholder="Search..."
        fluid
        icon="search"
        className="width-100"
      />
    </>
  );
};

export default SearchBar;
