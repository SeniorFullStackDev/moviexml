import React from 'react';
import { 
  Box, 
  Typography, 
} from '@mui/material';
import { SelectValidator } from 'react-material-ui-form-validator';
import MenuItem from '@mui/material/MenuItem';

import languages from 'config/languages.json';
import { LocalizedInfoType, FormType } from 'utils/types';
import ArtReferenceForm from './ArtReferenceForm';
import GenreForm from './GenreForm';
import MECContext from 'context/MECContext';
import _ from 'lodash';

import ContextTextValidator from 'component/ContextTextValidator';


interface Props extends FormType {
    data:LocalizedInfoType;
}

export default ({ parentKey, data }:Props) => {

  const [localizedInfo, setLocalizedInfo] = React.useState(data);

  const { mecJSON, setMECJSON } = React.useContext(MECContext);

  return (
    <Box sx = {{ pl:4 }}>
      <SelectValidator
        defaultValue = "en-US"
        value={localizedInfo['@Language']}
        validators={['required']}
        errorMessages={['this field is required']}
        onChange = {(e:any) => {
          
          setLocalizedInfo({ ...localizedInfo, [e.target.name]:e.target.value });

          _.set(mecJSON, e.target.name, e.target.value);
          setMECJSON({ ...mecJSON });

        }}
        name={`${parentKey}.@Language`}
        label="@Language *"
      >
        { languages.map((ele:any, index:number)=><MenuItem key={index} value={ele.code}>{ele.language}</MenuItem>) }
      </SelectValidator>
      <br/>
      <ContextTextValidator
        name={`${parentKey}TitleDisplay19`}
        label="TitleDisplay19"
      />
      <br/>
      <ContextTextValidator
        name={`${parentKey}TitleDisplay60`}
        label="TitleDisplay60"
      />
      <br/>
      <ContextTextValidator
        validators={['required']}
        errorMessages={['this field is required']}
        label="TitleDisplayUnlimited *"
        name={`${parentKey}TitleDisplayUnlimited`}
      />

      <ArtReferenceForm artreferences={localizedInfo.ArtReference} parentKey = {`${parentKey}.ArtReference`}/>

      <ContextTextValidator name={`${parentKey}Summary190`} label="Summary190" />
      <br/>
      <ContextTextValidator
        name={`${parentKey}Summary400`} 
        label="Summary400 *" 
        style = {{ width:'100%' }}
        multiline
        rows={6}
        validators={['required']}
        errorMessages={['this field is required']} />
      <br/>
      <ContextTextValidator
        name={`${parentKey}Summary4000`} 
        label="Summary4000"
        style = {{ width:'100%' }}
        multiline
        rows={6}
      />
      <GenreForm parentKey = {`${parentKey}.Genre`} />

      {/* <ContextTextValidator
        name="Keyword" label="Keyword" />
      <br />
      <ContextTextValidator
        name="VersionNotes" label="VersionNotes" /> */}

      <Typography >Region</Typography>
      <Box sx = {{ pl:4 }}>
        <ContextTextValidator 
          name={`${parentKey}Region.Country`} label="Country" />
      </Box>

      <ContextTextValidator
        name={`${parentKey}OriginalTitle`} label="OriginalTitle" />
      <br />
      <ContextTextValidator
        name={`${parentKey}CopyrightLine`} label="CopyrightLine" />
      <br />
      <ContextTextValidator
        name={`${parentKey}PeopleLocal`} label="PeopleLocal" />
      <ContextTextValidator
        name={`${parentKey}Description`} label="Description" />

      {/* <Typography >ReleaseOrg</Typography>
            <Box sx = {{ pl:4 }}>
              <ContextTextValidator
              name="ReleaseOrg.@organizationID" label="@organizationID"/>
              <ContextTextValidator
              name="ReleaseOrg.@idType" label="@idType"/>
              <ContextTextValidator
              name="ReleaseOrg.@role" label="@role"/>
              <br/>
              <ContextTextValidator
              
                name="ReleaseOrg.DisplayName" 
                label="DisplayName *" 
                validators={['required']}
                errorMessages={['this field is required']}/>
              <br/>
              <ContextTextValidator
              name="ReleaseOrg.SortName" label="SortName" />
              <br/>
              <ContextTextValidator
              name="ReleaseOrg.AlternateName" label="AlternateName" />
              <br/>
              <ContextTextValidator
              
                name="ReleaseOrg.WorkTypeDetail" 
                label="WorkTypeDetail" />
              <br/>
            </Box> */}
            
      {/* <ContextTextValidator
        name={`${parentKey}Location`} label="Location" /> */}
    </Box>
  )
}