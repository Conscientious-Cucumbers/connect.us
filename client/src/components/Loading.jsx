import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loading = (props) => (
  <div className={props.className || 'loading'}>
    <CircularProgress color="rgb(18,30,36)" />
  </div>
);

export default Loading;
