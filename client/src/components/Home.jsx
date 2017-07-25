import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
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
      <div className="home-container">
          <NewsFeed />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getNewsFeed: actions.getNewsFeed
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Home);