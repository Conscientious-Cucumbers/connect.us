import React from 'react';

import { PanelGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import Loading from '../components/Loading.jsx';
import FollowEntry from './FollowEntry.jsx';

const Followers = (props) => (
<PanelGroup>
    {
      props.followers
      ?
      props.followers.map((follows, index) => {
        return <FollowEntry key={index} follows={follows}/>;
      }) 
      :
      <Loading />
    }
  </PanelGroup>
);

const mapStateToProps = (state) => {
  return {
    followers: state.followers
  };
};


// export default Followers;
export default connect(mapStateToProps)(Followers);