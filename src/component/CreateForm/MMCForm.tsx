import React, { useImperativeHandle, useRef, useEffect, useState } from 'react';
import { Box, TextField, Typography  } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import MMCContext from 'context/MMCContext';
import _ from 'lodash';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';


interface Props {
  data?:any
}

const Index = React.forwardRef(({ data }:Props, ref) => {

  // const [formData, setFormData] = useState(data);
  const formDataRef = React.useRef(data || {});
  const formRef = React.useRef<any>();
  const { mmcJSON, setMMCJSON } = React.useContext(MMCContext);

  const [count, setCount] = useState(0);

  useEffect(()=>{
    formDataRef.current = data;
    setCount(count + 1);
  }, [data])

  useImperativeHandle(ref, () => (
    {
      getFormData: () => {
        if(formRef.current){
          formRef.current.isFormValid().then((isValid:boolean)=>{
            if(!isValid){
              formRef.current.submit();
              return;
            }
          })
          return mmcJSON;
        }
        return {};
      }
    }
  ), [data]);

  return (
    <Box>
      <Typography variant="h5">MMC</Typography>
      <ValidatorForm
        ref = {formRef}
        autoComplete="off"
        onSubmit = {()=>{
          return false;
        }}
      >
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
        >
          <Typography >MediaManifest-type</Typography>
          <Box sx = {{ pl:4 }}>
            <Typography >Compatibility</Typography>
            <Box sx = {{ pl:4 }}>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name="Compatibility.SpecVersion" 
                label="SpecVersion *"/><br/>
              <MMCContextTextValidator 
                validators={['required']} 
                errorMessages={['this field is required']} 
                name="Compatibility.Profile" 
                label="Profile *"/><br/>
            </Box>

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

            <Typography >Presentations *</Typography>
            <Box sx = {{ pl:4 }}>
              <Typography >Presentation *</Typography>
              <Box sx = {{ pl:4 }}>
                <MMCContextTextValidator 
                  validators={['required']} 
                  errorMessages={['this field is required']} 
                  name="Presentations.Presentation.@PresentationID" 
                  label="@PresentationID *"/><br/>

                <Typography >TrackMetadata</Typography>
                <Box sx = {{ pl:4 }}>
                  <MMCContextTextValidator 
                    validators={['required']} 
                    errorMessages={['this field is required']} 
                    name="Presentations.Presentation.TrackMetadata.TrackSelectionNumber" 
                    label="TrackSelectionNumber *"/><br/>

                  <Typography >VideoTrackReference</Typography>
                  <Box sx = {{ pl:4 }}>
                    <MMCContextTextValidator 
                      validators={['required']} 
                      errorMessages={['this field is required']} 
                      name="Presentations.Presentation.TrackMetadata.VideoTrackReference.VideoTrackID" 
                      label="VideoTrackID *"/><br/>
                  </Box>

                  <Typography >AudioTrackReference</Typography>
                  <Box sx = {{ pl:4 }}>
                    <MMCContextTextValidator 
                      validators={['required']} 
                      errorMessages={['this field is required']} 
                      name="Presentations.Presentation.TrackMetadata.AudioTrackReference.AudioTrackID" 
                      label="AudioTrackID *"/><br/>
                  </Box>

                  <Typography >SubtitleTrackReference</Typography>
                  <Box sx = {{ pl:4 }}>
                    <MMCContextTextValidator 
                      validators={['required']} 
                      errorMessages={['this field is required']} 
                      name="Presentations.Presentation.TrackMetadata.SubtitleTrackReference.SubtitleTrackID" 
                      label="SubtitleTrackID *"/><br/>
                  </Box>

                </Box>

              </Box>
            </Box>

            <Typography >PlayableSequences</Typography>
            <Box sx = {{ pl:4 }}>
              <Typography >PlayableSequence</Typography>
              <Box sx = {{ pl:4 }}>
                <MMCContextTextValidator 
                  validators={['required']} 
                  errorMessages={['this field is required']} 
                  name="PlayableSequences.PlayableSequence.@PlayableSequenceID" 
                  label="PlayableSequenceID *"/><br/>
                <Typography >Clip</Typography>
                <Box sx = {{ pl:4 }}>
                  <MMCContextTextValidator 
                    validators={['required']} 
                    errorMessages={['this field is required']} 
                    name="PlayableSequences.PlayableSequence.Clip.@sequence" 
                    label="@sequence *"/><br/>
                  <MMCContextTextValidator 
                    validators={['required']} 
                    errorMessages={['this field is required']} 
                    name="PlayableSequences.PlayableSequence.Clip.PresentationID" 
                    label="PresentationID *"/><br/>
                </Box>
              </Box>
            </Box>
            <Typography >Experiences</Typography>
            <Box sx = {{ pl:4 }}>
              <Typography >Experience</Typography>
              <Box sx = {{ pl:4 }}>
                <MMCContextTextValidator 
                  validators={['required']} 
                  errorMessages={['this field is required']} 
                  name="Experiences.Experience.@ExperienceID" 
                  label="@ExperienceID *"/><br/>
                <MMCContextTextValidator 
                  validators={['required']} 
                  errorMessages={['this field is required']} 
                  name="Experiences.Experience.@version" 
                  label="@version *"/><br/>
                <Typography >Audiovisual</Typography>
                <Box sx = {{ pl:4 }}>
                  <MMCContextTextValidator 
                    validators={['required']} 
                    errorMessages={['this field is required']} 
                    name="Experiences.Experience.Audiovisual.@ContentID" 
                    label="@ContentID *"/><br/>
                  <MMCContextTextValidator 
                    validators={['required']} 
                    errorMessages={['this field is required']} 
                    name="Experiences.Experience.Audiovisual.Type" 
                    label="Type *"/><br/>
                  <MMCContextTextValidator 
                    validators={['required']} 
                    errorMessages={['this field is required']} 
                    name="Experiences.Experience.Audiovisual.SubType" 
                    label="SubType *"/><br/>
                  <MMCContextTextValidator 
                    validators={['required']} 
                    errorMessages={['this field is required']} 
                    name="Experiences.Experience.Audiovisual.PlayableSequenceID" 
                    label="PlayableSequenceID *"/><br/>
                </Box>
              </Box>
            </Box>

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
        </Box>
      </ValidatorForm>
    </Box>
  )
});

export default Index;