import React from 'react';

import { connect } from 'react-redux';
import Loading from '../components/Loading.jsx';
import FollowEntry from './FollowEntry.jsx';
import {List} from 'material-ui/List';

const Followers = (props) => (
  <List>
    {
      props.followers
        ?
        props.followers.map((follows) => {
          return <FollowEntry key={follows.id} follows={follows}/>;
        })
        :
        <Loading />
    }
  </List>
);

const mapStateToProps = (state) => {
  return {
    followers: state.followers
  };
};


// export default Followers;
export default connect(mapStateToProps)(Followers);
