import React from 'react';
import { Box, MenuItem, TextField, Typography  } from '@mui/material';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import MMCContext from 'context/MMCContext';
import { SelectValidator } from 'react-material-ui-form-validator';
import { ExperienceType, FormType } from 'utils/types';
import _ from 'lodash';

interface Props extends FormType {
    data:ExperienceType;
}

export default function({ parentKey, data }:Props){
  const { mmcJSON, setMMCJSON } = React.useContext(MMCContext)
  return (
    <Box sx = {{ m:1 }}>
      <MMCContextTextValidator 
        validators={['required']} 
        errorMessages={['this field is required']} 
        name={`${parentKey}.@ExperienceID`} 
        label="@ExperienceID *"/><br/>
      <MMCContextTextValidator 
        validators={['required']} 
        errorMessages={['this field is required']} 
        name={`${parentKey}.@version`} 
        label="@version *"/><br/>
      <Typography >Audiovisual</Typography>
      <Box sx = {{ pl:4 }}>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.Audiovisual.@ContentID`} 
          label="@ContentID *"/><br/>
        <SelectValidator
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.Audiovisual.Type`}
          label="Type *"
          onChange = {(e:any) => {
            _.set(mmcJSON, e.target.name, e.target.value);
            setMMCJSON({ ...mmcJSON });
          }}
          value = {_.get(mmcJSON, `${parentKey}.Audiovisual.Type`)}
        >
          <MenuItem value = "Main">Main</MenuItem>
          <MenuItem value = "Promotion">Promotion</MenuItem>
        </SelectValidator>
        
        <SelectValidator
          name={`${parentKey}.Audiovisual.SubType`} 
          value = {_.get(mmcJSON, `${parentKey}.Audiovisual.Type`)}
          onChange = {(e:any) => {
            _.set(mmcJSON, e.target.name, e.target.value);
            setMMCJSON({ ...mmcJSON });
          }}
          label="SubType"
        >
          <MenuItem value = "Feature">Feature</MenuItem>
          <MenuItem value = "Default">Default </MenuItem>
          <MenuItem value = "Trailer">Trailer </MenuItem>
        </SelectValidator>

        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.Audiovisual.PlayableSequenceID`} 
          label="PlayableSequenceID *"/><br/>
      </Box>
    </Box>
  );
}