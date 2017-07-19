import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';


class Header extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
          <img 
            className="profile-picture"
            src={this.props.user.profile_picture || "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"} />
          <h2 className="profile-name">
            {this.props.user.display_name || `${this.props.user.first} ${this.props.user.last}`}
          </h2>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Header);