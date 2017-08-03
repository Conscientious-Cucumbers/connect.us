import React from 'react';
import { connect } from 'react-redux';
import NewsItem from './NewsItem.jsx';
import Loading from '../components/Loading.jsx';
import { GridList } from 'material-ui/GridList';
import ReactScrollPagination from 'react-scroll-pagination';
import { getNextNewsPage } from '../actions/newsActions';
import { bindActionCreators } from 'redux';
import SadIcon from 'material-ui/svg-icons/social/sentiment-dissatisfied';

class NewsFeed extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  getNextPage () {
    this.props.getNextNewsPage(this.state.page + 1);
    this.setState((prevState) => {
      return {
        page: prevState.page + 1
      };
    });
  }

  render () {
    return (
      <div className="news-feed-container">
        <GridList
          cols={1}
          padding={10}
          className="news-feed-list"
        >
          {
            !!this.props.newsFeed
              ?
              this.props.newsFeed.map(((newsItem) => {
                return <NewsItem key={newsItem.url} newsItem={newsItem} />;
              }))
              :
              <Loading />
          }
          {
            this.props.isFetching && this.props.isFetching !== 'finished'
              ?
              <Loading className="bottom-loading" />
              :
                this.props.isFetching === 'finished'
                ?
                <div className="bottom-loading">
                  <div>
                    No more news to show
                  </div>
                  <SadIcon color={'rgb(18,30,36)'}/>
                </div>
                :
                <span></span>
          }
        </GridList>
        <ReactScrollPagination
          paginationShowTime={3000}
          fetchFunc={this.getNextPage.bind(this)}
        />
      </div>
    );
  }
}

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
