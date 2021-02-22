import React from "react";
import { Icon } from "semantic-ui-react";

const SortingIcon = ({ sortedColumnData: sortingData, onSort }) => {
  let { sortedColumnData, columnName } = sortingData;
  let { isIncrement, sortedColumn } = sortedColumnData;
  let handleSorting = () => {
    onSort({ columnName, isIncrement });
  };
  return (
    <span onClick={handleSorting}>
      {sortedColumn === columnName ? (
        isIncrement ? (
          <Icon disabled name="sort descending" />
        ) : (
          <Icon link disabled name="sort ascending" />
        )
      ) : (
        <Icon link disabled name="sort alphabet down" />
      )}
    </span>
  );
};

export default SortingIcon;
