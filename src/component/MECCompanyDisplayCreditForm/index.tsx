import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { FormType } from 'utils/types';
import ContextTextValidator from 'component/ContextTextValidator';

export default function({ parentKey }:FormType){

  return (
    <>
      <Typography >CompanyDisplayCredit</Typography>
      <Box sx = {{ pl: 4 }}>
        <Typography >DisplayString</Typography>
        <Box sx = {{ pl: 4 }}>
          <ContextTextValidator
            name={`${parentKey}.DisplayString.@language`} 
            label="@language *" 
            validators={['required']}
            errorMessages={['this field is required']} />
          <br/>
          <ContextTextValidator
            name={`${parentKey}.DisplayString.value`} 
            label="DisplayString *" 
            validators={['required']}
            errorMessages={['this field is required']} />
        </Box>
      </Box>
    </>
  )
}