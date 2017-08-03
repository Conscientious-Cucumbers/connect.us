import React from 'react';
import { connect } from 'react-redux';
import Loading from '../components/Loading.jsx';
import NewsItem from './NewsItem.jsx';
import { GridList } from 'material-ui/GridList';

class NewsLikes extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isNewsLike: true
    };
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
            this.props.newsLikes
              ?
              this.props.newsLikes.map((item) => {
                return <NewsItem isNewsLike={this.state.isNewsLike} key={item.id} newsItem={item}/>;
              })
              :
              <Loading />
          }
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newsLikes: state.newsLikes
  };
};

export default connect(mapStateToProps)(NewsLikes);
