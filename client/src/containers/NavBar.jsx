import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { clearNotifications } from '../actions/notificationActions';
import { bindActionCreators } from 'redux';
//import Badge from 'material-ui/Badge';
import NotificationList from './NotificationList.jsx';
import {AppBar, Tabs, Tab, IconButton, NotificationsIcon, FlatButton, Badge, IconMenu, DropDownMenu, MenuItem as MI, SearcbBar } from 'material-ui';
import ActionHome from 'material-ui/svg-icons/action/home';
import SearchBar from 'material-ui-search-bar';
import MediaQuery from 'react-responsive';
import SearchIcon from 'material-ui/svg-icons/action/search';
import UserIcon from 'material-ui/svg-icons/social/person';
import SettingsIcon from 'material-ui/svg-icons/action/settings';


class NavBar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      searchInput: ''
    };
  }

  setSearchInput(value) {
    this.setState({
      searchInput: value
    });
  }

  onSearch () {
    if (this.state.searchInput) {
      window.location.pathname = `/${this.state.searchInput}`;
    }
  }

  iconElementLeft () {
    return (
<<<<<<< HEAD
      <Link to="/">
        <MediaQuery minWidth={500}>
          <div className="logo-image-container">
            <img className="logo-image" src="/assets/connecthub_logo.png" />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={500}>
          <div className="logo-image-container">
            <img className="logo-icon" src="/assets/connecthub_icon.png" />
          </div>
        </MediaQuery>
      </Link>
=======
      <SearchBar
        type='text'
        method="GET"
        onRequestSearch={`/${this.state.searchInput}`}
        onChange={this.setSearchInput.bind(this)}
        style={{positon: 'sticky'}}/>
>>>>>>> fixed linting errors
    );
  }

  render () {
    // iconElementLeft={this.iconElementLeft()}
    return (
      <div>

<<<<<<< HEAD
        <AppBar title={this.iconElementLeft()}
        style={{position: 'fixed', backgroundColor: 'rgb(18,30,36)', top: '0px', height: '65px'}}
        iconElementLeft={
          <MediaQuery maxWidth={680}>
            <IconButton tooltip="Search">
              <SearchIcon color={'white'}/>
            </IconButton>
          </MediaQuery>
        }
        >
          <MediaQuery minWidth={680}>
            <div className="search-bar">
              <SearchBar
                type='text'
                className="search-bar-text"
                method="GET"
                onRequestSearch={this.onSearch.bind(this)}
                onChange={this.setSearchInput.bind(this)} />
            </div>
          </MediaQuery>

          <div className="navbar-home">
            <IconButton href="/" tooltip="Home">
              <ActionHome color={'white'}/>
            </IconButton>
          </div>

          <div className="navbar-profile">
            <IconButton href={`/${this.props.user ? this.props.user.username : '/'}`} tooltip="Profile" >
              <UserIcon color={'white'} />
            </IconButton>
          </div>

          <NotificationList />

          <IconMenu
            iconButtonElement={
                <IconButton className="navbar-settings" tooltip="Settings">
                  <SettingsIcon color={'white'}/>
                </IconButton>
            }>
            <LinkContainer to='/settings'><MI primaryText="Settings" /></LinkContainer>
            <LinkContainer to='/about'><MI primaryText="About" /></LinkContainer>
            <MI primaryText="Log Out" href="/logout" />
=======
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
>>>>>>> fixed linting errors
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
