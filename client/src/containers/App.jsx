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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import axios from 'axios';

// <meta name="viewport" content="width=device-width, initial-scale=1" />

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.getCurrentUser();
    this.props.getNewsFeed();
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
  console.log('user: ', state.user);
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCurrentUser: actions.getCurrentUser,
    getNewsFeed: actions.getNewsFeed
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);