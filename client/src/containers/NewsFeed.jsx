import React from 'react';
import { connect } from 'react-redux';
import NewsItem from './NewsItem.jsx';
import Loading from '../components/Loading.jsx';
import { GridList } from 'material-ui/GridList';
import ReactScrollPagination from 'react-scroll-pagination';
import { getNextNewsPage } from '../actions/newsActions';
import { bindActionCreators } from 'redux';

const NewsFeed = (props) => {
  var page = 1;
  return (
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
        {
          props.isFetching
            ?
              <Loading className="bottom-loading" />
            :
            <div></div>
        }
      </GridList>
      <ReactScrollPagination
        paginationShowTime={3000}
        fetchFunc={() => props.getNextNewsPage(++page)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newsFeed: state.newsFeed,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getNextNewsPage: getNextNewsPage
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
