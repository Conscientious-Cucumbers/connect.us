import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import ReactFilestack from 'filestack-react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';



class StatusTextArea extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: '',
      title: '',
      image: ''
    };
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  submitStatus(e) {
    e.preventDefault();
    this.props.postStatus({
      title: this.state.title,
      text: this.state.text,
      image: this.state.image
    });
    this.setState({
      text: '',
      title: '',
      image: ''
    });
  }

  uploadPicture (file) {
    this.setState({
      image: file.filesUploaded[0].url
    });

  }

  render () {

    const fileStackOpts = {
      accept: 'image/*',
      maxFiles: 1,
      storeTo: {
        location: 's3'
      }
    };

    return (
      <div>
        <Paper zDepth={5}
          className="status-post-status-textarea">
          <div className="status-textarea">
            Post a Status
            <Divider className="status-textarea-divider"/>

            <form onSubmit={this.submitStatus.bind(this)}>
              <FormGroup controlId="formControlsTextarea">

                <TextField
                  onChange={this.handleTitleChange.bind(this)}
                  id="status-title-field"
                  underlineFocusStyle={{borderColor: '#FD533E'}}
                  value={this.state.title}
                  type="text"
                  placeholder="Title"
                /> <br />

                <TextField
                  onChange={this.handleTextChange.bind(this)}
                  id="status-description-field"
                  underlineFocusStyle={{borderColor: '#FD533E'}}
                  value={this.state.text}
                  placeholder="Description" /> <br />

                <img src={this.state.image} width="100%"/>

              </FormGroup>

              <ReactFilestack
                apikey={'AnjmM5YhHQ7uoOi019Ncrz'}
                buttonText="Upload"
                buttonClass="btn btn-primary"
                options={fileStackOpts}
                onSuccess={this.uploadPicture.bind(this)}
              />
              <Button type="submit"
                bsStyle="primary"
                className="right post-status-btn"
                disabled={!this.state.text || !this.state.title}>
                Post
              </Button>
            </form>
          </div>
        </Paper>
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
