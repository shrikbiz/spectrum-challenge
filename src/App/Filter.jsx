import React from "react";
import { Dropdown } from "semantic-ui-react";

const Filter = ({ list, filterName, onFilterSelect }) => {
  const onSelect = (value) => {
    onFilterSelect(value);
  };

  return (
    <div>
      <label>{filterName}</label>
      <Dropdown
        placeholder={`Select ${filterName.toLowerCase()}`}
        fluid
        multiple
        search
        selection
        onChange={(e, { value }) => onSelect(value)}
        options={list}
      />
    </div>
  );
};

export default Filter;
