import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import { FormType, ReleaseType } from 'utils/types';

interface ReleaseFormType extends FormType {
    data:ReleaseType
}

export default function({ data, parentKey }: ReleaseFormType){

  const [formData, setFormData] = useState<ReleaseType>(data);
    
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
            value = {formData.DistrTerritory.country}
            validators={['required']}
            errorMessages={['this field is required']}>
                
          </SelectValidator>
        </Box>
        <TextValidator
          name={`${parentKey}.ReleaseHistory.Date`} 
          label="Date *" 
          value = {formData.Date}
          validators={['required']}
          errorMessages={['this field is required']}/>
      </Box>
    </Box>
  )
}