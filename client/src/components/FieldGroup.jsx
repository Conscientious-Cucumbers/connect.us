import React from 'react';
import { FormGroup, 
        ControlLabel, 
        FormControl, 
        HelpBlock } from 'react-bootstrap';

const FieldGroup = ({ id, label, help, placeholder, required, name, onChange, width, value}) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl 
        bsSize={width || "small"}
        placeholder={placeholder} 
        required={required} 
        onChange={onChange}
        value={value}
        name={name}/>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
};

export default FieldGroup;