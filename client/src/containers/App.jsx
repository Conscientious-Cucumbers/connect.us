import React from 'react';
import browserHistory from 'react-router';
import {
  BrowserRouter as Router,
  Route, Switch } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Home from '../components/Home.jsx';
import Profile from './Profile.jsx';
import Settings from './Settings.jsx';
import About from '../components/About.jsx';
import { Grid, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import FieldGroup from '../components/FieldGroup.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';

// <meta name="viewport" content="width=device-width, initial-scale=1" />

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      formValues: {}
    };
  }

  handleFormChange(key, value) {
    this.setState((prevState) => {
      return {
        formValues: Object.assign({}, prevState.formValues, {[key]: value})
      };
    });
  }

  componentDidMount () {
    this.props.getCurrentUser();
    this.props.getNotifications();
  }

  submitSignUp(e) {
    e.preventDefault();
    this.props.finishSignup(this.state.formValues);
  }

  signUpModal () {
    return (
      <Modal
        show={this.props.signupOpen}
        onHide={() => {}}
        bsSize="large">
        <Modal.Header>
          <h3 style={{color: '#EF6C00'}}>Sign Up</h3>
        </Modal.Header>
        <Form id="signupNewUserForm" onSubmit={this.submitSignUp.bind(this)}>
          <Modal.Body>
            <FieldGroup
              id="username"
              type="text"
              label="Username"
              name="username"
              placeholder="Enter a username"
              onChange={(e) => this.handleFormChange(e.target.name, e.target.value)}
              required/>
          </Modal.Body>
          <Modal.Footer>
            <Button
              bsStyle="primary"
              type="submit">
            Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }

  render () {
    return (
      <Router history={browserHistory}>
        <div className="app-container">

          <NavBar />

          <div className='body-container'>
            {this.signUpModal()}
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
  return {
    user: state.user,
    signupOpen: state.signupOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCurrentUser: actions.getCurrentUser,
    getNotifications: actions.getNotifications,
    finishSignup: actions.finishSignup
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
