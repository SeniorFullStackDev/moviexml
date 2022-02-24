import { Box, TextField, Typography  } from '@mui/material';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import { PresentationType, FormType } from 'utils/types';
import AudioTrackReferenceForm from './TrackReference/AudioTrackReferenceForm';
import SubTitleTrackReferenceForm from './TrackReference/SubTitleTrackReferenceForm';

interface Props extends FormType {
    data:PresentationType;
}

export default function({ parentKey, data }:Props){
  return (
    <Box sx = {{ pl:4 }}>
      <MMCContextTextValidator 
        validators={['required']} 
        errorMessages={['this field is required']} 
        name="parentKey.@PresentationID" 
        label="@PresentationID *"/><br/>

      <Typography >TrackMetadata</Typography>
      <Box sx = {{ pl:4 }}>
        <MMCContextTextValidator 
          validators={['required']} 
          errorMessages={['this field is required']} 
          name="parentKey.TrackMetadata.TrackSelectionNumber" 
          label="TrackSelectionNumber *"/><br/>
        <Box sx = {{ pl:4 }}>
          <Typography >VideoTrackReference</Typography>
          {/* <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name="parentKey.TrackMetadata.VideoTrackReference.VideoTrackID" 
            label="VideoTrackID *"/><br/> */}

          {/* <AudioTrackReferenceForm parentKey = "parentKey.TrackMetadata" /> */}
          {/* <SubTitleTrackReferenceForm parentKey = "parentKey.TrackMetadata" /> */}
        </Box>
      </Box>
    </Box>
  );
}