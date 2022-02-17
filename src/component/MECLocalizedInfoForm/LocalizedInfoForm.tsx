import React, { useEffect } from 'react';
import { 
  Box, 
  TextField, 
  Typography, 
  Button,
  Accordion, 
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import MenuItem from '@mui/material/MenuItem';
import CustomTextValidator from 'component/CustomTextValidator';

import languages from 'config/languages.json';
import resolutions from 'config/resolutions.json';
import purposes from 'config/ArtReference.purposes.json';
import { LocalizedInfoType } from 'utils/types';
import ArtReferenceForm from './ArtReferenceForm';


interface Props {
    data:LocalizedInfoType;
    onChangeLanguage:(lang:string)=>void;
}

export default ({ data, onChangeLanguage }:Props) => {

  const [localizedInfo, setLocalizedInfo] = React.useState(data);

  useEffect(()=>{
    'loaded...'
  }, [])

  const onChange = (e:any) => {
    setLocalizedInfo({ ...localizedInfo, [e.target.key]:e.target.value });
    onChangeLanguage(e.target.value);
  }

  return (
    <Box sx = {{ pl:4 }}>
      <SelectValidator
        defaultValue = "en-US"
        value={localizedInfo['@Language']}
        validators={['required']}
        errorMessages={['this field is required']}
        onChange = {onChange}
        name="@Language"
        label="@Language *"
      >
        { languages.map((ele:any, index:number)=><MenuItem key={index} value={ele.code}>{ele.language}</MenuItem>) }
      </SelectValidator>
      <br/>
      <CustomTextValidator
        formData = {data}
        name="TitleDisplay19"
        label="TitleDisplay19"
      />
      <br/>
      <CustomTextValidator
        formData = {data}
        name="TitleDisplay60"
        label="TitleDisplay60"
      />
      <br/>
      <CustomTextValidator
        formData = {data}
        validators={['required']}
        errorMessages={['this field is required']}
        label="TitleDisplayUnlimited *"
        name="TitleDisplayUnlimited"
      />

      <ArtReferenceForm artreferences={localizedInfo.ArtReference}/>


      <CustomTextValidator
        formData = {data} name="Summary190" label="Summary190" />
      <br/>
      <CustomTextValidator
        formData = {data} 
        name="Summary400" 
        label="Summary400 *" 
        style = {{ width:'100%' }}
        multiline
        rows={6}
        validators={['required']}
        errorMessages={['this field is required']} />
      <br/>
      <CustomTextValidator
        formData = {data} 
        name="Summary4000" 
        label="Summary4000"
        style = {{ width:'100%' }}
        multiline
        rows={6}
      />

      <Typography >Genre</Typography>
      <Box sx = {{ pl:4 }}>
        <CustomTextValidator
          formData = {data} name="Genre.@source" label="@source" />
        <CustomTextValidator
          formData = {data} 
          name="Genre.@id" 
          label="@id *" 
          validators={['required']}
          errorMessages={['this field is required']} />
        <CustomTextValidator
          formData = {data} name="Genre.@level" label="@level" />
      </Box>

      <CustomTextValidator
        formData = {data} name="Keyword" label="Keyword" />
      <br />
      <CustomTextValidator
        formData = {data} name="VersionNotes" label="VersionNotes" />

      <Typography >Region</Typography>
      <Box sx = {{ pl:4 }}>
        <CustomTextValidator
          formData = {data} name="Region.Country" label="Country" />
      </Box>

      <CustomTextValidator
        formData = {data} name="OriginalTitle" label="OriginalTitle" />
      <br />
      <CustomTextValidator
        formData = {data} name="CopyrightLine" label="CopyrightLine" />
      <br />
      <CustomTextValidator
        formData = {data} name="PeopleLocal" label="PeopleLocal" />
      <CustomTextValidator
        formData = {data} name="Description" label="Description" />
      {/* <Typography >ReleaseOrg</Typography>
            <Box sx = {{ pl:4 }}>
              <CustomTextValidator
              formData = {data} name="ReleaseOrg.@organizationID" label="@organizationID"/>
              <CustomTextValidator
              formData = {data} name="ReleaseOrg.@idType" label="@idType"/>
              <CustomTextValidator
              formData = {data} name="ReleaseOrg.@role" label="@role"/>
              <br/>
              <CustomTextValidator
              formData = {data} 
                name="ReleaseOrg.DisplayName" 
                label="DisplayName *" 
                validators={['required']}
                errorMessages={['this field is required']}/>
              <br/>
              <CustomTextValidator
              formData = {data} name="ReleaseOrg.SortName" label="SortName" />
              <br/>
              <CustomTextValidator
              formData = {data} name="ReleaseOrg.AlternateName" label="AlternateName" />
              <br/>
              <CustomTextValidator
              formData = {data} 
                name="ReleaseOrg.WorkTypeDetail" 
                label="WorkTypeDetail" />
              <br/>
            </Box> */}
            
      <CustomTextValidator
        formData = {data} name="Location" label="Location" />
    </Box>
  )
}