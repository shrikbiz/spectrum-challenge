import React, { Component, Fragment } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import FrontPage from "./FrontPage";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import axios from "axios";

class App extends Component {
  state = { apiData: [] };
  async componentDidMount() {
    let resp;
    try {
      resp = await axios.get(
        "https://code-challenge.spectrumtoolbox.com/api/restaurants",
        {
          headers: { authorization: "Api-Key q3MNxtfep8Gt" },
        }
      );
    } catch (err) {
      console.log(err);
    }
    console.log(
      "🚀 ~ file: HomePage.jsx ~ line 25 ~ HomePage ~ componentDidMount ~ resp",
      resp
    );

    this.setState({ apiData: resp.data });
  }
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
