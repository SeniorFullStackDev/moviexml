import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { FormType } from 'utils/types';
import MECContextTextValidator from 'component/ContextTextValidator/MECContextTextValidator';

export default function({ parentKey }:FormType){

  return (<>
    <Typography >AssociatedOrg</Typography>
    <Box sx = {{ pl:4 }}>
      <MECContextTextValidator
        name = {`${parentKey}.AssociatedOrg.@organizationID`}
        label = "@organizationID *" 
        validators={['required']}
        errorMessages={['this field is required']} />
      <br/>
      <MECContextTextValidator
        name = {`${parentKey}.AssociatedOrg.@role`}
        label = "@role *" 
        validators={['required']}
        errorMessages={['this field is required']} />
    </Box>
  </>)
}