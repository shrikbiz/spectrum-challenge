import React, { useState } from "react";
import { Icon, Button } from "semantic-ui-react";

const SearchBar = ({ onSearch }) => {
  const [searchData, setSearchData] = useState("");
  let handleSearchBar = ({ target }) => {
    let { value } = target;
    handleTextBox(value);
  };

  let handleTextBox = (text) => {
    setSearchData(text);
    onSearch(text);
  };

  let onClose = () => {
    console.log("object");
    if (searchData) handleTextBox("");
  };

  return (
    <>
      <div className="width-100">
        <div className="ui icon input fluid">
          <input
            type="text"
            onChange={(event) => handleSearchBar(event)}
            placeholder="Search..."
            value={searchData}
          />
          {searchData ? (
            <Button icon onClick={onClose} color="teal">
              <Icon name="close" />
            </Button>
          ) : (
            <Icon color="grey" name="search" />
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
