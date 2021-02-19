import React, { Component } from "react";
import { Input } from "semantic-ui-react";
class SearchBar extends Component {
  state = {};
  render() {
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
  }
}

export default SearchBar;
