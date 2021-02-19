import React, { Component } from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        {/* <Container> */}
        <Menu.Item as={NavLink} exact to="/" header>
          <b>Spectrum Challenge</b>
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/events" name="Events" />
        <Menu.Item as={NavLink} exact to="/people" name="People" />
        <Menu.Item as={NavLink} to="/test" name="Test" />
        {/* <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item> */}
        {/* </Container> */}
      </Menu>
    );
  }
}

export default withRouter(NavBar);
