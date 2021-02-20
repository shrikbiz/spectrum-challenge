import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

const Filter = ({ list, filterName, onFilterSelect }) => {
  return (
    <div>
      <label>{filterName}</label>
      <Dropdown
        placeholder={`Select ${filterName.toLowerCase()}`}
        fluid
        multiple
        search
        selection
        onChange={(e, { value }) => onFilterSelect(value)}
        options={list}
      />
    </div>
  );
};

export default Filter;
