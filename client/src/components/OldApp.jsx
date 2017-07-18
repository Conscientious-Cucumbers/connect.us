import React from 'react';
import browserHistory from 'react-router';
import { 
  BrowserRouter as Router,
  Route, Switch } from 'react-router-dom';
import NavBar from '../containers/NavBar.jsx';
import Home from './Home.jsx';
import Profile from '../containers/Profile.jsx';
import Settings from './Settings.jsx';
import About from './About.jsx';
import { Grid, Row, Col } from 'react-bootstrap';

// <meta name="viewport" content="width=device-width, initial-scale=1" />

const App = () => (
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

export default App;