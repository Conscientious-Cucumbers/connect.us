import React from 'react';
import { PanelGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import Loading from '../components/Loading.jsx';
import NewsItem from './NewsItem.jsx';

class NewsLikes extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isNewsLike: true
    };
  }

  render () {
    return (
      <PanelGroup>
        {
          this.props.newsLikes 
          ?
          this.props.newsLikes.map((item, index) => {
            return <NewsItem isNewsLike={this.state.isNewsLike} key={index} newsItem={item}/>;
          }) 
          :
          <Loading />
        }
      </PanelGroup>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newsLikes: state.newsLikes
  };
};

export default connect(mapStateToProps)(NewsLikes);