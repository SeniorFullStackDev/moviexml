import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { FormType } from 'utils/types';
import MECContextTextValidator from 'component/ContextTextValidator/MECContextTextValidator';

export default function({ parentKey }:FormType){

  return (
    <>
      <Typography >CompanyDisplayCredit</Typography>
      <Box sx = {{ pl: 4 }}>
        <Typography >DisplayString</Typography>
        <Box sx = {{ pl: 4 }}>
          <MECContextTextValidator
            name={`${parentKey}.DisplayString.@language`} 
            label="@language *" 
            validators={['required']}
            errorMessages={['this field is required']} />
          <br/>
          <MECContextTextValidator
            name={`${parentKey}.DisplayString.value`} 
            label="DisplayString *" 
            validators={['required']}
            errorMessages={['this field is required']} />
        </Box>
      </Box>
    </>
  )
}