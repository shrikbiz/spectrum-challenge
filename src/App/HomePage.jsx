import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Input, Container } from "semantic-ui-react";

class HomePage extends Component {
  render() {
    return (
      <div className="masthead">
        <Container>
          <Input placeholder="Search..." />
        </Container>
      </div>
    );
  }
}

export default withRouter(HomePage);
