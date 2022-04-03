import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { FormType } from 'utils/types';
import MECContextTextValidator from 'component/ContextTextValidator/MECContextTextValidator';

export default function({ parentKey }:FormType){
  return (
    <Box id="mec-SequenceInfoForm">
      <Typography >SequenceInfo</Typography>
      <Box sx = {{ pl:4 }}>
        <MECContextTextValidator
          type = "number"
          name = {`${parentKey}.SequenceInfo.Number`} 
          label = "Number *" 
          validators={['required']}
          errorMessages={['this field is required']} />
      </Box>
    </Box>
  )
}