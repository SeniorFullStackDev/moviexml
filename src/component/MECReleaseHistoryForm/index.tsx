import React, { useState } from 'react';
import { Typography, Box, TextField } from '@mui/material';
import { TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import { FormType, ReleaseType } from 'utils/types';
import MenuItem from '@mui/material/MenuItem';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import iso from 'iso-3166-1';
import MECContext from 'context/MECContext';
import _ from 'lodash';

export default function({ parentKey }: FormType){

  const { mecJSON, setMECJSON } = React.useContext(MECContext);

  const formData = _.get(mecJSON, `${parentKey}.ReleaseHistory`, {});

  // Original, Broadcast, DVD, Blu-ray, PayTV, InternetBuy, InternetRent, Theatrical, SVOD
  return (
    <Box sx = {{ m:1 }} id="mec-MECReleaseHistoryForm">
      <Typography >Release History</Typography>
      <Box sx = {{ pl:4 }}>
        <SelectValidator
          name={`${parentKey}.ReleaseHistory.ReleaseType`} 
          label="ReleaseType *" 
          value = {formData.ReleaseType?formData.ReleaseType:''}
          defaultValue = "Original"
          validators={['required']}
          errorMessages={['this field is required']}
          onChange = {(e:any) => {
            _.set(mecJSON, e.target.name, e.target.value);
            setMECJSON({ ...mecJSON });
          }}
        >
          <MenuItem value = "Original">Original</MenuItem>
          <MenuItem value = "Broadcast">Broadcast</MenuItem>
          <MenuItem value = "DVD">DVD</MenuItem>
          <MenuItem value = "Blu-ray">Blu-ray</MenuItem>
          <MenuItem value = "PayTV">PayTV</MenuItem>
          <MenuItem value = "InternetBuy">InternetBuy</MenuItem>
          <MenuItem value = "InternetRent">InternetRent</MenuItem>
          <MenuItem value = "Theatrical">Theatrical</MenuItem>
          <MenuItem value = "SVOD">SVOD</MenuItem>
        </SelectValidator>
        <br/>
        <Typography >DistrTerritory</Typography>
        <Box sx = {{ pl:4 }}>
          <SelectValidator
            name={`${parentKey}.ReleaseHistory.DistrTerritory.country`}
            label="country *" 
            value = {(formData.DistrTerritory)?formData.DistrTerritory.country:''}
            validators={['required']}
            onChange = {(e:any) => {
              _.set(mecJSON, e.target.name, e.target.value);
              setMECJSON({ ...mecJSON });
            }}
            errorMessages={['this field is required']}>
            { iso.all().map((ele:any, index:number)=><MenuItem key={index} value={ele.alpha2}>{ele.country}</MenuItem>) }
          </SelectValidator>
        </Box>
        <DesktopDatePicker 
          label="Date"
          inputFormat="yyyy-MM-DD"
          value = {formData.Date}
          onChange={(newval:any)=>{
            _.set(mecJSON, `${parentKey}.ReleaseHistory.Date`, newval.format('yyyy-MM-DD'));
            setMECJSON({ ...mecJSON });
          }}
          renderInput={(params:any) => <TextValidator  {...params} />}
        />
      </Box>
    </Box>
  )
}