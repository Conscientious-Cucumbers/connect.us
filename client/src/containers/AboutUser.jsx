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
        <p>{this.props.user.username}</p>
        <h7><b>Email</b></h7>
        <p>{this.props.user.email}</p>
        <h7><b>First Name</b></h7>
        <p>{this.props.user.first_name}</p>
        <h7><b>Last Name</b></h7>
        <p>{this.props.user.last_name}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(AboutUser);