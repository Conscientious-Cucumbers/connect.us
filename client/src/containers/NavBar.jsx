import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { clearNotifications } from '../actions/notificationActions';
import { bindActionCreators } from 'redux';
//import Badge from 'material-ui/Badge';
import NotificationList from './NotificationList.jsx';
import {AppBar, Tabs, Tab, IconButton, NotificationsIcon, FlatButton, Badge, IconMenu, DropDownMenu, MenuItem as MI, SearcbBar } from 'material-ui';
import ActionHome from 'material-ui/svg-icons/action/home';
import SearchBar from 'material-ui-search-bar';


class NavBar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      searchInput: ''
    };
    this.svg1 = 'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z';
    this.svg2 = 'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z';
  }

  setSearchInput(e) {
    this.setState({
      searchInput: e.target.value
    });
  }

  iconElementLeft () {
    return (
      <SearchBar
      type='text'
      method="GET"
      onRequestSearch={`/${this.state.searchInput}`}
      onChange={this.setSearchInput.bind(this)}
      style={{positon: 'sticky'}}/>
    );
  }

  render () {
    return (
      <div>

         <AppBar title={
              <LinkContainer to="/">
                <p >
                ConnectHub.us
                </p>
              </LinkContainer>
            }
            style={{position: 'fixed', backgroundColor: '#FF3E35', top: '0px', height: '60px'}}
            iconElementLeft={this.iconElementLeft()}
            >

            <LinkContainer to='/#'>
              <IconButton tooltip="Home">
                <ActionHome color={'18243D'}/>
              </IconButton>
            </LinkContainer>

            <IconButton href={`/${this.props.user ? this.props.user.username : null}`} tooltip="Profile" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill = "#18243D" viewBox="0 0 24 24">
                <path d={this.svg2}/>
              </svg>
            </IconButton>

            <NotificationList />

            <IconMenu iconButtonElement={<IconButton tooltip="Settings"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill = "#18243D" viewBox="0 0 24 24"><path d={this.svg1}/></svg> </IconButton>}>
              <LinkContainer to='/settings'><MI primaryText="Settings" /></LinkContainer>
              <LinkContainer to='/about'><MI primaryText="About" /></LinkContainer>
              <MI primaryText="Log Out" eventKey={4.3} href="/logout" />
            </IconMenu>
         </AppBar>

       </div>
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
