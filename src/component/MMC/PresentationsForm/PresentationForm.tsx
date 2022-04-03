import { Box, TextField, Typography  } from '@mui/material';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import { PresentationType, FormType } from 'utils/types';
import VideoTrackReferenceForm from './TrackReference/VideoTrackReferenceForm';
import AudioTrackReferenceForm from './TrackReference/AudioTrackReferenceForm';
import SubTitleTrackReferenceForm from './TrackReference/SubTitleTrackReferenceForm';

export default function({ parentKey }:FormType){
  return (
    <Box sx = {{ pl:4 }}>
      <MMCContextTextValidator 
        validators={['required']} 
        errorMessages={['this field is required']} 
        name={`${parentKey}.@PresentationID`} 
        label="@PresentationID *"/><br/>

      <Typography >TrackMetadata</Typography>
      <Box sx = {{ pl:4 }}>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name={`${parentKey}.TrackMetadata.TrackSelectionNumber`} 
          label="TrackSelectionNumber *"/><br/>
        <br/>
        <VideoTrackReferenceForm parentKey={`${parentKey}.TrackMetadata`} />
        <br/>
        <AudioTrackReferenceForm parentKey={`${parentKey}.TrackMetadata`}/>
        <br/>
        <SubTitleTrackReferenceForm parentKey={`${parentKey}.TrackMetadata`} />
      </Box>
    </Box>
  );
}