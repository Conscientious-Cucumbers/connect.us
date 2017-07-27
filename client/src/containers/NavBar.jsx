import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, 
         Nav, 
         NavItem, 
         NavDropdown, 
         MenuItem,
         FormGroup,
         FormControl,
         Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { clearNotifications } from '../actions/notificationActions';
import { bindActionCreators } from 'redux';
import Badge from 'material-ui/Badge';
import NotificationList from './NotificationList.jsx';

class NavBar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  setSearchInput(e) {
    this.setState({
      searchInput: e.target.value
    });
  }

  // notifications () {
  //   if (this.props.UnseenNotifications && this.props.UnseenNotifications.length) {
  //     return (
  //       <Badge
  //         className="notifications-badge"
  //         badgeStyle={{top: -9, right: -4, fontSize: 10, width: 18, height: 18}}
  //         badgeContent={this.props.UnseenNotifications.length}
  //         secondary>
  //         <i onClick={this.props.clearNotifications} className="fa fa-globe" aria-hidden="true"></i>
  //       </Badge>
  //     );
  //   } else {
  //     return (
  //       <i onClick={this.props.clearNotifications} className="fa fa-globe" aria-hidden="true"></i>
  //     );
  //   }
  // }

  render () {
    return (
      <Navbar fluid inverse fixedTop>
        <Navbar.Header>
          <LinkContainer to="/">
            <Navbar.Brand>
            ConnectHub.us
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <form method="GET" action={`/${this.state.searchInput}`}>
              <FormGroup>
                <FormControl onChange={this.setSearchInput.bind(this)} type="text" placeholder="Search for user" />
              </FormGroup>
              {' '}
              <Button className="fa fa-search" type="submit"></Button>
            </form>
          </Navbar.Form>
          <Nav pullRight>
            <LinkContainer to="/#">
              <NavItem eventKey={2}>
              <i className="fa fa-home" aria-hidden="true"></i>
              </NavItem>
            </LinkContainer>
            <NavItem eventKey={1} href={`/${this.props.user ? this.props.user.username : null}`}>
              <i className="fa fa-user" aria-hidden="true"></i>
            </NavItem>

            <NotificationList />
            
            <NavDropdown eventKey={4}
              title=""
              id="settings-nav-dropdown">
              <LinkContainer to="/about">
                <MenuItem eventKey={4.1}>
                  About{' '}
                  <i className="fa fa-question right" aria-hidden="true"></i>
                </MenuItem>
              </LinkContainer>
              <LinkContainer to="/settings">
                <MenuItem eventKey={4.2}>
                  Settings{' '}
                  <i className="fa fa-cog right" aria-hidden="true"></i>
                </MenuItem>
              </LinkContainer>
              <MenuItem divider />
              <MenuItem eventKey={4.3} href="/logout">Logout{' '}<i className="fa fa-sign-out right" aria-hidden="true"></i></MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    SeenNotifications: state.SeenNotifications,
    UnseenNotifications: state.UnseenNotifications
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clearNotifications: clearNotifications
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);