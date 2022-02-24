import { Box, TextField, Typography  } from '@mui/material';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import { FormType } from 'utils/types';

export default function(){
  return (
    <Box>
      <Typography >ALIDExperienceMaps</Typography>
      <Box sx = {{ pl:4 }}>
        <Typography >ALIDExperienceMap</Typography>
        <Box sx = {{ pl:4 }}>
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
    </Box>
  );
}