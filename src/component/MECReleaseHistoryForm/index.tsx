import React, { useState } from 'react';
import { Typography, Box, TextField } from '@mui/material';
import { TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import { FormType, ReleaseType } from 'utils/types';
import MenuItem from '@mui/material/MenuItem';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import iso from 'iso-3166-1';

interface ReleaseFormType extends FormType {
    data:ReleaseType
}

export default function({ data, parentKey }: ReleaseFormType){

  const [formData, setFormData] = useState<ReleaseType>(data || { });

  const handleChangeDate = (newValue:any) => {
    setFormData({ ...formData, Date:newValue });
  };
    
  return (
    <Box sx = {{ m:1 }}>
      <Typography >Release History</Typography>
      <Box sx = {{ pl:4 }}>
        <TextValidator
          name={`${parentKey}.ReleaseHistory.ReleaseType`} 
          label="ReleaseType *" 
          value = {formData.ReleaseType}
          validators={['required']}
          errorMessages={['this field is required']}/>
        <br/>
        <Typography >DistrTerritory</Typography>
        <Box sx = {{ pl:4 }}>
          <SelectValidator
            name={`${parentKey}.ReleaseHistory.DistrTerritory.country`}
            label="country *" 
            value = {(formData.DistrTerritory)?formData.DistrTerritory.country:''}
            validators={['required']}
            errorMessages={['this field is required']}>
            { iso.all().map((ele:any, index:number)=><MenuItem key={index} value={ele.alpha2}>{ele.country}</MenuItem>) }
          </SelectValidator>
        </Box>
        {/* <TextValidator
          name={`${parentKey}.ReleaseHistory.Date`} 
          label="Date *" 
          value = {formData.Date}
          validators={['required']}
          errorMessages={['this field is required']}/> */}
        <DesktopDatePicker 
          label="Date desktop"
          inputFormat="yyyy-MM-DD"
          value = {formData.Date}
          onChange={handleChangeDate}
          renderInput={(params:any) => <TextValidator 
            name={`${parentKey}.ReleaseHistory.Date`} 
            {...params} 
            validators={['required']}
            errorMessages={['this field is required']}/>}
        />
      </Box>
    </Box>
  )
}