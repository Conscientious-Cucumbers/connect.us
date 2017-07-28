import React from 'react';
import { Button } from 'react-bootstrap';
import IconButton from 'material-ui/IconButton';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Favorite from 'material-ui/svg-icons/action/favorite';

const LikeButton = (props) => {
  if (props.isLiked) {
    return (
      <IconButton
        onTouchTap={props.onTouchTap}
        className={props.className}>
        <Favorite color="red"/>
      </IconButton>
    );
  } else {
    return (
      <IconButton
        onTouchTap={props.onTouchTap}
        className={props.className}>
        <FavoriteBorder color="red"/>
      </IconButton>
    );
  }
};

export default LikeButton;
