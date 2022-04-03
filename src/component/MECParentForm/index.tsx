import React, { useState } from 'react';
import { Typography, Box,MenuItem } from '@mui/material';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { FormType } from 'utils/types';
import MECContextTextValidator from 'component/ContextTextValidator/MECContextTextValidator';
import { SelectValidator } from 'react-material-ui-form-validator';
import MECContext from 'context/MECContext';
import _ from 'lodash';

export default function({ parentKey }:FormType){
  const { mecJSON, setMECJSON } = React.useContext(MECContext);
  const workType = _.get(mecJSON, 'BasicMetadata-type.WorkType');
  return (
    <Box id="mec-MECParentForm">
      <Typography >Parent</Typography>
      <Box sx = {{ pl:4 }}>
        {/* <MECContextTextValidator
        name = {`${parentKey}.Parent.@relationshipType`} 
        label = "@relationshipType *" 
        validators={['required']}
        errorMessages={['this field is required']} /> */}
        <SelectValidator
          name = {`${parentKey}.Parent.@relationshipType`} 
          label = "@relationshipType *" 
          validators={['required']}
          value = {_.get(mecJSON, `${parentKey}.Parent.@relationshipType`)}
          onChange = {(e:any) => {
            _.set(mecJSON, e.target.name, e.target.value);
            setMECJSON({ ...mecJSON });
          }}
          errorMessages={['this field is required']}>
          <MenuItem value="isepisodeof">Episode of a season</MenuItem>
          <MenuItem value="isseasonof">Season of a series</MenuItem>
          <MenuItem value="ispromotionfor">Bonus or promotional material for a season</MenuItem>
        </SelectValidator>
        <MECContextTextValidator
          name = {`${parentKey}.Parent.ParentContentID`} 
          label = "ParentContentID *" 
          validators={['required']}
          errorMessages={['this field is required']} />
      </Box>
    </Box>
  )
}