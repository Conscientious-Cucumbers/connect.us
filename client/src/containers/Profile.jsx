import React from 'react';
import ProfileNotExists from '../components/ProfileNotExists.jsx';
import {Tabs, Tab} from 'material-ui/Tabs';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
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

class Profile extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      slideIndex: 0
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

  webView () {
    return (
      <div>

        <Tabs
          className="profile-tabs"
          onChange={this.handleTabChange.bind(this)}
          value={this.state.slideIndex}>
          <Tab style={{backgroundColor: '#CD3E38'}} label="Timeline" value={0} />
          <Tab style={{backgroundColor: '#CD3E38'}} label="About" value={1} />
          <Tab style={{backgroundColor: '#CD3E38'}} label="Liked News" value={2} />
          <Tab style={{backgroundColor: '#CD3E38'}} label="Liked Status" value={3} />
          <Tab style={{backgroundColor: '#CD3E38'}} label="Followers" value={4} />
          <Tab style={{backgroundColor: '#CD3E38'}} label="Following" value={5} />
        </Tabs>

        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleTabChange.bind(this)}>

          <div className="profile-tab">
            <Timeline profileRoute={this.props.username} />
          </div>

          <div className="profile-tab">
            <AboutUser />
          </div>

          <div className="profile-tab">
            <NewsLikes />
          </div>

          <div className="profile-tab">
            <StatusLikes />
          </div>

          <div className="profile-tab">
            <Followers />
          </div>

          <div className="profile-tab">
            <Following />
          </div>

        </SwipeableViews>
      </div>
    );
  }

  mobileView () {
    const recentsIcon = <FontIcon></FontIcon>;
    const favoritesIcon = <FontIcon></FontIcon>;
    const nearbyIcon = <FontIcon></FontIcon>;
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={0}>
          <BottomNavigationItem
            label="Recents"
            icon={recentsIcon}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={favoritesIcon}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
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
            {this.webView()}
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
