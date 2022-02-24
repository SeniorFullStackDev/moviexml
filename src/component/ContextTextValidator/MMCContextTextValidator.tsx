import React, { useEffect, useImperativeHandle, useRef } from 'react';
import MMCContext from 'context/MMCContext';
import { styled } from '@mui/material/styles';
import { TextValidator } from 'react-material-ui-form-validator'
import _ from 'lodash';

const Index = React.forwardRef((props:any, ref) => {
  const { mmcJSON, setMMCJSON } = React.useContext(MMCContext);
  const [value, setValue] = React.useState(_.get(mmcJSON, props.name, ''));
  const inputRef = useRef<any>();
  useImperativeHandle(ref, () => (
    {
      setValue:(title:string)=>{
        setValue(title);
      }
    }
  ), []);

  useEffect(()=>{
    setValue(_.get(mmcJSON, props.name, ''));
  }, [_.get(mmcJSON, props.name, '')])


  return <TextValidator {...props} ref = {inputRef}
    style = {(props.style)?{ ...props.style, minWidth:'500px' }:{ minWidth:'500px' }}
    defaultValue = {_.get(mmcJSON, props.name, '')}
    value = {value}
    onChange = {(e:any)=>{
      setValue(e.target.value);
    }}
    onBlur = {(e:any)=>{
      _.set(mmcJSON, e.target.name, e.target.value);
      setMMCJSON({ ...mmcJSON });
    }}/>
});
export default Index;