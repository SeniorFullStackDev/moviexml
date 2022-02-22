import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { FormType } from 'utils/types';
import ContextTextValidator from 'component/ContextTextValidator';

export default function({ parentKey }:FormType){
  return (<>
    <Typography >SequenceInfo</Typography>
    <Box sx = {{ pl:4 }}>
      <ContextTextValidator
        name = {`${parentKey}.SequenceInfo.Number`} 
        label = "Number *" 
        validators={['required']}
        errorMessages={['this field is required']} />
    </Box>
  </>)
}