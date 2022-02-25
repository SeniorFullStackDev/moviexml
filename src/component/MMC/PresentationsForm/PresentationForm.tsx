import { Box, TextField, Typography  } from '@mui/material';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import { PresentationType, FormType } from 'utils/types';
import AudioTrackReferenceForm from './TrackReference/AudioTrackReferenceForm';
import SubTitleTrackReferenceForm from './TrackReference/SubTitleTrackReferenceForm';

export default function({ parentKey }:FormType){
  return (
    <Box sx = {{ pl:4 }}>
      <MMCContextTextValidator 
        validators={['required']} 
        errorMessages={['this field is required']} 
        name={`${parentKey}.Presentation.@PresentationID`} 
        label="@PresentationID *"/><br/>

      <Typography >TrackMetadata</Typography>
      <Box sx = {{ pl:4 }}>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.Presentation.TrackMetadata.TrackSelectionNumber`} 
          label="TrackSelectionNumber *"/><br/>
      </Box>
    </Box>
  );
}