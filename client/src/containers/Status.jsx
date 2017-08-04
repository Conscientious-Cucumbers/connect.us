import React from 'react';
import { Panel, Col, Button } from 'react-bootstrap';
import LikeButton from '../components/LikeButton.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

class Status extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isLiked: false,
      isSelf: false
    };
  }

  componentDidMount () {
    this.setState({
      isSelf: this.props.user.username === this.props.activeProfile.username,
      isLiked: this.props.status.liked || this.props.user.username === this.props.activeProfile.username
    });
  }

  toggleLike () {
    this.props.postStatusLike(this.props.status.id);
    this.setState((prevState) => {
      return {
        isLiked: prevState.isSelf || !prevState.isLiked
      };
    });
  }

  date () {
    const date = new Date(this.props.status.created_at);
    return (
      <div className="status-date">
        Created on {date.toDateString()} at {date.toLocaleTimeString()}
      </div>
    );
  }

  statusCreator () {
    if (this.props.isStatusLike) {
      return (
        <div className="status-like-user">
          <a className="status-like-user-link" href={'/' + this.props.status.user_obj.username}>
            <Avatar src={this.props.status.user_obj.profile_picture || 'http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg'} />
            {' '}
            {this.props.status.user_obj.first + ' ' + this.props.status.user_obj.last}
          </a>
        </div>
      );
    }
  }

  panelFooter () {
    if ((this.state.isSelf && this.props.isTimeline) || (this.props.isStatusLike && this.props.status.user_obj.username === this.props.user.username)) {
      return (
        <div>
        </div>
      );
    } else {
      return (
        <span onClick={() => this.toggleLike()}>
          <LikeButton isLiked={this.state.isLiked}/>
        </span>
      );
    }
  }

  render () {
    return (
      <div>
        <Paper zDepth={5}
          className="status-post-2">
          <div className="status-title">
            <div className="delete-button">
              
            </div>
            <div>
              <div className="status-title-inner">{this.props.status.title}</div>
              {this.statusCreator()}
              {this.date()}
            </div>

          </div>
          <Divider className="status-title-divider"/>
          {
            this.props.status.image
            ?
              <div>
                <img className="status-image" alt={'image'} src={this.props.status.image} />
                <Divider className="status-title-divider"/>
              </div>
            :
              null
          }
          <div className="status-description">
            <b>Description:</b> {this.props.status.text}
          </div>
          <div>
            {this.panelFooter()}
          </div>
        </Paper>
        <br/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    postStatusLike: actions.postStatusLike
  }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    activeProfile: state.activeProfile
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Status);
