import React, { useImperativeHandle, useRef } from 'react';
import { 
  Box, 
  MenuItem, 
  Typography
} from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import _ from 'lodash';

import MECLocalizedInfoForm from 'component/MECLocalizedInfoForm';
import MECRatingSetForm from 'component/MECRatingSetForm';
import MECPeopleForm from 'component/MECPeopleForm';
import MECReleaseHistoryForm from 'component/MECReleaseHistoryForm';
import AltIdentifierForm from 'component/MECAltIdentifierForm';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MECAssociatedOrgForm from 'component/MECAssociatedOrgForm';
import SequenceInfoForm from 'component/MECSequenceInfoForm';
import MECParentForm from 'component/MECParentForm';
import MECCompanyDisplayCreditForm from 'component/MECCompanyDisplayCreditForm'
import { SelectValidator } from 'react-material-ui-form-validator';
import MECContext from 'context/MECContext';
import MECContextTextValidator from 'component/ContextTextValidator/MECContextTextValidator';

interface Props {
  data?:any
}

const Index = React.forwardRef(({ data }:Props, ref) => {

  const formRef = React.useRef<any>();

  const { mecJSON, setMECJSON } = React.useContext(MECContext);

  const contentIDRef = useRef<any>();

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
        }
        return mecJSON;
      },
      setMovieTitle:(title:string)=>{

        const contentID = `md:cid:org:amzn_studios:${title}`;
        _.set(mecJSON, 'BasicMetadata-type.@ContentID', contentID);
        setMECJSON({ ...mecJSON });
        if(contentIDRef.current) contentIDRef.current.setValue(contentID);
      }
    }
  ), [data]);

  return (
    <Box>
      <Typography variant="h5">MEC</Typography>
      <ValidatorForm
        ref = {formRef}
        onSubmit = {()=>{
          return false;
        }}
      >
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
        >
          <Typography >BasicMetadata-type</Typography>
          <Box sx = {{ pl:4 }}>
            <MECContextTextValidator
              ref = {contentIDRef}
              validators={['required']}
              errorMessages={['this field is required']}
              name="BasicMetadata-type.@ContentID"
              label="@ContentID *"
            />

            <MECLocalizedInfoForm parentKey='BasicMetadata-type' />

            <DesktopDatePicker 
              label="ReleaseYear"
              inputFormat="yyyy"
              value = {_.get(mecJSON, 'BasicMetadata-type.ReleaseYear', Date())}
              onChange={(newVal:any)=>{
                _.set(mecJSON, 'BasicMetadata-type.ReleaseYear', newVal.format('yyyy'));
                setMECJSON({ ...mecJSON });
              }}
              renderInput={(params:any) => <TextValidator {...params} />}
            />
            <br/>
            <DesktopDatePicker 
              label="ReleaseDate"
              inputFormat="yyyy-MM-DD"
              value = {_.get(mecJSON, 'BasicMetadata-type.ReleaseDate', Date())}
              onChange={(newVal:any)=>{
                _.set(mecJSON, 'BasicMetadata-type.ReleaseDate', newVal.format('yyyy-MM-DD'));
                setMECJSON({ ...mecJSON });
              }}
              renderInput={(params:any) => <TextValidator {...params} />}
            />
            <br/>
            <MECReleaseHistoryForm parentKey='BasicMetadata-type' />
            <br/>
            {/* movie, episode, promotion, season, series. */}
            <SelectValidator
              name="BasicMetadata-type.WorkType" 
              label="WorkType *" 
              validators={['required']}
              defaultValue = "movie"
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
            </SelectValidator>
            
            <AltIdentifierForm parentKey='BasicMetadata-type' />

            <MECRatingSetForm parentKey='BasicMetadata-type' />
            <br/>
            <MECPeopleForm parentKey='BasicMetadata-type' />
            
            <MECContextTextValidator
              name="BasicMetadata-type.OriginalLanguage" 
              label="OriginalLanguage *" 
              validators={['required']}
              errorMessages={['this field is required']} />

            <MECAssociatedOrgForm parentKey='BasicMetadata-type' />

            <SequenceInfoForm parentKey='BasicMetadata-type' />

            <MECParentForm parentKey='BasicMetadata-type' />

          </Box>

          <MECCompanyDisplayCreditForm parentKey='CompanyDisplayCredit' />

        </Box>
      </ValidatorForm>
    </Box>
  )
});

export default Index;