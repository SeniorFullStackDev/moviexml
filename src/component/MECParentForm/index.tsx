import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { FormType } from 'utils/types';
import MECContextTextValidator from 'component/ContextTextValidator/MECContextTextValidator';

export default function({ parentKey }:FormType){
  return (<>
    <Typography >Parent</Typography>
    <Box sx = {{ pl:4 }}>
      <MECContextTextValidator
        name = {`${parentKey}.Parent.@relationshipType`} 
        label = "@relationshipType *" 
        validators={['required']}
        errorMessages={['this field is required']} />
      <MECContextTextValidator
        name = {`${parentKey}.Parent.ParentContentID`} 
        label = "ParentContentID *" 
        validators={['required']}
        errorMessages={['this field is required']} />
    </Box>
  </>)
}