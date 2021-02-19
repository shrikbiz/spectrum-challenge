import React, { useState } from "react";
import { Icon, Container, Grid, Button, Divider } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

const FilterBar = () => {
  const [isFilter, setFilter] = useState(false);
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
                <Filter />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                {/* state */}
                <Filter />
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
