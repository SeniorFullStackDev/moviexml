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
import iso from 'iso-3166-1';
import MECContextTextValidator from 'component/ContextTextValidator/MECContextTextValidator';


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
        { languages.map((ele:any, index:number)=><MenuItem key={index} value={ele.code}>{ele.code}</MenuItem>) }
      </SelectValidator>
      <br/>
      <MECContextTextValidator
        name={`${parentKey}TitleDisplay19`}
        label="TitleDisplay19"
      />
      <br/>
      <MECContextTextValidator
        name={`${parentKey}TitleDisplay60`}
        label="TitleDisplay60"
      />
      <br/>
      <MECContextTextValidator
        validators={['required']}
        errorMessages={['this field is required']}
        label="TitleDisplayUnlimited *"
        name={`${parentKey}TitleDisplayUnlimited`}
      />

      <ArtReferenceForm artreferences={localizedInfo.ArtReference} parentKey = {`${parentKey}.ArtReference`}/>

      <MECContextTextValidator name={`${parentKey}Summary190`} label="Summary190" />
      <br/>
      <MECContextTextValidator
        name={`${parentKey}Summary400`} 
        label="Summary400 *" 
        style = {{ width:'100%' }}
        multiline
        rows={6}
        validators={['required']}
        errorMessages={['this field is required']} />
      <br/>
      <MECContextTextValidator
        name={`${parentKey}Summary4000`} 
        label="Summary4000"
        style = {{ width:'100%' }}
        multiline
        rows={6}
      />
      <GenreForm parentKey = {`${parentKey}.Genre`} />

      <Typography >Region</Typography>
      <Box sx = {{ pl:4 }}>
        <SelectValidator
          name={`${parentKey}.Region.Country`}
          label="Country"
          value = {_.get(mecJSON, `${parentKey}.Region.Country`, '' )}
          onChange = {(e:any) => {
            _.set(mecJSON, e.target.name, e.target.value);
            setMECJSON({ ...mecJSON });
          }}
        >
          { iso.all().map((ele:any, index:number)=><MenuItem key={index} value={ele.alpha2}>{ele.alpha2}</MenuItem>) }
        </SelectValidator>
      </Box>

      <MECContextTextValidator
        name={`${parentKey}OriginalTitle`} label="OriginalTitle" />
      <br />
      <MECContextTextValidator
        name={`${parentKey}CopyrightLine`} label="CopyrightLine" />
      <br />
      <MECContextTextValidator
        name={`${parentKey}PeopleLocal`} label="PeopleLocal" />
      <MECContextTextValidator
        name={`${parentKey}Description`} label="Description" />
    </Box>
  )
}