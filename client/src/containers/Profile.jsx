import React from 'react';
import ProfileNotExists from '../components/ProfileNotExists.jsx';
import {Tabs, Tab} from 'material-ui/Tabs';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Header.jsx';
import Timeline from './Timeline.jsx';
import AboutUser from './AboutUser.jsx';
import NewsLikes from './NewsLikes.jsx';
import actions from '../actions';
import Loading from '../components/Loading.jsx';
import StatusLikes from './StatusLikes.jsx';
import Followers from './Followers.jsx';
import Following from './Following.jsx';
import SwipeableViews from 'react-swipeable-views';

// ICONS:
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import ConnectionIcon from 'material-ui/svg-icons/social/people';
import TimelineIcon from 'material-ui/svg-icons/av/library-books';
import AboutIcon from 'material-ui/svg-icons/action/account-box';

class Profile extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      slideIndex: 0,
      favoriteIndex: 0,
      connectionIndex: 0
    };
  }

  componentDidMount () {
    this.props.getActiveProfile(this.props.username);
  }

  profileExists () {
    return Object.keys(this.props.activeProfile).length;
  }

  loading () {
    return <Loading />;
  }

  handleTabChange (value) {
    this.setState({
      slideIndex: value
    });
  }

  handleNestedTabChange(value, type) {
    switch (type) {
    case 'FAVORITES':
      this.setState({
        favoriteIndex: value
      });
      break;

    case 'CONNECTIONS':
      this.setState({
        connectionIndex: value
      });
    }
  }

  webView () {
    return (
      <div>

        <Tabs
          className="profile-tabs"
          onChange={this.handleTabChange.bind(this)}
          value={this.state.slideIndex}>
          <Tab style={{backgroundColor: 'rgb(58,70,76)'}} label="Timeline" value={0} />
          <Tab style={{backgroundColor: 'rgb(58,70,76)'}} label="About" value={1} />
          <Tab style={{backgroundColor: 'rgb(58,70,76)'}} label="Liked News" value={2} />
          <Tab style={{backgroundColor: 'rgb(58,70,76)'}} label="Liked Status" value={3} />
          <Tab style={{backgroundColor: 'rgb(58,70,76)'}} label="Followers" value={4} />
          <Tab style={{backgroundColor: 'rgb(58,70,76)'}} label="Following" value={5} />
        </Tabs>

      </div>
    );
  }

  mobileView () {

    return (
      <Paper
        className="bottom-navigation-container"
        zDepth={1}>
        <BottomNavigation
          className='bottom-navigation-tabs'
          style={{
            color: 'white !important'
          }}
          selectedIndex={this.state.slideIndex}>
          <BottomNavigationItem
            label="Timeline"
            className={this.state.slideIndex === 0 ? 'bottom-navigation-item-active' : 'bottom-navigation-item'}
            icon={<TimelineIcon color={this.state.slideIndex === 0 ? '#FD583E' : 'white'} />}
            onTouchTap={() => this.handleTabChange(0)}
          />
          <BottomNavigationItem
            label="About"
            className={this.state.slideIndex === 1 ? 'bottom-navigation-item-active' : 'bottom-navigation-item'}
            icon={<AboutIcon color={this.state.slideIndex === 1 ? '#FD583E' : 'white'}/>}
            onTouchTap={() => this.handleTabChange(1)}
          />
          <BottomNavigationItem
            label="Favorites"
            className={this.state.slideIndex === 2 ? 'bottom-navigation-item-active' : 'bottom-navigation-item'}
            icon={<FavoriteIcon color={this.state.slideIndex === 2 ? '#FD583E' : 'white'}/>}
            onTouchTap={() => this.handleTabChange(2)}
          />
          <BottomNavigationItem
            label="Connections"
            className={this.state.slideIndex === 3 ? 'bottom-navigation-item-active' : 'bottom-navigation-item'}
            icon={<ConnectionIcon color={this.state.slideIndex === 3 ? '#FD583E' : 'white'} />}
            onTouchTap={() => this.handleTabChange(3)}
          />
        </BottomNavigation>
      </Paper>
    );
  }

  loaded () {
    if (!this.profileExists()) {
      return <ProfileNotExists />;
    } else {
      return (
        <div>
          <Header username={this.props.username} />
          <br />
          <div>
            {this.mobileView()}
            <SwipeableViews
              index={this.state.slideIndex}
              onChangeIndex={this.handleTabChange.bind(this)}>

              <div className="profile-tab">
                <Timeline profileRoute={this.props.username} />
              </div>

              <div className="about-user-tab">
                <AboutUser />
              </div>

              <div className="nested-tabs">
                <Tabs
                  className="favorite-tabs"
                  inkBarStyle={{
                    backgroundColor: '#FD453E',
                  }}
                  tabItemContainerStyle={{
                    backgroundColor: '#EEE',
                    color: '#FD453E'
                  }}
                  onChange={(v) => this.handleNestedTabChange(v, 'FAVORITES')}
                  value={this.state.favoriteIndex}>
                  <Tab
                    style={{
                      color: this.state.favoriteIndex === 1 ? 'rgb(58,70,76)' : '#FD453E'
                    }}
                    label="News"
                    value={0}>
                    <div className="favorite-tabs-container">
                      <NewsLikes />
                    </div>
                  </Tab>
                  <Tab
                    style={{
                      color: this.state.favoriteIndex === 0 ? 'rgb(58,70,76)' : '#FD453E'
                    }}
                    label="Status"
                    value={1}>
                    <div className="favorite-tabs-container">
                      <StatusLikes />
                    </div>
                  </Tab>
                </Tabs>
              </div>

              <div className="nested-tabs">
                  <Tabs
                    inkBarStyle={{
                      backgroundColor: '#FD453E',
                    }}
                    tabItemContainerStyle={{
                      backgroundColor: '#EEE',
                      color: '#FD453E'
                    }}
                    className="connection-tabs"
                    onChange={(v) => this.handleNestedTabChange(v, 'CONNECTIONS')}
                    value={this.state.connectionIndex}>
                    <Tab
                      style={{
                        color: this.state.connectionIndex === 1 ? 'rgb(58,70,76)' : '#FD453E'
                      }}
                      label="Followers"
                      value={0}>
                      <Followers />
                    </Tab>
                    <Tab
                      style={{
                        color: this.state.connectionIndex === 0 ? 'rgb(58,70,76)' : '#FD453E'
                      }}
                      label="Following"
                      value={1}>
                      <Following />
                    </Tab>
                  </Tabs>
              </div>

            </SwipeableViews>
          </div>
        </div>
      );
    }
  }

  render () {
    return (
      <div className="container">
        {
          !!this.props.activeProfile && !!this.props.user
            ?
            this.loaded()
            :
            this.loading()
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    activeProfile: state.activeProfile
  };
};



const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getActiveProfile: actions.getActiveProfile,
    getCurrentUser: actions.getCurrentUser,
    getNewsLikes: actions.getNewsLikes,
    getFollowing: actions.getFollowing,
    getFollowers: actions.getFollowers,
    getTimeline: actions.getTimeline,
    getStatusLikes: actions.getStatusLikes
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
