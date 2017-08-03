import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import actions from '../actions';
import { bindActionCreators } from 'redux';
import {fullWhite} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import ReactFilestack from 'filestack-react';
import IconButton from 'material-ui/IconButton';
import CreateIcon from 'material-ui/svg-icons/content/create';

class Header extends React.Component {

  constructor (props) {
    super(props);
  }

  toggleFollow () {
    this.props.toggleFollow(this.props.active.id);
  }

  uploadProfilePicture (file) {
    this.props.updateSettings({profile_picture: file.filesUploaded[0].url});
  }

  render() {
    // className="profile-picture"
    const fileStackOpts = {
      accept: 'image/*',
      maxFiles: 1,
      storeTo: {
        location: 's3'
      }
    };
    return (
      <div>
        <div className="profile-picture-container">
          <Paper zDepth={5} className="profile-picture" circle>
            <img
              src={this.props.active.profile_picture || 'http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg'} />
          </Paper>
          {
            this.props.active.username === this.props.user.username
            ?
              <ReactFilestack
                apikey={'AnjmM5YhHQ7uoOi019Ncrz'}
                buttonText=""
                buttonClass="fa fa-camera upload-pic-btn"
                options={fileStackOpts}
                onSuccess={this.uploadProfilePicture.bind(this)}
                />
            :
              null
          }
        </div>
        <h2 className="profile-name">
          {this.props.active.first && this.props.active.last && `${this.props.active.first} ${this.props.active.last}` || this.props.active.display}
        </h2>
        {!this.props.user || this.props.user.username === this.props.active.username
          ?
          null
          :
          <div className="follow-button-wrapper">
            <RaisedButton
              onTouchTap={this.toggleFollow.bind(this)}
              backgroundColor={this.props.activeFollowed ? fullWhite : '#121E24'}
              labelColor={this.props.activeFollowed ? '#121E24' : fullWhite}
              className="follow-button"
              label={this.props.activeFollowed ? 'Following' : 'Follow'} />
          </div>
        }
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeFollowed: state.activeFollowed,
    user: state.user,
    active: state.activeProfile || state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleFollow: actions.toggleFollow,
    updateSettings: actions.updateSettings
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
