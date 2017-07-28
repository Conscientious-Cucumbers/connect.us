import React from 'react';
import LikeButton from '../components/LikeButton.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import { GridTile } from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class NewsItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false,
      isLiked: false
    };
  }

  componentDidMount () {
    this.setState({
      isLiked: this.props.newsItem.liked
    });
  }

  toggleModal (modalState) {
    this.setState({
      isOpen: modalState
    });
  }

  toggleLike () {
    this.props.postNewsLike(this.props.newsItem);
    if (!this.props.isNewsLike) {
      this.setState((prevState) => {
        return {
          isLiked: !prevState.isLiked
        };
      });
    }
  }

  itemPreview () {
    return (
      <GridTile
          key={this.props.newsItem.thumbnail}
          title={this.props.newsItem.title}
          actionIcon={
            <span onClick={this.toggleLike.bind(this)}>
              <LikeButton isLiked={this.state.isLiked} />
            </span>
          }
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img onTouchTap={() => this.toggleModal(true)} className="news-item-media" src={this.props.newsItem.thumbnail} />
          {this.itemModal()}
      </GridTile>
    );
  }

  getNewsPage (e) {
    window.location = this.props.newsItem.url;
  }

  itemModal () {
    const actions = [
      <span className="modal-like" onClick={this.toggleLike.bind(this)}>
        <LikeButton isLiked={this.state.isLiked} />
      </span>,
      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={false}
        onTouchTap={() => this.toggleModal(false)}
      />
    ];

    //     <div>
    //   <iframe width="100%" height="500px" src={this.props.newsItem.url} />
    // </div>

    return (
      <Dialog
        title={this.props.newsItem.title}
        actions={actions}
        modal={false}
        open={this.state.isOpen}
        autoScrollBodyContent
        onRequestClose={() => this.toggleModal(false)}
      >
        <div>
          <img src={this.props.newsItem.media} width="100%"/>
        </div>
        <br />
        <div className="news-modal-description">
          <b>Description:{' '}</b> 
          {this.props.newsItem.text || 'No description available'}
        </div>
      </Dialog>
    );
  }

  render () {
    return this.itemPreview();
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    postNewsLike: actions.postNewsLike
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(NewsItem);