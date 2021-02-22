import React, { useState } from "react";
import { Icon, Grid, Button, Divider } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import { States } from "../helpers/usState";

const FilterBox = ({
  genreList,
  onSearchBar,
  onGenreFilter,
  onStateFilter,
}) => {
  const [isFilter, setFilter] = useState(false);
  const selectedGenre = (value) => {
    onGenreFilter(value);
  };
  const selectedStates = (value) => {
    onStateFilter(value);
  };
  const handleSearch = (value) => {
    onSearchBar(value);
  };
  return (
    <>
      <Grid className="width-100" stackable>
        <Grid.Row>
          <Grid.Column width={14}>
            {/* Search */}
            <SearchBar onSearch={handleSearch} />
            <span>Press enter to Search</span>
          </Grid.Column>
          <Grid.Column width={2}>
            {/* Filter On|Off Button */}
            <Button
              icon
              color={isFilter ? "grey" : "black"}
              onClick={() => setFilter(!isFilter)}
            >
              <Icon name="filter" />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {isFilter ? (
        <>
          <Divider />
          <Grid className="width-100" stackable>
            <Grid.Row>
              <Grid.Column>
                {/* Genre */}
                <Filter
                  list={genreList}
                  filterName="Genre"
                  onFilterSelect={selectedGenre}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                {/* state */}
                <Filter
                  list={States}
                  filterName="State"
                  onFilterSelect={selectedStates}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default FilterBox;
