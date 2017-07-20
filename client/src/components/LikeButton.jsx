import React from 'react';
import { Button } from 'react-bootstrap';

const LikeButton = (props) => (
  <Button
    className="like-button"
    ><i 
    className={"fa " + (props.isLiked ? "fa-heart" : "fa-heart-o")} 
    aria-hidden="true"></i>
  </Button>
);

export default LikeButton;