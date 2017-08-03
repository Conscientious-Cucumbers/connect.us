import React from 'react';
import { FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

class AboutUser extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Paper
        zDepth={3}>
        <div className="about-user">
          <h6 style={{color: '#E65100'}}>CONTACT INFORMATION</h6>
          <h7><b>Username</b></h7>
          <p>{this.props.active.username}</p>
          <h7><b>Email</b></h7>
          <p>{this.props.active.email}</p>
          <h7><b>First Name</b></h7>
          <p>{this.props.active.first}</p>
          <h7><b>Last Name</b></h7>
          <p>{this.props.active.last}</p>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    active: state.activeProfile
  };
};

export default connect(mapStateToProps)(AboutUser);
