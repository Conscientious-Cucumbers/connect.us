import React from 'react';
import { FormGroup, 
        ControlLabel, 
        FormControl, 
        HelpBlock } from 'react-bootstrap';

const FieldGroup = ({ id, label, help, placeholder, required, name, onChange}) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl 
        placeholder={placeholder} 
        required={required} 
        onChange={onChange}
        name={name}/>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
};

export default FieldGroup;