import React from "react";
import { Container, Menu, Grid } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";

//Navigation Bar
const NavBar = () => {
  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          {/* Redirects to FrontPage */}
          <Menu.Item as={NavLink} exact to="/" header>
            <b>Spectrum Challenge</b>
          </Menu.Item>

          {/* Redirects to HomePage */}
          <Menu.Item as={NavLink} exact to="/home" name="Home Page" />

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
    </>
  );
};

export default withRouter(NavBar);
