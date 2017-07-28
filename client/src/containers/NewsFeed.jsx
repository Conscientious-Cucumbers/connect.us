import React from 'react';
import { connect } from 'react-redux';
import NewsItem from './NewsItem.jsx';
import Loading from '../components/Loading.jsx';
import { GridList } from 'material-ui/GridList';

const NewsFeed = (props) => (
  <div className="news-feed-container">
    <GridList
      cols={1}
      padding={10}
      className="news-feed-list"
    >
    {
      !!props.newsFeed 
      ?
        props.newsFeed.map(((newsItem, index) => {
          return <NewsItem key={index} newsItem={newsItem} />;
        }))
      : 
        <Loading />
    }
      <Loading className="bottom-loading" />
    </GridList>
  </div>
);

const mapStateToProps = (state) => {
  return {
    newsFeed: state.newsFeed
  };
};

export default connect(mapStateToProps)(NewsFeed);