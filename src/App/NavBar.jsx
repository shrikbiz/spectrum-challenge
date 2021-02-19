import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";

//Navigation Bar
const NavBar = () => {
  return (
    <>
      <Menu inverted fixed="top">
        {/* Redirects to FrontPage */}
        <Menu.Item as={NavLink} exact to="/" header>
          <b>Spectrum Challenge</b>
        </Menu.Item>
        {/* Redirects to HomePage */}
        <Menu.Item as={NavLink} exact to="/home" name="Home Page" />
      </Menu>
    </>
  );
};

export default withRouter(NavBar);
