import React from 'react';
import { Panel, Row, Col, Modal, Button } from 'react-bootstrap';

class NewsItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleModal (state) {
    this.setState({
      isOpen: state
    });
  }

  itemPreview () {
    return (
      <div className="news-item">
        <div className="news-item-media">
          <img src={this.props.newsItem.thumbnail} onClick={() => this.toggleModal(true)}/>
        </div>
        <div className="news-item-info">
          <div className="news-item-title" onClick={() => this.toggleModal(true)}>
            {this.props.newsItem.title}
          </div>
          <div className="news-item-description">
            {this.props.newsItem.description || 'No description available'}
          </div>
          <div className="news-item-source">
            Source: {this.props.newsItem.source}
          </div>
        </div>
      </div>
    );
  }

  itemModal () {
    return (
      <Modal
        show={this.state.isOpen}
        onHide={() => this.toggleModal(false)}
        bsSize="sm">
      <Modal.Header closeButton>
        <Modal.Title>{this.props.newsItem.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="news-modal-body">
        <div className="news-modal-media">
          <img src={this.props.newsItem.media} height="150%"/>
        </div>
        <br />
        <div className="news-modal-description">
          <b>Description:{' '}</b> 
          {this.props.newsItem.description || 'No description available'}
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
    return (
      <Panel>
        {this.itemPreview()}
        {this.itemModal()}
      </Panel>
    )
  }
};

export default NewsItem;