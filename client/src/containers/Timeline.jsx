import React from 'react';
import { PanelGroup, Row } from 'react-bootstrap';
import Status from './Status.jsx';
import { connect } from 'react-redux';

class Timeline extends React.Component {

  render () {
    return (
      <PanelGroup>
        {this.props.statusFeed.map((status, index) => {
          return (
            <Status key={index} status={status}/>
          ); 
        })}
      </PanelGroup>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    statusFeed: state.statusFeed
  };
};

export default connect(mapStateToProps)(Timeline);