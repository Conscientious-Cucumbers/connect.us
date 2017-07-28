import React from 'react';
import { MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NotificationItem = (props) => (
  <MenuItem href={'/' + props.notification.username} eventKey={props.key}>
    {props.notification.first} {props.notification.last} is now following you
  </MenuItem>
);


export default NotificationItem;