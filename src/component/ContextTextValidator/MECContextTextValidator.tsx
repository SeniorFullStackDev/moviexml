import React, { useEffect, useImperativeHandle, useRef } from 'react';
import MECContext from 'context/MECContext';
import { styled } from '@mui/material/styles';
import { TextValidator } from 'react-material-ui-form-validator'
import _ from 'lodash';

const Index = React.forwardRef((props:any, ref) => {
  const { mecJSON, setMECJSON } = React.useContext(MECContext);
  const [value, setValue] = React.useState(_.get(mecJSON, props.name, ''));
  const inputRef = useRef<any>();

  useImperativeHandle(ref, () => (
    {
      setValue:(title:string)=>{
        setValue(title);
      }
    }
  ), []);

  useEffect(()=>{
    setValue(_.get(mecJSON, props.name, ''));
    console.log(mecJSON);
    console.log(props.name, ' ==== ', _.get(mecJSON, props.name, ''));
  }, [_.get(mecJSON, props.name, '')])


  return <TextValidator {...props} ref = {inputRef}
    style = {(props.style)?{ ...props.style, minWidth:'500px' }:{ minWidth:'500px' }}
    value = {value}
    onChange = {(e:any)=>{
      setValue(e.target.value);
    }}
    onBlur = {(e:any)=>{
      _.set(mecJSON, e.target.name, e.target.value);
      setMECJSON({ ...mecJSON });
    }}/>
});
export default Index;