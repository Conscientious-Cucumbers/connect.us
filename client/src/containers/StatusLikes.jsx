import React from 'react';
import Loading from '../components/Loading.jsx';
import { connect } from 'react-redux';
import Status from './Status.jsx';

const StatusLikes = (props) => (
  <div className="status-likes-container">
    {
      props.statusLikes
        ?
        props.statusLikes.map((status) => {
          return (
            <Status key={status.id} status={status} isStatusLike/>
          );
        })
        :
        <Loading />
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    statusLikes: state.statusLikes
  };
};

export default connect(mapStateToProps)(StatusLikes);
