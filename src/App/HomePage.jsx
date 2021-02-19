import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Icon, Container, Grid, Button, Divider } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

const HomePage = () => {
  const [isFilter, setFilter] = useState(false);
  return (
    <div className="masthead">
      <Container>
        <Grid style={{ width: "100%" }}>
          <Grid.Row>
            <Grid.Column width={5}></Grid.Column>
            <Grid.Column width={6}>
              <SearchBar />
              <span>Press enter to Search</span>
            </Grid.Column>
            <Grid.Column width={5}>
              <Button icon onClick={() => setFilter(!isFilter)}>
                <Icon name="filter" />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {isFilter ? (
          <>
            <Divider />
            <Grid style={{ width: "100%" }}>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Filter />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Filter />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider />
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default withRouter(HomePage);
