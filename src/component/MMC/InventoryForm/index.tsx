import { Box, TextField, Typography  } from '@mui/material';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import { FormType } from 'utils/types';

export default function({ parentKey }:FormType){
  return (
    <Box>
      <Typography >Inventory</Typography>
      <Box sx = {{ pl:4 }}>
        <Typography >Audio</Typography>
        <Box sx = {{ pl:4 }}>
          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name="Inventory.Audio.@AudioTrackID" 
            label="@AudioTrackID *"/><br/>
          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name="Inventory.Audio.Type" 
            label="Type *"/><br/>
          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name="Inventory.Audio.Language" 
            label="Language *"/><br/>
          <Typography >ContainerReference</Typography>
          <Box sx = {{ pl:4 }}>
            <MMCContextTextValidator 
              validators={['required']} 
              errorMessages={['this field is required']} 
              name="Inventory.Audio.ContainerReference.ContainerLocation" 
              label="ContainerLocation *"/><br/>
          </Box>
        </Box>

        <Typography >Video</Typography>
        <Box sx = {{ pl:4 }}>
          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name="Inventory.Video.@VideoTrackID" 
            label="@VideoTrackID *"/><br/>
          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name="Inventory.Video.Type" 
            label="Type *"/><br/>

          <Typography >Picture</Typography>
          <Box sx = {{ pl:4 }}>
            <MMCContextTextValidator 
              validators={['required']} 
              errorMessages={['this field is required']} 
              name="Inventory.Video.Picture.AspectRatio" 
              label="AspectRatio *"/><br/>
            <MMCContextTextValidator 
              validators={['required']} 
              errorMessages={['this field is required']} 
              name="Inventory.Video.Picture.WidthPixels" 
              label="WidthPixels *"/><br/>
            <MMCContextTextValidator 
              validators={['required']} 
              errorMessages={['this field is required']} 
              name="Inventory.Video.Picture.HeightPixels" 
              label="HeightPixels *"/><br/>


            <Typography >MasteredColorVolume</Typography>
            <Box sx = {{ pl:4 }}>

              <Typography >PrimaryRChromaticity</Typography>
              <Box sx = {{ pl:4 }}>
                <MMCContextTextValidator 
                  validators={['required']} 
                  errorMessages={['this field is required']} 
                  name="Inventory.Video.Picture.MasteredColorVolume.PrimaryRChromaticity.ChromaticityCIEx" 
                  label="ChromaticityCIEx *"/><br/>
                <MMCContextTextValidator 
                  validators={['required']} 
                  errorMessages={['this field is required']} 
                  name="Inventory.Video.Picture.MasteredColorVolume.PrimaryRChromaticity.ChromaticityCIEy" 
                  label="ChromaticityCIEy *"/><br/>
              </Box>

              <Typography >PrimaryGChromaticity</Typography>
              <Box sx = {{ pl:4 }}>
                <MMCContextTextValidator 
                  validators={['required']} 
                  errorMessages={['this field is required']} 
                  name="Inventory.Video.Picture.MasteredColorVolume.PrimaryGChromaticity.ChromaticityCIEx" 
                  label="ChromaticityCIEx *"/><br/>
                <MMCContextTextValidator 
                  validators={['required']} 
                  errorMessages={['this field is required']} 
                  name="Inventory.Video.Picture.MasteredColorVolume.PrimaryGChromaticity.ChromaticityCIEy" 
                  label="ChromaticityCIEy *"/><br/>
              </Box>

              <Typography >PrimaryBChromaticity</Typography>
              <Box sx = {{ pl:4 }}>
                <MMCContextTextValidator 
                  validators={['required']} 
                  errorMessages={['this field is required']} 
                  name="Inventory.Video.Picture.MasteredColorVolume.PrimaryBChromaticity.ChromaticityCIEx" 
                  label="ChromaticityCIEx *"/><br/>
                <MMCContextTextValidator 
                  validators={['required']} 
                  errorMessages={['this field is required']} 
                  name="Inventory.Video.Picture.MasteredColorVolume.PrimaryBChromaticity.ChromaticityCIEy" 
                  label="ChromaticityCIEy *"/><br/>
              </Box>

              <Typography >WhitePointChromaticity</Typography>
              <Box sx = {{ pl:4 }}>
                <MMCContextTextValidator 
                  validators={['required']} 
                  errorMessages={['this field is required']} 
                  name="Inventory.Video.Picture.MasteredColorVolume.WhitePointChromaticity.ChromaticityCIEx" 
                  label="ChromaticityCIEx *"/><br/>
                <MMCContextTextValidator 
                  validators={['required']} 
                  errorMessages={['this field is required']} 
                  name="Inventory.Video.Picture.MasteredColorVolume.WhitePointChromaticity.ChromaticityCIEy" 
                  label="ChromaticityCIEy *"/><br/>
              </Box>

              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name="Inventory.Video.Picture.MasteredColorVolume.LuminanceMin" 
                label="LuminanceMin *"/><br/>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name="Inventory.Video.Picture.MasteredColorVolume.LuminanceMax" 
                label="LuminanceMax *"/><br/>

            </Box>

            <Typography >LightLevel</Typography>
            <Box sx = {{ pl:4 }}>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name="Inventory.Video.Picture.LightLevel.ContentMax" 
                label="ContentMax *"/><br/>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name="Inventory.Video.Picture.LightLevel.FrameAverageMax" 
                label="FrameAverageMax *"/><br/>
            </Box>

          </Box>

          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name="Inventory.Video.Language" 
            label="Language *"/><br/>

          <Typography >ContainerReference</Typography>
          <Box sx = {{ pl:4 }}>
            <MMCContextTextValidator 
              validators={['required']} 
              errorMessages={['this field is required']} 
              name="Inventory.Video.ContainerReference.ContainerLocation" 
              label="ContainerLocation *"/><br/>
          </Box>

        </Box>

        <Typography >Subtitle</Typography>
        <Box sx = {{ pl:4 }}>
          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name="Inventory.Subtitle.@SubtitleTrackID" 
            label="@SubtitleTrackID *"/><br/>
          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name="Inventory.Subtitle.Format" 
            label="Format *"/><br/>
          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name="Inventory.Subtitle.Type" 
            label="Type *"/><br/>
          <MMCContextTextValidator 
            validators={['required']} 
            errorMessages={['this field is required']} 
            name="Inventory.Subtitle.Language" 
            label="Language *"/><br/>

          <Typography >Encoding</Typography>
          <Box sx = {{ pl:4 }}>
            <Typography >FrameRate</Typography>
            <Box sx = {{ pl:4 }}>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name="Inventory.Subtitle.Encoding.FrameRate.@multiplier" 
                label="multiplier "/><br/>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name="Inventory.Subtitle.Encoding.FrameRate.@timecode" 
                label="timecode "/><br/>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name="Inventory.Subtitle.Encoding.FrameRate.value" 
                label="FrameRate *"/><br/>
            </Box>
          </Box>

          <Typography >ContainerReference</Typography>
          <Box sx = {{ pl:4 }}>
            <MMCContextTextValidator 
              validators={['required']} 
              errorMessages={['this field is required']} 
              name="Inventory.Subtitle.ContainerReference.ContainerLocation" 
              label="ContainerLocation *"/><br/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}