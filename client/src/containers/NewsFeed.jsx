import React from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import NewsItem from './NewsItem.jsx';

const NewsFeed = (props) => (
  <div>
    {!!props.newsFeed ? 
      props.newsFeed.map(((newsItem, index) => {
      return <NewsItem key={index} newsItem={newsItem} />;
    }))
      : 
      <div className="loading">
        <i className="fa fa-spin fa-spinner" aria-hidden="true"></i>
      </div>}
  </div>
);

const mapStateToProps = (state) => {
  return {
    newsFeed: state.newsFeed
  };
};

export default connect(mapStateToProps)(NewsFeed);