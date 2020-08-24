import React from 'react';
import { Checkbox } from '@material-ui/core';
import './checkbox.css'
const CheckBox = props => {
  const {label, color} = props;
  console.log(label)
  return (
    <>
    <Checkbox color={color} {...props}/>
      {label}
    </>
  );
}

export default CheckBox;