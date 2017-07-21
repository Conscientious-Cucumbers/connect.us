import React from 'react';
import { Grid, Row, Col, Panel, Well } from 'react-bootstrap';
import { AutoAffix, Affix } from 'react-overlays';
import NewsFeed from '../containers/NewsFeed.jsx'


class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Grid>
        <Row className="home-container">
          <Col md={3} lg={3} smHidden xsHidden>
            <div className="home-panel">
              <h3>This is the Messenger</h3>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="home-panel home-panel-middle" height={window.innerHeight - 500}>
              <NewsFeed />
            </div>
          </Col>
          <Col md={3} lg={3} smHidden xsHidden>
            <div className="home-panel">
              <h3>This is the recent activity</h3>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;