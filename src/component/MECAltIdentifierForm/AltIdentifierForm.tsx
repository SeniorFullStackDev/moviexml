import React, { useState } from 'react';
import { Box, MenuItem } from '@mui/material';
import { AltIdentifierType, FormType } from 'utils/types';
import { TextValidator } from 'react-material-ui-form-validator';
import MECContextTextValidator from 'component/ContextTextValidator/MECContextTextValidator';
import { SelectValidator } from 'react-material-ui-form-validator';
import MECContext from 'context/MECContext';
import _ from 'lodash';

interface Props extends  FormType {
    data:AltIdentifierType
}

export default function({ data, parentKey }:Props){

  const [formData, setFormData] = useState<AltIdentifierType>(data);

  const { mecJSON, setMECJSON } = React.useContext(MECContext);

  return (
    <Box sx = {{ m:1 }}>
      {/* <MECContextTextValidator
        name={`${parentKey}.Namespace`} 
        label="Namespace *" 
        validators={['required']}
        errorMessages={['this field is required']} /> */}

      <SelectValidator
        name={`${parentKey}.Namespace`} 
        label="Namespace *" 
        validators={['required']}
        value = {_.get(mecJSON, `${parentKey}.Namespace`, 'EIDR')}
        errorMessages={['this field is required']} 
        onChange = {(e:any) => {
          _.set(mecJSON, e.target.name, e.target.value);
          setMECJSON({ ...mecJSON });
        }}
      >
        <MenuItem value = "EIDR">EIDR</MenuItem>
        <MenuItem value = "ISAN">ISAN</MenuItem>
        <MenuItem value = "IMDB">IMDB</MenuItem>
        <MenuItem value = "ORG">ORG</MenuItem>
      </SelectValidator>

      <br/>
      <MECContextTextValidator
        name={`${parentKey}.Identifier`} 
        label="Identifier *" 
        validators={['required']}
        errorMessages={['this field is required']} />
    </Box>
  )
}