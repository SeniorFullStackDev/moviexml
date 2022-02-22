import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import { FormType, PeopleType } from 'utils/types';
import MenuItem from '@mui/material/MenuItem';
import languages from 'config/languages.json';
import MECContext from 'context/MECContext';
import _ from 'lodash';
import ContextTextValidator from 'component/ContextTextValidator';


interface PeopleFormType extends FormType {
    data:PeopleType,
}

export default ({ data, parentKey }:PeopleFormType) => {

  const { mecJSON, setMECJSON } = React.useContext(MECContext);

  const peopleData = _.get(mecJSON, parentKey, { Name:'' });

  // Director, Producer, Actor, Writer and Creator
  return (
    <Box sx = {{ pl:4 }}>
      <Typography >Job</Typography>
      <Box sx = {{ pl:4 }}>
        <SelectValidator
          name = {`${parentKey}.Job.JobFunction`} 
          label = "JobFunction *" 
          defaultValue="Director"
          validators={['required']}
          errorMessages={['this field is required']}
          onChange = {(event:any)=>{
            _.set(mecJSON, event.target.name, event.target.value);
            setMECJSON({ ...mecJSON });
          }}
        >
          <MenuItem value="Director">Director</MenuItem>
          <MenuItem value="Producer">Producer</MenuItem>
          <MenuItem value="Actor">Actor</MenuItem>
          <MenuItem value="Writer">Writer</MenuItem>
          <MenuItem value="Creator">Creator</MenuItem>
        </SelectValidator>
        <br/>
        <ContextTextValidator
          name = {`${parentKey}.Job.BillingBlockOrder`} label = "BillingBlockOrder" />
        <br/>
        <ContextTextValidator
          name = {`${parentKey}.Job.Character`} label = "Character" />
      </Box>

      <Typography >Name</Typography>
      <Box sx = {{ pl:4 }}>
        <Typography >DisplayName</Typography>
        <Box sx = {{ pl:4 }}>
          <ContextTextValidator
            name = {`${parentKey}.Name.DisplayName`} 
            label = "DisplayName *" 
            validators={['required']}
            errorMessages={['this field is required']} />
        </Box>
        <Box sx = {{ pl:4 }}>
          <SelectValidator
            defaultValue = "en-US"
            value={peopleData.Name['@language']}
            validators={['required']}
            errorMessages={['this field is required']}
            onChange = {(event:any)=>{
              _.set(mecJSON, event.target.name, event.target.value);
              setMECJSON({ ...mecJSON });
            }}
            name = {`${parentKey}.Name.@language`}
            label="@Language *"
          >
            { languages.map((ele:any, index:number)=><MenuItem key={index} value={ele.code}>{ele.language}</MenuItem>) }
          </SelectValidator>
        </Box>
      </Box>
    </Box>
  )
}