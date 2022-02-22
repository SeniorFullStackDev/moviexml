import * as React from 'react';
import { Box, MenuItem, Typography } from '@mui/material';
import { TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import { FormType } from 'utils/types';
import ratings from 'config/ratings.json';
import MECContext from 'context/MECContext';
import _ from 'lodash';

export default ({ parentKey }:FormType) => {

  const { mecJSON, setMECJSON } = React.useContext(MECContext);

  const [countries, setCountries] = React.useState<any[]>([]);
  const [systems, setSystems] = React.useState<any[]>([]);
  const [values, setValues] = React.useState<any[]>([]);

  const [country, setCountry] = React.useState();
  const [system, setSystem] = React.useState();
  const [value, setValue] = React.useState();


  React.useEffect(()=>{
    const temArr:any[] = [];
    ratings.forEach(element => {
      const index = temArr.indexOf(element.region);
      if(index == -1){
        temArr.push(element.region);
      }
      setCountries(temArr);
    });
  }, []);

  React.useEffect(()=>{
    const temArr:any[] = [];
    ratings.forEach(element => {
      const index = temArr.indexOf(element.system);
      if(element.region == country && index == -1){
        temArr.push(element.system);
      }
      setSystems(temArr);
    });
    setSystem(undefined);
    setValue(undefined);
  }, [country]);

  React.useEffect(()=>{
    const temArr:any[] = [];
    if(system){
      ratings.forEach(element => {
        const index = temArr.indexOf(element.ratings);
        if(element.region == country && element.system == system && index == -1){
          temArr.push(element.ratings);
        }
        setValues(temArr);
      });
      setValue(undefined);
    }
  }, [country, system]);
  
  return(
    <Box sx = {{ pl:4 }}>
      <Typography >Region</Typography>
      <Box sx = {{ pl:4 }}>
        <SelectValidator
          name = {`${parentKey}.Rating.Region.Country`}
          label = "Country *" 
          validators={['required']}
          errorMessages={['this field is required']}
          onChange = {(event:any)=>{
            setCountry(event.target.value);

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
        validators={['required']}
        errorMessages={['this field is required']}
        onChange = {(event:any)=>{
          setSystem(event.target.value);
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
        label = "Value *" 
        validators={['required']}
        errorMessages={['this field is required']}
        onChange = {(event:any)=>{
          setValue(event.target.value);
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