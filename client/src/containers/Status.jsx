import React from 'react';
import { Panel, Col, Button } from 'react-bootstrap';
import LikeButton from '../components/LikeButton.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

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
      <span className="status-date">
        {date.toDateString()} at {date.toLocaleTimeString()}
      </span>
    );
  }

  panelFooter () {
    if (this.state.isSelf && this.props.isTimeline) {
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
            <div>
              <span className="status-title-inner">{this.props.status.title}</span>
            </div>
            <div className="status-date">{this.date()}</div>
            <Divider className="status-title-divider"/>
          </div>
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
