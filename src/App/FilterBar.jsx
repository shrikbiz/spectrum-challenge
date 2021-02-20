import React, { useState } from "react";
import { Icon, Grid, Button, Divider } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

const FilterBar = ({ genreList }) => {
  const [isFilter, setFilter] = useState(false);
  function selectedGenre(value) {
    console.log(value);
  }
  function selectedStates(value) {
    console.log(value);
  }
  return (
    <>
      <Grid className="width-100" stackable>
        <Grid.Row>
          <Grid.Column width={14}>
            {/* Search */}
            <SearchBar />
            <span>Press enter to Search</span>
          </Grid.Column>
          <Grid.Column width={2}>
            {/* Filter On|Off Button */}
            <Button
              icon
              color={isFilter ? "grey" : "black"}
              onClick={() => setFilter(!isFilter)}>
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
                {console.log("in FilterBar", genreList)}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                {/* state */}
                <Filter
                  list={[
                    { key: 0, text: "Massachusetts", value: "massachusetts" },
                    { key: 1, text: "Ohio", value: "ohio" },
                    { key: 2, text: "Colorado", value: "colorado" },
                  ]}
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

export default FilterBar;
