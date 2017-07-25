import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LinkContainer } from 'react-router-bootstrap';
import actions from '../actions';
import FieldGroup from '../components/FieldGroup.jsx';


class Setting extends React.Component {
  constructor (props) {
    super(props);
    this.postCurrentUserPath = this.postCurrentUserPath.bind(this);

    this.state = {
      formValues: {}
    }
    this.postCurrentUserPath = this.postCurrentUserPath.bind(this)
  }

  handleFormChange(key, value) {
    //console.log(key)
    this.setState((prevState) => {
      return {
        formValues: Object.assign(prevState.formValues, {[key]: value})
      };
    });
  }

  postCurrentUserPath () {
    //console.log('here is the field',this.state.formValues[this.props.field.split(' ')[0]])
    this.props.updateSettings(this.state.formValues);
  }

  render () {
    return (
      <div>
        <FieldGroup 
                id={this.props.field}
                type="text"
                label={"Update your " + this.props.field}
                name={this.props.field.split(' ')[0]}
                placeholder={'New ' + this.props.field}
                onChange={(e) => this.handleFormChange(e.target.name, e.target.value)}/>
          <Button type="submit" onClick={this.postCurrentUserPath}>Update</Button>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateSettings: actions.updateSettings,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);

