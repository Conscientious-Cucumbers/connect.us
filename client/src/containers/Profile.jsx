import React from 'react';
import ProfileNotExists from '../components/ProfileNotExists.jsx';
import { Tabs, Tab } from 'react-bootstrap';
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

class Profile extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.getActiveProfile(this.props.username);
    this.props.getNewsLikes(this.props.username);
    this.props.getFollowing(this.props.username);
    this.props.getFollowers(this.props.username);
    this.props.getStatusLikes(this.props.username);
    this.props.getTimeline(this.props.username);
  }

  profileExists () {
    return Object.keys(this.props.activeProfile).length;
  }

  loading () {
    return <Loading />;
  }

  loaded () {
    if (!this.profileExists()) {
      return <ProfileNotExists />;
    } else {
      return (
        <div>
          <Header username={this.props.username} />
          <Tabs 
            className="profile-tabs" 
            defaultActiveKey={1} 
            id="uncontrolled-tab">
            <Tab eventKey={1} 
              title="Timeline">
              <br />
              <Timeline profileRoute={this.props.username} />
            </Tab>
            <Tab eventKey={2} title="About">
              <br />
              <AboutUser />
            </Tab>
            <Tab eventKey={3} title="Liked News">
              <br />
              <NewsLikes />
            </Tab>
            <Tab eventKey={4} title="Liked Status">
              <br />
              <StatusLikes />
            </Tab>
            <Tab eventKey={5} title="Followers">
              <br />
              <Followers />
            </Tab>
            <Tab eventKey={6} title="Following">
              <br />
              <Following />
            </Tab>
          </Tabs>
        </div>
      );
    }
  }

  render () {
    return (
        <div className="container">
          {
            !!this.props.activeProfile
            ?
            this.loaded()
            :
            this.loading()
          }
        </div>
    );
  }
};

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
    getFollowing: actions.getFollowing,    // Added!
    getFollowers: actions.getFollowers,
    getTimeline: actions.getTimeline,
    getStatusLikes: actions.getStatusLikes
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);