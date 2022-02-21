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

import languages from 'config/languages.json';
import resolutions from 'config/resolutions.json';
import purposes from 'config/ArtReference.purposes.json';
import { LocalizedInfoType, FormType } from 'utils/types';
import ArtReferenceForm from './ArtReferenceForm';
import GenreForm from './GenreForm';
import MECContext from 'context/MECContext';

interface Props extends FormType {
    data:LocalizedInfoType;
    onChangeLanguage:(lang:string)=>void;
}

export default ({ parentKey, data, onChangeLanguage }:Props) => {

  const [localizedInfo, setLocalizedInfo] = React.useState(data);

  const { mecJSON, setMECJSON } = React.useContext(MECContext);

  const onChange = (e:any) => {
    setLocalizedInfo({ ...localizedInfo, [e.target.name]:e.target.value });
    onChangeLanguage(e.target.value);
    const data = { ...mecJSON, [e.target.name]:e.target.value };
    setMECJSON(data);
  }

  return (
    <Box sx = {{ pl:4 }}>
      <SelectValidator
        defaultValue = "en-US"
        value={localizedInfo['@Language']}
        validators={['required']}
        errorMessages={['this field is required']}
        onChange = {onChange}
        name={`${parentKey}.@Language`}
        label="@Language *"
      >
        { languages.map((ele:any, index:number)=><MenuItem key={index} value={ele.code}>{ele.language}</MenuItem>) }
      </SelectValidator>
      <br/>
      <TextValidator
        name={`${parentKey}TitleDisplay19`}
        label="TitleDisplay19"
      />
      <br/>
      <TextValidator
        name={`${parentKey}TitleDisplay60`}
        label="TitleDisplay60"
      />
      <br/>
      <TextValidator
        validators={['required']}
        errorMessages={['this field is required']}
        label="TitleDisplayUnlimited *"
        name={`${parentKey}TitleDisplayUnlimited`}
      />

      <ArtReferenceForm artreferences={localizedInfo.ArtReference} parentKey = {`${parentKey}.ArtReference`}/>

      <TextValidator name={`${parentKey}Summary190`} label="Summary190" />
      <br/>
      <TextValidator
        name={`${parentKey}Summary400`} 
        label="Summary400 *" 
        style = {{ width:'100%' }}
        multiline
        rows={6}
        validators={['required']}
        errorMessages={['this field is required']} />
      <br/>
      <TextValidator
        name={`${parentKey}Summary4000`} 
        label="Summary4000"
        style = {{ width:'100%' }}
        multiline
        rows={6}
      />
      <GenreForm data = {localizedInfo.Genre} parentKey = {`${parentKey}.Genre`} />

      {/* <TextValidator
        name="Keyword" label="Keyword" />
      <br />
      <TextValidator
        name="VersionNotes" label="VersionNotes" /> */}

      <Typography >Region</Typography>
      <Box sx = {{ pl:4 }}>
        <TextValidator 
          name={`${parentKey}Region.Country`} label="Country" />
      </Box>

      <TextValidator
        name={`${parentKey}OriginalTitle`} label="OriginalTitle" />
      <br />
      <TextValidator
        name={`${parentKey}CopyrightLine`} label="CopyrightLine" />
      <br />
      <TextValidator
        name={`${parentKey}PeopleLocal`} label="PeopleLocal" />
      <TextValidator
        name={`${parentKey}Description`} label="Description" />

      {/* <Typography >ReleaseOrg</Typography>
            <Box sx = {{ pl:4 }}>
              <TextValidator
              name="ReleaseOrg.@organizationID" label="@organizationID"/>
              <TextValidator
              name="ReleaseOrg.@idType" label="@idType"/>
              <TextValidator
              name="ReleaseOrg.@role" label="@role"/>
              <br/>
              <TextValidator
              
                name="ReleaseOrg.DisplayName" 
                label="DisplayName *" 
                validators={['required']}
                errorMessages={['this field is required']}/>
              <br/>
              <TextValidator
              name="ReleaseOrg.SortName" label="SortName" />
              <br/>
              <TextValidator
              name="ReleaseOrg.AlternateName" label="AlternateName" />
              <br/>
              <TextValidator
              
                name="ReleaseOrg.WorkTypeDetail" 
                label="WorkTypeDetail" />
              <br/>
            </Box> */}
            
      {/* <TextValidator
        name={`${parentKey}Location`} label="Location" /> */}
    </Box>
  )
}