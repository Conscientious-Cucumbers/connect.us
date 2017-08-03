import React from 'react';
import Status from './Status.jsx';
import { connect } from 'react-redux';
import StatusTextArea from './StatusTextArea.jsx';
import Loading from '../components/Loading.jsx';

class Timeline extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    if (!this.props.activeProfile || !this.props.user || !this.props.statusFeed) {
      return <Loading />;
    }

    return (
      <div>
        {this.props.profileRoute === this.props.user.username
          ?
          <StatusTextArea />
          :
          null
        }
        {
          this.props.statusFeed.map((status) => {
            return (
              <Status key={status.id} status={status} isTimeline/>
            );
          })
        }
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    activeProfile: state.activeProfile,
    statusFeed: state.statusFeed
  };
};

export default connect(mapStateToProps)(Timeline);
