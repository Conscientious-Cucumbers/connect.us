import React from 'react';
import { Tabs, Tab, Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import Loading from '../components/Loading.jsx';
import Setting from './Setting.jsx';
import Header from './Header.jsx';

// Get rid of any of the apove dependencies not neccesary

class Settings extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      settings: ['username', 'first name', 'last name']

    };
    //console.log('this is the user object', this.props.user)
  }

  loading () {
    return <Loading />;
  }

  loaded () {
    return (
      <div>
        <Header username={this.props.user.username}/>
        <h1 className="settings-title"> Settings </h1>
        {this.state.settings.map((setting, key) => <Setting field={setting} key={key} />)}
      </div>
    );
  }

  render () {
    return (
      <div className="container">
        {
          this.props.user && this.props.user.username
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
    user: state.user
  };
};

export default connect(mapStateToProps)(Settings);
