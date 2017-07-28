import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loading = (props) => (
  <div className={props.className || 'loading'}>
    <CircularProgress color="black" />
  </div>
);

export default Loading;