import React from 'react';
import { PanelGroup, Row } from 'react-bootstrap';
import Status from './Status.jsx';
import { connect } from 'react-redux';
import StatusTextArea from './StatusTextArea.jsx';
import Loading from '../components/Loading.jsx';

class Timeline extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    if (!this.props.user) {
      return <Loading />;
    }

    return (
      <PanelGroup>
        {this.props.profileRoute === this.props.user.username
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
    user: state.user,
    statusFeed: state.statusFeed
  };
};

export default connect(mapStateToProps)(Timeline);