import React from 'react';
import { Panel, Col } from 'react-bootstrap';

class Status extends React.Component {

  constructor (props) {
    super(props);
  }

  title () {
    return (
      <h3>
        {this.props.status.owner.display_name}
      </h3>
    );
  }

  render () {
    return (
      <div>
        <Panel
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