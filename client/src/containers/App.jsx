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
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      formValue: ''
    };
  }

  handleFormChange(event, newValue) {
    this.setState({
      formValue: newValue
    });
  }

  componentDidMount () {
    this.props.getCurrentUser();
    this.props.getNotifications();
  }

  submitSignUp(e) {
    e && e.preventDefault && e.preventDefault();
    this.props.finishSignup({ username: this.state.formValue });
  }

  signUpModal () {
    const actions = [
      <FlatButton
        label="Submit"
        disabled={!this.state.formValue}
        className="submit-signup-btn"
        onTouchTap={this.submitSignUp.bind(this)}
      />
    ];

    return (
      <Dialog
        title={<h3 style={{color: '#FD533E'}}>Sign Up</h3>}
        actions={actions}
        modal={true}
        open={!!this.props.signupOpen}
      >
      <form onSubmit={this.submitSignUp.bind(this)}>
        <TextField
          floatingLabelText="Enter a username"
          onChange={this.handleFormChange.bind(this)}
          underlineFocusStyle={{borderColor: '#FD533E'}}
          floatingLabelFocusStyle={{color: '#FD533E'}}
          errorText={this.props.signupOpen && this.props.signupOpen.errorType ? this.props.signupOpen.errorType : ''}
          />
      </form>
      </Dialog>
    );
    // return (
    //   <Modal
    //     show={this.props.signupOpen}
    //     onHide={() => {}}
    //     bsSize="large">
    //     <Modal.Header>
    //       <h3 style={{color: '#EF6C00'}}>Sign Up</h3>
    //     </Modal.Header>
    //     <Form id="signupNewUserForm" onSubmit={this.submitSignUp.bind(this)}>
    //       <Modal.Body>
    //         <FieldGroup
    //           id="username"
    //           type="text"
    //           label="Username"
    //           name="username"
    //           placeholder="Enter a username"
    //           onChange={(e) => this.handleFormChange(e.target.name, e.target.value)}
    //           required/>
    //       </Modal.Body>
    //       <Modal.Footer>
    //         <Button
    //           bsStyle="primary"
    //           type="submit">
    //         Submit
    //         </Button>
    //       </Modal.Footer>
    //     </Form>
    //   </Modal>
    // );
  }

  render () {
    return (
      <Router history={browserHistory}>
        <div className="app-container">

          <NavBar />

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
          {this.signUpModal()}
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
