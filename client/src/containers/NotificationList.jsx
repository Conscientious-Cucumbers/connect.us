import React from 'react';
import { connect } from 'react-redux';
import NotificationItem from './NotificationItem.jsx';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import Badge from 'material-ui/Badge';
import { bindActionCreators } from 'redux';
import { clearNotifications } from '../actions/notificationActions';


class NotificationList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dropDownOpen: false
    };
  }

  needsClearNotifications () {

    if (this.state.dropDownOpen) {
      this.props.clearNotifications();
    }

    this.setState((prevState) => {
      return {
        dropDownOpen: !prevState.dropDownOpen
      };
    });

  }

  notifications () {
    if (this.props.UnseenNotifications && this.props.UnseenNotifications.length) {
      return (
        <Badge
          className="notifications-badge"
          badgeStyle={{top: -9, right: -4, fontSize: 10, width: 18, height: 18}}
          badgeContent={this.props.UnseenNotifications.length}
          secondary>
          <i className="fa fa-globe" aria-hidden="true"></i>
        </Badge>
      );
    } else {
      return (
        <i className="fa fa-globe" aria-hidden="true" ></i>
      );
    }
  }


  render () {

    //   <DropDownMenu>

     //      {this.props.UnseenNotifications && this.props.UnseenNotifications.map((notification, index) => {return <Menu key={(3 + (index * 2 + 1) ) / 10} notification={notification}/>})}
          
     //  </DropDownMenu>

    return (
      
      <NavDropdown eventKey={3} 
        className='pull-right'
        title={this.notifications()} 
        id="notifications-nav-dropdown" 
        onTouchTap={this.needsClearNotifications.bind(this)}
        noCaret>
        {
          this.props.UnseenNotifications && this.props.UnseenNotifications.map((notification, index) => {
            return <NotificationItem key={(3 + (index * 2 + 1) ) / 10} notification={notification}/>;
          })
        }
        <MenuItem divider />
        {
          this.props.SeenNotifications && this.props.SeenNotifications.slice(0, 5).map((notification, index) => {
            return <NotificationItem key={(3 + (index + 2) * 2) / 10} notification={notification}/>;
          })
        }
      </NavDropdown>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    SeenNotifications: state.SeenNotifications,
    UnseenNotifications: state.UnseenNotifications
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clearNotifications: clearNotifications
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList);
