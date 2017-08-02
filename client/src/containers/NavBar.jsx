import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
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
import CloseIcon from 'material-ui/svg-icons/Navigation/close';


class NavBar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      searchInput: '',
      xsSearchShowing: false
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

  toggleSearchBarShowing() {
    this.setState((prevState) => {
      return {
        xsSearchShowing: !prevState.xsSearchShowing
      };
    });
  }

  iconElementLeft () {
    return (
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
    );
  }

  render () {
    // iconElementLeft={this.iconElementLeft()}
    return (
      <div>
        <AppBar title={this.iconElementLeft()}
        style={{position: 'fixed', backgroundColor: 'rgb(18,30,36)', top: '0px', height: '65px'}}
        iconElementLeft={
          <MediaQuery maxWidth={680}>
            <IconButton
              onTouchTap={this.toggleSearchBarShowing.bind(this)}
              tooltip="Search">
              {
                this.state.xsSearchShowing
                ?
                  <CloseIcon color={'white'}/>
                :
                  <SearchIcon color={'white'}/>
              }
            </IconButton>
            {
              this.state.xsSearchShowing
              ?
              <div className="search-bar-xs">
                <SearchBar
                  type='text'
                  className="search-bar-text"
                  method="GET"
                  onRequestSearch={this.onSearch.bind(this)}
                  onChange={this.setSearchInput.bind(this)} />
              </div>
              :
              null
            }
          </MediaQuery>
        }>
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

          <MediaQuery minWidth={this.state.xsSearchShowing ? 680 : 0}>
            <div className="navbar-home">
              <IconButton href="/" tooltip="Home">
                <ActionHome color={'white'}/>
              </IconButton>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={this.state.xsSearchShowing ? 680 : 0}>
            <div className="navbar-profile">
              <IconButton href={`/${this.props.user ? this.props.user.username : '/'}`} tooltip="Profile" >
                <UserIcon color={'white'} />
              </IconButton>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={this.state.xsSearchShowing ? 680 : 0}>
            <NotificationList />
          </MediaQuery>
          <MediaQuery minWidth={this.state.xsSearchShowing ? 680 : 0}>
            <IconMenu
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              iconButtonElement={
                <IconButton className="navbar-settings" tooltip="Settings">
                  <SettingsIcon color={'white'}/>
                </IconButton>
              }>
              <LinkContainer to='/settings'><MI primaryText="Settings" /></LinkContainer>
              <LinkContainer to='/about'><MI primaryText="About" /></LinkContainer>
              <MI primaryText="Log Out" href="/logout" />
            </IconMenu>
          </MediaQuery>

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
