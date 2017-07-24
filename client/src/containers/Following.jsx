import React from 'react';

import { PanelGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import Loading from '../components/Loading.jsx';
import FollowEntry from './FollowEntry.jsx';


const Following = (props) => {

  console.log("******* props.following", props.following);

  return (
  // console.log("Following container is called!");

    <PanelGroup>
      {
        props.following
        ?
        props.following.map((follows, index) => {
          return <FollowEntry key={index} follows={follows}/>;
        }) 
        :
        <Loading />
      }
    </PanelGroup>
  );
};

const mapStateToProps = (state) => {
  return {
    following: state.following
  };
};


// export default Following;   
export default connect(mapStateToProps)(Following);