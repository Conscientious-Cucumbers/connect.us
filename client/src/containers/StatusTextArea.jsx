import React from 'react';
import { FormGroup,
         FormControl,
         ControlLabel,
         Button, Panel } from 'react-bootstrap';

const header = () => {
  return (
    <h3>Post a status</h3>
  );
};

const StatusTextArea = (props) => (
  <div>
    <Panel
      header={header()} 
      className="status-post status-textarea"
      bsStyle="info">
      <form>
        <FormGroup controlId="formControlsTextarea">
          <FormControl 
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

export default StatusTextArea;