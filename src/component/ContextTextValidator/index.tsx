import React from 'react';
import MECContext from 'context/MECContext';
import { styled } from '@mui/material/styles';
import { TextValidator } from 'react-material-ui-form-validator'
import _ from 'lodash';

export default ((props: any) => {
  const { mecJSON, setMECJSON } = React.useContext(MECContext);
  return <TextValidator {...props} 
    onBlur = {(e:any)=>{
      _.set(mecJSON, e.target.name, e.target.value);
      setMECJSON({ ...mecJSON });
    }}/>
});