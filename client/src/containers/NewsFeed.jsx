import React from 'react';
import { connect } from 'react-redux';
import { Panel, PanelGroup } from 'react-bootstrap';
import NewsItem from './NewsItem.jsx';
import Loading from '../components/Loading.jsx';
import { GridList } from 'material-ui/GridList';

const NewsFeed = (props) => (
  <div className="news-feed-container">
    <GridList
      cols={1}
      padding={1}
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
    </GridList>
  </div>
);

const mapStateToProps = (state) => {
  return {
    newsFeed: state.newsFeed
  };
};

export default connect(mapStateToProps)(NewsFeed);