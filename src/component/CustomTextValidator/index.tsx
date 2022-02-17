import React, { useEffect, useImperativeHandle, useState } from 'react';
import { TextValidator } from 'react-material-ui-form-validator';
import _ from 'lodash';

const Index = React.forwardRef((props:any, ref) => {
  
  const [value, setValue] = useState(props.value || (props.formData?(_.get(props.formData, props.name, '')):''));

  useImperativeHandle(ref, () => (
    {
      setValue:(value:string)=>{
        setValue(value);
      }
    }
  ), []);

  useEffect(()=>{
    if(props.formData){
      setValue(_.get(props.formData, props.name, ''));
    }
  }, [props.formData])
  
  return (
    <TextValidator {...props} value = {value} style = {(props.style)?{ ...props.style, minWidth:'500px' }:{ minWidth:'500px' }} onChange = {(e:any)=>{
      setValue(e.target.value);
    }} />
  )
});

export default Index;