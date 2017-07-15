import React from 'react';
import browserHistory from 'react-router';
import { 
  BrowserRouter as Router,
  Route} from 'react-router-dom';
import NavBar from './NavBar.jsx'
import Home from './Home.jsx';
import Profile from '../containers/Profile.jsx';
import Settings from './Settings.jsx';
import About from './About.jsx'

// <meta name="viewport" content="width=device-width, initial-scale=1" />

const App = () => (
  <Router history={browserHistory}>
    <div className="app-container">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="navbar-container">
        <NavBar />
      </div>
      <div className='body-container'>
        <Route exact path="/" component={() => <Home />}/>
        <Route path="/settings" component={() => <Settings />}/>
        <Route path="/about" component={() => <About />}/>
        <Route path="/profile/:username" component={({match}) => {
            return <Profile username={match.params.username}/>;
        }}/>
      </div>
    </div>
  </Router>
);

export default App;