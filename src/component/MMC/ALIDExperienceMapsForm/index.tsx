import { Box, TextField, Typography  } from '@mui/material';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import { FormType } from 'utils/types';

export default function(){
  return (
    <Box sx = {{ m:1 }} id="mmc-ALIDExperienceMapsForm">
      <Typography >ALIDExperienceMaps</Typography>
      <Box>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name="ALIDExperienceMaps.ALIDExperienceMap.ALID" 
          label="ALID *"/><br/>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name="ALIDExperienceMaps.ALIDExperienceMap.ExperienceID" 
          label="ExperienceID *"/><br/>
      </Box>
    </Box>
  );
}