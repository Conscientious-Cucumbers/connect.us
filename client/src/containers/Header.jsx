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

class Header extends React.Component {

  constructor (props) {
    super(props);
  }

  toggleFollow () {
    this.props.toggleFollow(this.props.active.id);
  }

  render() {
    return (
      <div>
          <img 
            className="profile-picture"
            src={this.props.active.profile_picture || "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"} />
          <h2 className="profile-name">
            {this.props.active.display || `${this.props.active.first} ${this.props.active.last}`}
          </h2>
          {!this.props.user || this.props.user.username === this.props.active.username
            ?
            null
            :
            <div className="follow-button-wrapper">
              <RaisedButton 
                onTouchTap={this.toggleFollow.bind(this)}
                backgroundColor={this.props.activeFollowed ? fullWhite : "#0079BF"}
                labelColor={this.props.activeFollowed ? "#0079BF" : fullWhite}
                className="follow-button" 
                label={this.props.activeFollowed ? "Following" : "Follow"}/>
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
    active: state.activeProfile
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleFollow: actions.toggleFollow
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);


