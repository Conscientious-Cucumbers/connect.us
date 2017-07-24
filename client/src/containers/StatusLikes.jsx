import React from 'react';
import { PanelGroup } from 'react-bootstrap';
import Loading from '../components/Loading.jsx';
import { connect } from 'react-redux';
import Status from './Status.jsx';

const StatusLikes = (props) => (
  <PanelGroup>
    {
      props.statusLikes
      ?
      props.statusLikes.map((status, index) => {
        return (
          <Status key={index} status={status}/>
        ); 
      })
      :
      <Loading />
    }
  </PanelGroup>
);

const mapStateToProps = (state) => {
  return {
    statusLikes: state.statusLikes
  };
};

export default connect(mapStateToProps)(StatusLikes);