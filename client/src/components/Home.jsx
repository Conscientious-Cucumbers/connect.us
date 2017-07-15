import React from 'react';
import { Grid, Row, Col, Panel, Well } from 'react-bootstrap';
import { AutoAffix, Affix } from 'react-overlays';


class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col md={3}>
            <Panel>
              <h3>This is the Messenger</h3>
            </Panel>
          </Col>
          <Col md={6}>
            <div>
              <Panel>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
                <h3>This is the news stream</h3>
              </Panel>
            </div>
          </Col>
          <Col md={3}>
            <Affix>
                <Well>
                  <h3>This is the recent activity</h3>
                </Well>
            </Affix>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;