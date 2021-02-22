import React, { Component, Fragment } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import FrontPage from "./Components/FrontPage";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Route exact path="/" component={FrontPage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <Switch key={this.props.location.key}>
                <Route path="/home" component={HomePage} />
              </Switch>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
