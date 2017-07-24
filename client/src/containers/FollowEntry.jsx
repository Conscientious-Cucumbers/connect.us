import React from 'react';
import { Panel } from 'react-bootstrap';



const FollowEntry = (props) => (
  <Panel>
    {props.follows.username}
  </Panel>

)

export default FollowEntry;