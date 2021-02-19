import React from "react";
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";

const FrontPage = ({ history }) => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          Spectrum Challenges
        </Header>
        <Button size="huge" inverted onClick={() => history.push("/home")}>
          Get started
          <Icon name="right arrow" color="black" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default FrontPage;
