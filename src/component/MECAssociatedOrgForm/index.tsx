import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { FormType } from 'utils/types';
import ContextTextValidator from 'component/ContextTextValidator';

export default function({ parentKey }:FormType){

  return (<>
    <Typography >AssociatedOrg</Typography>
    <Box sx = {{ pl:4 }}>
      <ContextTextValidator
        name = {`${parentKey}.AssociatedOrg.@organizationID`}
        label = "@organizationID *" 
        validators={['required']}
        errorMessages={['this field is required']} />
      <br/>
      <ContextTextValidator
        name = {`${parentKey}.AssociatedOrg.@role`}
        label = "@role *" 
        validators={['required']}
        errorMessages={['this field is required']} />
    </Box>
  </>)
}