import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class Filter extends Component {
  state = {
    filterName: ["Genre", "Food"],
    genre: [
      { key: 1, text: "Italian", value: "Italian" },
      { key: 2, text: "Indian", value: "Indian" },
      { key: 3, text: "American", value: "American" },
      { key: 4, text: "MiddleEastern", value: "MiddleEastern" },
      { key: 5, text: "123", value: "MiddleEastesdfgsgerrn" },
      { key: 6, text: "1245", value: "MiddldgseEastern" },
      { key: 7, text: "adgre", value: "MiddsdfgsleEastern" },
      { key: 8, text: "ds", value: "MiddleEastern" },
      { key: 9, text: "MiddleEasdsftern", value: "MiddleEastern" },
      { key: 10, text: "MiddleEastedsrn", value: "MiddleEastern" },
      { key: 11, text: "MiddleEastedsssfrn", value: "MiddleEsdfastern" },
      { key: 12, text: "MiddleEastwereern", value: "MiddleEastern" },
      { key: 13, text: "MiddleEastersdfvn", value: "MiddleEdfastern" },
      { key: 14, text: "MwfdsviddleEastern", value: "MiddleEastern" },
      { key: 15, text: "MiddlecsdvEastern", value: "MiddleEasdfgstern" },
      { key: 16, text: "MiddleEastsdfsdfsern", value: "MiddlesdfsEastern" },
    ],
  };
  render() {
    return (
      <div>
        <Dropdown
          placeholder={this.state.filterName[0]}
          fluid
          multiple
          search
          selection
          options={this.state.genre}
        />
      </div>
    );
  }
}

export default Filter;
