import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Paper from 'material-ui/Paper';
import FrownyFace from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';

const ProfileNotExists = (props) => (
  <Paper zDepth={5}
    className="user-does-not-exist">
    <FrownyFace className="frowny-face"/>
    <h1 className="profile-not-found">Profile Not Found</h1>
    <p className="profile-not-found-message">Page does not exist or may have been removed</p>
    <LinkContainer to="/" className="return-home-button">
      <Button>
          Return Home
      </Button>
    </LinkContainer>
  </Paper>
);

export default ProfileNotExists;
