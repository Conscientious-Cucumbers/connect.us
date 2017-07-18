import React from 'react';
import browserHistory from 'react-router';
import { 
  BrowserRouter as Router,
  Route, Switch } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Home from '../components/Home.jsx';
import Profile from './Profile.jsx';
import Settings from '../components/Settings.jsx';
import About from '../components/About.jsx';
import { Grid, Row, Col } from 'react-bootstrap';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/';
import axios from 'axios';

// <meta name="viewport" content="width=device-width, initial-scale=1" />

class App extends React.Component {
  constructor (props) {
    super(props);
    this.initSocket();
  }

  componentDidMount () {
    return this.getCurrentUser()
    .then(() => {
      this.addEventListeners();
    })
    .then(() => {
      this.initializeFeed();
    });
  }

  getCurrentUser () {
    return axios.get('/user/info')
    .then((res) => {
      console.log(res.data);
      this.props.setCurrentUser(res.data);
    })
    .catch((err) => {
      console.error('Error loading profile: ', err);
    });
  }

  initSocket () {
    this.socket = io();
  }

  addEventListeners () {
    this.socket.on('news', (data) => this.props.refreshNews(data));
    this.socket.on('res user info', (data) => this.props.setActiveProfile(data));
    // this.socket.on('res news likes');
    // this.socket.on('res status likes');
    this.socket.on('res statuses', (data) => this.props.setStatusFeed(data));
  }

  initializeFeed () {
    this.socket.emit('get news');
  }

  render () {
    return (
      <Router history={browserHistory}>
        <div className="app-container">
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <div className="navbar-container">
            <NavBar />
          </div>
          <div className='body-container'>
            <Switch>
              <Route exact path="/" component={() => <Home />}/>
              <Route path="/settings" component={() => <Settings />}/>
              <Route path="/about" component={() => <About />}/>
              <Route path="/:username" component={({match}) => {
                  this.socket.emit('get user info', { username: match.params.username });
                  return <Profile username={match.params.username}/>;
              }}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    refreshNews: actions.refreshNews,
    setActiveProfile: actions.setActiveProfile,
    setStatusFeed: actions.setStatusFeed,
    setCurrentUser: actions.setCurrentUser
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);