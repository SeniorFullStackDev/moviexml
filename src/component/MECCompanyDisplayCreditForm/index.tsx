import React, { useState } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { FormType } from 'utils/types';
import { Box, MenuItem, TextField, Typography  } from '@mui/material';
import MECContext from 'context/MECContext';
import languages from 'config/languages.json';
import { SelectValidator } from 'react-material-ui-form-validator';
import _ from 'lodash';
import MECContextTextValidator from 'component/ContextTextValidator/MECContextTextValidator';

export default function({ parentKey }:FormType){

  const { mecJSON, setMECJSON } = React.useContext(MECContext);

  return (
    <Box id="mec-CompanyDisplayCredit">
      <Typography >CompanyDisplayCredit</Typography>
      <Box sx = {{ pl: 4 }}>
        <Typography >DisplayString</Typography>
        <Box sx = {{ pl: 4 }}>
          <SelectValidator
            defaultValue = "en-US"
            name={`${parentKey}.DisplayString.@language`} 
            value = {_.get(mecJSON,`${parentKey}.DisplayString.@language` )}
            validators={['required']}
            errorMessages={['this field is required']}
            onChange = {(e:any) => {
              _.set(mecJSON, e.target.name, e.target.value);
              setMECJSON({ ...mecJSON });
            }}
            label="@Language *"
          >
            { languages.map((ele:any, index:number)=><MenuItem key={index} value={ele.code}>{ele.language}</MenuItem>) }
          </SelectValidator>
          <br/>
          <MECContextTextValidator
            name={`${parentKey}.DisplayString.value`} 
            label="DisplayString *" 
            validators={['required']}
            errorMessages={['this field is required']} />
        </Box>
      </Box>
    </Box>
  )
}