import React from 'react';
import {
  PageHeader,
  Jumbotron,
  Button
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProfileNotExists = (props) => (
  <Jumbotron className="jumbotron">
    <i className="fa fa-frown-o"></i>
    <h1>Profile Not Found</h1>
    <p>Page does not exist or may have been removed</p>
    <p>
      <LinkContainer to="/">
        <Button bsStyle="primary">
          Return Home
        </Button>
      </LinkContainer>
    </p>
  </Jumbotron>
);

export default ProfileNotExists;