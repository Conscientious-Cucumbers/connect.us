import React from 'react';
import { Panel, Row, Col, Modal, Button } from 'react-bootstrap';
import LikeButton from '../components/LikeButton.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import { GridTile } from 'material-ui/GridList';


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
          <img className="news-item-media" src={this.props.newsItem.thumbnail} />
      </GridTile>
    );
  }

  panelFooter () {
    return (
      <span onClick={() => this.toggleLike()}>
        <LikeButton isLiked={this.state.isLiked}/>
      </span>
    );
  }

  itemModal () {
    return (
      <Modal
        show={this.state.isOpen}
        onHide={() => this.toggleModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.newsItem.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="news-modal-body">
        <div className="news-modal-media">
          <img src={this.props.newsItem.media} width="100%"/>
        </div>
        <br />
        <div className="news-modal-description">
          <b>Description:{' '}</b> 
          {this.props.newsItem.text || 'No description available'}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => this.toggleModal(false)}>
          Close
        </Button>
      </Modal.Footer>
      </Modal>
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