import React, { useImperativeHandle, useRef, useEffect, useState } from 'react';
import { Box, TextField, Typography  } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import MMCContext from 'context/MMCContext';
import _ from 'lodash';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import CompatibilityForm from 'component/MMC/CompatibilityForm';
import InventoryForm from 'component/MMC/InventoryForm';
import PresentationsForm from 'component/MMC/PresentationsForm';
import PlayableSequencesForm from 'component/MMC/PlayableSequencesForm';
import ExperiencesForm from 'component/MMC/ExperiencesForm';
import ALIDExperienceMapsForm from 'component/MMC/ALIDExperienceMapsForm';


interface Props {
  data?:any
}

const Index = React.forwardRef(({ data }:Props, ref) => {

  // const [formData, setFormData] = useState(data);
  const formDataRef = React.useRef(data || {});
  const formRef = React.useRef<any>();
  const { mmcJSON, setMMCJSON } = React.useContext(MMCContext);

  const [count, setCount] = useState(0);

  useEffect(()=>{
    formDataRef.current = data;
    setCount(count + 1);
  }, [data])

  useImperativeHandle(ref, () => (
    {
      getFormData: () => {
        if(formRef.current){
          formRef.current.isFormValid().then((isValid:boolean)=>{
            if(!isValid){
              formRef.current.submit();
              return;
            }
          })
          return mmcJSON;
        }
        return {};
      }
    }
  ), [data]);

  return (
    <Box>
      <Typography variant="h5">MMC</Typography>
      <ValidatorForm
        ref = {formRef}
        autoComplete="off"
        onSubmit = {()=>{
          return false;
        }}
      >
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
        >
          <Typography >MediaManifest-type</Typography>
          <Box sx = {{ pl:4 }}>
            <CompatibilityForm parentKey='Compatibility'/>

            <InventoryForm parentKey='Inventory'/>

            <PresentationsForm parentKey='Presentations' />

            <PlayableSequencesForm />

            <ExperiencesForm />

            <ALIDExperienceMapsForm />
            
          </Box>
        </Box>
      </ValidatorForm>
    </Box>
  )
});

export default Index;