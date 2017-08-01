import React from 'react';
import { connect } from 'react-redux';
import NotificationItem from './NotificationItem.jsx';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import Badge from 'material-ui/Badge';
import { bindActionCreators } from 'redux';
import { clearNotifications } from '../actions/notificationActions';
import {IconMenu, IconButton} from 'material-ui';
import GlobeIcon from 'material-ui/svg-icons/social/public';
import Divider from 'material-ui/Divider';


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
          <IconButton tooltip="Notifications" className="navbar-notifications">
            <Badge
              className="notifications-badge"
              badgeStyle={{top: -7, right: 1, fontSize: 10, width: 18, height: 18}}
              badgeContent={this.props.UnseenNotifications.length}
              secondary>
              <GlobeIcon color={'white'}/>
            </Badge>
          </IconButton>
      );
    } else {
      return (
        <IconButton tooltip="Notifications" className="navbar-notifications">
          <GlobeIcon color={'white'}/>
        </IconButton>
      );
    }
  }


  render () {

    return (
      <IconMenu
        iconButtonElement={this.notifications()}
        onTouchTap={this.needsClearNotifications.bind(this)}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        maxHeight={150}
      >
        {
          this.props.UnseenNotifications &&
          this.props.UnseenNotifications.map((notification, index) => {
            return <NotificationItem key={(3 + (index * 2 + 1) ) / 10} notification={notification}/>;
          })
        }

        <Divider />

        {
          this.props.SeenNotifications &&
          this.props.SeenNotifications.slice(0, 10).map((notification, index) => {
            return <NotificationItem key={(3 + (index + 2) * 2) / 10} notification={notification} seen/>;
          })
        }

      </IconMenu>
    );

    // return (
    //
    //   <NavDropdown
    //     title={this.notifications()}
    //     id="notifications-nav-dropdown"
    //     onTouchTap={this.needsClearNotifications.bind(this)}
    //     noCaret>
    //     {
    //       this.props.UnseenNotifications && this.props.UnseenNotifications.map((notification, index) => {
    //         return <NotificationItem key={(3 + (index * 2 + 1) ) / 10} notification={notification}/>;
    //       })
    //     }
    //     <MenuItem divider />
    //     {
    //       this.props.SeenNotifications && this.props.SeenNotifications.slice(0, 5).map((notification, index) => {
    //         return <NotificationItem key={(3 + (index + 2) * 2) / 10} notification={notification}/>;
    //       })
    //     }
    //   </NavDropdown>
    // );
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
