import React from 'react';
import { Panel, Col, Button } from 'react-bootstrap';
import LikeButton from '../components/LikeButton.jsx';

class Status extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isLiked: false
    }
  }

  toggleLike () {
    this.setState((prevState) => {
      return {
        isLiked: !prevState.isLiked
      };
    });
  }

  title () {
    return (
      <h3>
        {this.props.status.owner.display_name}
      </h3>
    );
  }

  panelFooter () {
    return (
      <span onClick={() => this.toggleLike()}>
        <LikeButton isLiked={this.state.isLiked}/>
      </span>
    );
  }

  render () {
    return (
      <div>
        <Panel
          footer={this.panelFooter()}
          className="status-post"
          header={this.title()}
          bsStyle="info">
          {this.props.status.text}
        </Panel>
        <br/>
      </div>
    );
  }
};

export default Status;