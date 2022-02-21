import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { FormType } from 'utils/types';

interface Props extends FormType {
    data:any;
}

export default function({ data, parentKey }:Props){

  const [formData, setFormData] = useState({});

  return (
    <>
      <Typography >CompanyDisplayCredit</Typography>
      <Box sx = {{ pl: 4 }}>
        <Typography >DisplayString</Typography>
        <Box sx = {{ pl: 4 }}>
          <TextValidator
            name={`${parentKey}.DisplayString.@language`} 
            label="@language *" 
            validators={['required']}
            errorMessages={['this field is required']} />
          <br/>
          <TextValidator
            name={`${parentKey}.DisplayString.value`} 
            label="DisplayString *" 
            validators={['required']}
            errorMessages={['this field is required']} />
        </Box>
      </Box>
    </>
  )
}