import * as React from 'react';
import { Box, MenuItem, Typography } from '@mui/material';
import { TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import { FormType } from 'utils/types';
import ratings from 'config/ratings.json';
import MECContext from 'context/MECContext';
import _ from 'lodash';

export default ({ parentKey }:FormType) => {

  const { mecJSON, setMECJSON } = React.useContext(MECContext);
  
  const country = _.get(mecJSON, `${parentKey}.Rating.Region.Country`);

  const countries:any[] = [];
  ratings.forEach(element => {
    const index = countries.indexOf(element.region);
    if(index == -1){
      countries.push(element.region);
    }
  });


  const systems:any[] = [];
  ratings.forEach(element => {
    const index = systems.indexOf(element.system);
    if(element.region == country && index == -1){
      systems.push(element.system);
    }
  });

  const values:any[] = [];
  const system = _.get(mecJSON, `${parentKey}.Rating.System`,'');
  if(system){
    ratings.forEach(element => {
      const index = values.indexOf(element.ratings);
      if(element.region == country && element.system == system && index == -1){
        values.push(element.ratings);
      }
    });
  }

  const value = _.get(mecJSON, `${parentKey}.Rating.Value`,'');
  
  return(
    <Box sx = {{ pl:4 }}>
      <Typography >Region</Typography>
      <Box sx = {{ pl:4 }}>
        <SelectValidator
          name = {`${parentKey}.Rating.Region.Country`}
          value = {country}
          label = "Country *" 
          validators={['required']}
          errorMessages={['this field is required']}
          onChange = {(event:any)=>{
            _.set(mecJSON, event.target.name, event.target.value);
            setMECJSON({ ...mecJSON });
          }}
        >
          {
            countries.map((ele, index)=><MenuItem key = {index} value = {ele}>{ele}</MenuItem>)
          }
        </SelectValidator>
      </Box>
      <SelectValidator
        name = {`${parentKey}.Rating.System`} 
        label = "System *" 
        value = {system}
        validators={['required']}
        errorMessages={['this field is required']}
        onChange = {(event:any)=>{
          _.set(mecJSON, event.target.name, event.target.value);
          setMECJSON({ ...mecJSON });
        }}
      >
        {
          systems.map((ele, index)=><MenuItem key = {index} value = {ele}>{ele}</MenuItem>)
        }
      </SelectValidator>
      <br/>
      <SelectValidator
        name = {`${parentKey}.Rating.Value`}  
        value = {value}
        label = "Value *" 
        validators={['required']}
        errorMessages={['this field is required']}
        onChange = {(event:any)=>{
          _.set(mecJSON, event.target.name, event.target.value);
          setMECJSON({ ...mecJSON });
        }}
      >
        {
          values.map((ele, index)=><MenuItem key = {index} value = {ele}>{ele}</MenuItem>)
        } 
      </SelectValidator>
    </Box>
  )
}