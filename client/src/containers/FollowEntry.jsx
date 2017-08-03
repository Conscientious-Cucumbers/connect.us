import React from 'react';
import { Panel } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

const FollowEntry = (props) => {

  return (
    <div className="follow-entry">
      <a href={`/${props.follows.username}`}>
        <ListItem
          primaryText=
          {
            props.follows.first && props.follows.last
            ?
            props.follows.first + ' ' + props.follows.last
            :
            props.follows.display
          }
          leftAvatar={<Avatar src={props.follows.profile_picture || 'http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg'} />}
        />
      </a>
    </div>
  );
};

export default FollowEntry;
