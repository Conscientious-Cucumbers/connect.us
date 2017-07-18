import React from 'react';
import { PanelGroup, Row } from 'react-bootstrap';
import Status from './Status.jsx';
import { connect } from 'react-redux';
import StatusTextArea from './StatusTextArea.jsx';

class Timeline extends React.Component {

  render () {
    return (
      <PanelGroup>
        {this.props.profileRoute === this.props.username
          ?
        <StatusTextArea />
          :
          null
        }
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
  return {
    username: state.user.username,
    statusFeed: state.statusFeed
  };
};

export default connect(mapStateToProps)(Timeline);