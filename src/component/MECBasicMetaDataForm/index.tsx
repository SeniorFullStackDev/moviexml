import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import MECLocalizedInForm from 'component/MECLocalizedInfoForm';

export default function MECBasicMetaDataForm() {
  return (
    <>
      <Typography>BasicMetadata-type</Typography>
      <Box sx = {{ pl:4 }}>
        {/* <MECContextTextValidator
          required
          validators={['required']}
          errorMessages={['this field is required']}
          name="BasicMetadata-type.@ContentID"
          label="@ContentID"
        /> */}

        <MECLocalizedInForm parentKey='BasicMetadata-type' />
        
        {/* <DesktopDatePicker 
          label="ReleaseDate"
          inputFormat="yyyy-MM-DD"
          value = {_.get(mecJSON, 'BasicMetadata-type.ReleaseDate', Date())}
          onChange={(newVal:any)=>{
            _.set(mecJSON, 'BasicMetadata-type.ReleaseDate', newVal.format('yyyy-MM-DD'));
            setMECJSON({ ...mecJSON });
          }}
          renderInput={(params:any) => <TextValidator {...params} />}
        /> */}
        
        {/* <MECReleaseHistoryForm parentKey='BasicMetadata-type' /> */}
        
        {/* movie, episode, promotion, season, series. */}

        {/* <SelectValidator
          name="BasicMetadata-type.WorkType" 
          required
          label="WorkType" 
          validators={['required']}
          value = {_.get(mecJSON, 'BasicMetadata-type.WorkType', 'movie')}
          errorMessages={['this field is required']} 
          onChange = {(e:any) => {
            _.set(mecJSON, e.target.name, e.target.value);
            setMECJSON({ ...mecJSON });
          }}
        >
          <MenuItem value = "movie">Movie</MenuItem>
          <MenuItem value = "episode">Eovie</MenuItem>
          <MenuItem value = "promotion">Promotion</MenuItem>
          <MenuItem value = "season">Season</MenuItem>
          <MenuItem value = "series">Series</MenuItem>
        </SelectValidator> */}
          
        {/* <AltIdentifierForm parentKey='BasicMetadata-type' /> */}

        {/* <MECRatingSetForm parentKey='BasicMetadata-type' /> */}
        <br/>
        {/* <MECPeopleForm parentKey='BasicMetadata-type' /> */}
          
        {/* <MECContextTextValidator
          name="BasicMetadata-type.OriginalLanguage" 
          label="OriginalLanguage *" 
          validators={['required']}
          errorMessages={['this field is required']} /> */}

        {/* <MECAssociatedOrgForm parentKey='BasicMetadata-type' /> */}

        {/* <SequenceInfoForm parentKey='BasicMetadata-type' /> */}

        {/* <MECParentForm parentKey='BasicMetadata-type' /> */}
      </Box>
    </>
  );
}