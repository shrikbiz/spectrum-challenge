import React, { Component, Fragment } from "react";
import { Container, Menu, Grid } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <Menu inverted fixed="top">
          <Container>
            <Grid style={{ width: "100%" }}>
              <Grid.Column floated="left" width={3}>
                <Menu.Item as={NavLink} exact to="/" header>
                  <b>Spectrum Challenge</b>
                </Menu.Item>
              </Grid.Column>
              <Grid.Column floated="right" width={2}>
                <Menu.Item as={NavLink} exact to="/home" name="Home Page" />
              </Grid.Column>
            </Grid>
            {/* <Menu.Item as={NavLink} exact to="/people" name="People" />
          <Menu.Item as={NavLink} to="/test" name="Test" />
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item> */}
          </Container>
        </Menu>
      </Fragment>
    );
  }
}

export default withRouter(NavBar);
