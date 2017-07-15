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
        <Row>
          <Col md={2}>
            <img src={this.props.user.profile_picture} width="300px"/>
          </Col>
          <Col md={6}>
            <h2>{this.props.user.display_name}</h2>
          </Col>
        </Row>
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