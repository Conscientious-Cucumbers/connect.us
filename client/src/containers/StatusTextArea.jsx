import React from 'react';
import { FormGroup,
         FormControl,
         ControlLabel,
         Button, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';

const header = () => {
  return (
    <h3>Post a status</h3>
  );
};

class StatusTextArea extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    });
  };

  submitStatus(e) {
    e.preventDefault();
    this.props.postStatus(this.state.text);
    this.setState({
      text: ''
    });
  }

  render () {
    return (
      <div>
        <Panel
          header={header()} 
          className="status-post status-textarea"
          bsStyle="info">
          <form onSubmit={this.submitStatus.bind(this)}>
            <FormGroup controlId="formControlsTextarea">
              <FormControl 
                onChange={this.handleTextChange.bind(this)}
                value={this.state.text}
                componentClass="textarea" 
                placeholder="What's on your mind?" />
            </FormGroup>

            <Button type="submit" 
              bsStyle="primary"
              className="right">
              Post
            </Button>
          </form>
        </Panel>
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    postStatus: actions.postStatus
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(StatusTextArea);