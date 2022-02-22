import React from 'react';
import MMCContext from 'context/MMCContext';
import { styled } from '@mui/material/styles';
import { TextValidator } from 'react-material-ui-form-validator'
import _ from 'lodash';

export default ((props: any) => {
  const { mmcJSON, setMMCJSON } = React.useContext(MMCContext);
  return <TextValidator {...props}
    style = {(props.style)?{ ...props.style, minWidth:'500px' }:{ minWidth:'500px' }}
    defaultValue = {_.get(mmcJSON, props.name, '')} 
    onBlur = {(e:any)=>{
      _.set(mmcJSON, e.target.name, e.target.value);
      setMMCJSON({ ...mmcJSON });
    }}/>
});