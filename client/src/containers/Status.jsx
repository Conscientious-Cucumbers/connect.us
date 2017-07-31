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
      isLiked: this.props.user.username === this.props.activeProfile.username
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

  title () {
    const date = new Date(this.props.status.created_at);
    return (
      <h3>
        {date.toDateString()} at {date.toLocaleTimeString()}
      </h3>
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
          footer={this.panelFooter()}
          className="status-post-2"
          header={this.title()}
          bsStyle="info">
          <div className="status-title">
            {this.props.status.title}
            <Divider className="status-title-divider"/>
          </div>
          <br></br>
          <img className="status-image" alt={'image'} src={this.props.status.image} />
          <br></br>
          <div className="status-description">
            {this.props.status.text}
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
