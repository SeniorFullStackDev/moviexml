import { Box, TextField, Typography  } from '@mui/material';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import { FormType } from 'utils/types';

export default function({ parentKey }:FormType){
  return (
    <Box>
      <Typography >Compatibility</Typography>
      <Box sx = {{ pl:4 }}>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.SpecVersion`} 
          label="SpecVersion *"/><br/>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.Profile`} 
          label="Profile *"/><br/>
      </Box>
    </Box>)
}