import React, { Component, Fragment } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import { Button } from "semantic-ui-react";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Button primary>Primary</Button>

        {/* <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <Switch key={this.props.location.key}>
                <Route path="/events" component={Home} />
              </Switch>
            </Fragment>
          )}
        /> */}
      </>
    );
  }
}

export default withRouter(App);
