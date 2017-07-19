import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import io from 'socket.io-client';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Hello!'
    };

  }
  getDataSockets(){
    console.log('envoked function getDataSockets ********');
    var socket = io();
    socket.emit('get news');
    // socket.on('news', data => this.setState({current: 'Saikal'}));
    socket.on('news', data => console.log(data));

    socket.emit('get user info');

    socket.on('res user info', data => console.log(data));

    var new1 = { title: 'There will be a lot of new faces at Patriots training camp next week',
      text: 'After a busy offseason — which some have said the Patriots “won’’ — there will be many new faces in Foxborough when',
      thumbnail: 'https://www.boston.com/wp-content/uploads/2017/07/download-16-850x478.jpg',
      media: 'https://www.boston.com/wp-content/uploads/2017/07/download-16-850x478.jpg',
      date: '2017-07-18T12:06:26Z',
      source: 'Google News' };

    socket.emit('news like', {user_id: 2, newLiked: new1});

    axios.post('/user/news/like', {
              user_id: 2,
              newsLike: { title: 'There will be a lot of new faces at Patriots training camp next week',
                          text: 'After a busy offseason — which some have said the Patriots “won’’ — there will be many new faces in Foxborough when',
                          thumbnail: 'https://www.boston.com/wp-content/uploads/2017/07/download-16-850x478.jpg',
                          media: 'https://www.boston.com/wp-content/uploads/2017/07/download-16-850x478.jpg',
                          date: '2017-07-18T12:06:26Z',
                          source: 'Google News' }
      })
      .then(function (response) {
        console.log("******* did post news like: ", response);
      })
      .catch(function (error) {
        console.log(error);
      });


    // $.ajax({
    //   url: '/user/news/like',
    //   type: 'POST', 
    //   data: {
    //           user_id: 2,
    //           newsLike: { title: 'There will be a lot of new faces at Patriots training camp next week',
    //                       text: 'After a busy offseason — which some have said the Patriots “won’’ — there will be many new faces in Foxborough when',
    //                       thumbnail: 'https://www.boston.com/wp-content/uploads/2017/07/download-16-850x478.jpg',
    //                       media: 'https://www.boston.com/wp-content/uploads/2017/07/download-16-850x478.jpg',
    //                       date: '2017-07-18T12:06:26Z',
    //                       source: 'Google News' }
    //         },

    //   success: (data) => {
    //     console.log("******* did post news like: ", data);

    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });

  }

  render () {

    return (<div>
      <h1> { this.state.current } GOOD DAY</h1>
      <button onClick={this.getDataSockets}>Click!!!</button>
          </div>)

  }
}

ReactDOM.render(<App />, document.getElementById('root'));
