import React from 'react';
// import { MenuItem } from 'react-bootstrap';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import { LinkContainer } from 'react-router-bootstrap';

const NotificationItem = (props) => (
  <MenuItem
    className={props.seen ? 'seen-notification' : 'unseen-notification'}
    leftIcon={<Avatar src={props.notification.profile_picture || 'http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg'} />}
    href={'/' + props.notification.username}>
    {props.notification.first} {props.notification.last} is now following you
  </MenuItem>
);


export default NotificationItem;
