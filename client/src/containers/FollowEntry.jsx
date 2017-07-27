import React from 'react';
import { Panel } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

const FollowEntry = (props) => {

  return (
    <a href={`/${props.follows.username}`}>
      <ListItem
          primaryText={props.follows.display || props.follows.first + ' ' + props.follows.last}
          leftAvatar={<Avatar src={props.follows.profile_picture || "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"} />}
        />
    </a>
  );
};

export default FollowEntry;