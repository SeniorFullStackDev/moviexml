import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { 
  Box, 
  MenuItem, 
  Typography
} from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import CustomTextValidator from 'component/CustomTextValidator';
import _ from 'lodash';
import languages from 'config/languages.json';

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

interface Props {
  data?:any
}

const Index = React.forwardRef(({ data }:Props, ref) => {

  // const [formData, setFormData] = useState(data);
  const formDataRef = React.useRef<any>(data || {});
  const formRef = React.useRef<any>();
  const [count, setCount] = useState(0);
  // const [movieTitle, setMovieTitle] = useState<string>();

  const contentIDRef = useRef<any>();

  useEffect(()=>{
    console.log('languages --->', languages);
    if(data){
      formDataRef.current = data;
      setCount(count + 1);
    }
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
        }
        const source:any = {};
        Object.keys(formDataRef.current).map((key, index)=>{
          _.set(source, key, formDataRef.current[key]);
        });
        return source;
      },
      setMovieTitle:(title:string)=>{
        console.log('setMovieTitle--->', title);
        // update @contentID
        const expectedContentID = `md:cid:org:amzn_studios:${title}`;
        if(contentIDRef.current) contentIDRef.current.setValue(expectedContentID);

      }
    }
  ), [data]);

  const onChangeForm = (e:any) => {
    formDataRef.current = { ...formDataRef.current, [e.target.name]:e.target.value }
  }

  const handleChangeReleaseDate = (newValue:any) => {
    formDataRef.current.ReleaseDate = newValue;
    setCount(count + 1);
  }

  const handleChangeReleaseYear = (newValue:any) => {
    formDataRef.current.ReleaseYear = newValue;
    setCount(count + 1);
  }

  return (
    <Box>
      <Typography variant="h5">MEC</Typography>
      <ValidatorForm
        ref = {formRef}
        onChange = {onChangeForm}
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
            <CustomTextValidator
              ref = {contentIDRef}
              formData = {formDataRef.current}
              validators={['required']}
              errorMessages={['this field is required']}
              name="BasicMetadata-type.@ContentID"
              label="@ContentID *"
            />

            <MECLocalizedInfoForm parentKey='BasicMetadata-type' />

            <DesktopDatePicker 
              label="ReleaseYear"
              inputFormat="yyyy"
              value = {formDataRef.current.ReleaseYear}
              onChange={handleChangeReleaseYear}
              renderInput={(params:any) => <TextValidator {...params} />}
            />
            <br/>
            <DesktopDatePicker 
              label="ReleaseDate"
              inputFormat="yyyy-MM-DD"
              value = {formDataRef.current.ReleaseDate}
              onChange={handleChangeReleaseDate}
              renderInput={(params:any) => <TextValidator {...params} />}
            />
            <br/>
            <MECReleaseHistoryForm parentKey='BasicMetadata-type' data = {formDataRef.current} />
            <br/>
            {/* movie, episode, promotion, season, series. */}
            <SelectValidator
              formData = {formDataRef.current} 
              name="BasicMetadata-type.WorkType" 
              label="WorkType *" 
              validators={['required']}
              defaultValue = "movie"
              errorMessages={['this field is required']} >
              <MenuItem value = "movie">Movie</MenuItem>
              <MenuItem value = "episode">Eovie</MenuItem>
              <MenuItem value = "promotion">Promotion</MenuItem>
              <MenuItem value = "season">Season</MenuItem>
              <MenuItem value = "series">Series</MenuItem>
            </SelectValidator>
            
            <AltIdentifierForm parentKey='BasicMetadata-type' data={formDataRef.current.AltIdentifier} />

            <MECRatingSetForm parentKey='BasicMetadata-type' />
            <br/>
            <MECPeopleForm parentKey='BasicMetadata-type' />
            
            <CustomTextValidator
              formData = {formDataRef.current} 
              name="BasicMetadata-type.OriginalLanguage" 
              label="OriginalLanguage *" 
              validators={['required']}
              errorMessages={['this field is required']} />

            <MECAssociatedOrgForm parentKey='BasicMetadata-type' data = {formDataRef.current} />

            <SequenceInfoForm parentKey='BasicMetadata-type' data = {formDataRef.current} />

            <MECParentForm parentKey='BasicMetadata-type' data = {formDataRef.current} />

          </Box>

          <MECCompanyDisplayCreditForm parentKey='CompanyDisplayCredit' data = {formDataRef.current} />

        </Box>
      </ValidatorForm>
    </Box>
  )
});

export default Index;