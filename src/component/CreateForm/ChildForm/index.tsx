import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { 
  Box, 
  MenuItem, 
  Typography
} from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import _ from 'lodash';
import FormData from 'models/FormData';
import MECContextTextValidator from 'component/ContextTextValidator/MECContextTextValidator';
import ArrayForm from 'component/CreateForm/ArrayForm';

interface Props {
  formData:FormData
}
const ChildForm = ({ formData }:Props) => {
  return (
    <Box>
      {
        formData.children?.map((ele:FormData, index:number)=>{
          if(ele.type == 'text-field'){
            const label = ele.required?`${ele.label} *`: ele.label;
            const textProps:any = {
            }
            if(ele.required){
              textProps.validators = ['required']
              textProps.errorMessages = ['this field is required']
            }
            return (
              <MECContextTextValidator
                {...textProps}
                name={ele.name}
                label={label}
                key= {index}
              />
            )
          }
          if(ele.type == 'array'){
            return (
              <ArrayForm formData={ele} />
            )
          }
          return (
            <>
              <Typography >{ele.label}</Typography>
              <Box sx = {{ pl:4 }}>
                <ChildForm key = {index} formData = {ele} />
              </Box>
            </>
          )
        })
      }
    </Box>
  )
}

export default ChildForm;