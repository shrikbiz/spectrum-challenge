import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Icon, Container, Grid, Button, Divider } from "semantic-ui-react";
import RestaurantTable from "./RestaurantTable";
import FilterBar from "./FilterBar";

class HomePage extends Component {
  state = { isFilter: false };

  setFilter() {
    this.setState({ isFilter: !this.state.isFilter });
  }

  render() {
    return (
      <div className="masthead home-page">
        <Grid className="width-100" stackable>
          <Grid.Row>
            <Grid.Column width={4} className="right-border">
              <FilterBar />
            </Grid.Column>
            <Grid.Column width={12}>
              <RestaurantTable />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(HomePage);
