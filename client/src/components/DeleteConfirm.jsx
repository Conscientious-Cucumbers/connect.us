import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';



class DeleteConfirm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.props.onCancel}
      />,
      <FlatButton
        label="Delete"
        className="submit-signup-btn"
        onTouchTap={this.props.onConfirm}
      />,
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={true}
          open={this.props.open}
        >
          <h4>
            Are you sure you want to delete this {this.props.isStatus ? 'status?' : 'profile?'}
          </h4>
        </Dialog>
      </div>
    );
  }
}

export default DeleteConfirm;
