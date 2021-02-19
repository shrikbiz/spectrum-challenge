import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

const Filter = () => {
  const filterName = ["Genre"];
  const genre = [
    { key: 1, text: "Italian", value: "Italian" },
    { key: 2, text: "Indian", value: "Indian" },
    { key: 3, text: "American", value: "American" },
    { key: 4, text: "MiddleEastern", value: "MiddleEastern" },
    { key: 5, text: "Mongolian", value: "Mongolian" },
    { key: 6, text: "Chinese", value: "Chinese" },
    { key: 7, text: "French", value: "French" },
    { key: 8, text: "Brazillian", value: "Brazillian" },
  ];
  const [selectedItem, setSelectedItem] = useState([]);

  return (
    <div>
      <label>{filterName[0]}</label>
      <Dropdown
        placeholder={`Select ${filterName[0]}`}
        fluid
        multiple
        search
        selection
        onChange={(e, { value }) => setSelectedItem(value)}
        options={genre}
      />
    </div>
  );
};

export default Filter;
