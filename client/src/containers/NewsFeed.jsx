import React from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import NewsItem from './NewsItem.jsx';
import Loading from '../components/Loading.jsx';

const NewsFeed = (props) => (
  <div>
    {!!props.newsFeed ? 
      props.newsFeed.map(((newsItem, index) => {
      return <NewsItem key={index} newsItem={newsItem} />;
    }))
      : 
      <Loading />}
  </div>
);

const mapStateToProps = (state) => {
  return {
    newsFeed: state.newsFeed
  };
};

export default connect(mapStateToProps)(NewsFeed);