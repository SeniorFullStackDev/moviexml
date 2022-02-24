import { Box, TextField, Typography  } from '@mui/material';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import { ExperienceType, FormType } from 'utils/types';

interface Props extends FormType {
    data:ExperienceType;
}

export default function({ parentKey, data }:Props){
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
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.Audiovisual.Type`}
          label="Type *"/><br/>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.Audiovisual.SubType`} 
          label="SubType *"/><br/>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.Audiovisual.PlayableSequenceID`} 
          label="PlayableSequenceID *"/><br/>
      </Box>
    </Box>
  );
}