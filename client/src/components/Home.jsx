import React from 'react';
import { Grid, Row, Col, Panel, Well } from 'react-bootstrap';
import { AutoAffix, Affix } from 'react-overlays';
import NewsFeed from '../containers/NewsFeed.jsx'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';

class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.getNewsFeed();
  }

  render () {
    return (
      <Grid>
        <Row className="home-container">
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="home-panel home-panel-middle" height={window.innerHeight - 500}>
              <NewsFeed />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getNewsFeed: actions.getNewsFeed
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Home);