import React from 'react';
import { FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';

class AboutUser extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="about-user">
        <h6>CONTACT INFORMATION</h6>
        <hr className="contact-info-hr"/>
        <h7><b>Username</b></h7>
        <p>{this.props.active.username}</p>
        <h7><b>Email</b></h7>
        <p>{this.props.active.email}</p>
        <h7><b>First Name</b></h7>
        <p>{this.props.active.first}</p>
        <h7><b>Last Name</b></h7>
        <p>{this.props.active.last}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    active: state.activeProfile
  };
};

export default connect(mapStateToProps)(AboutUser);
