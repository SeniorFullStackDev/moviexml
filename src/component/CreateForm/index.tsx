import * as React from 'react';
import { Button, Grid, Typography,Box,  Link } from '@mui/material';

import MMCForm from './MMCForm';
import MECForm from './MECForm';
import { Divider } from '@mui/material';
import { ValidatorForm } from 'react-material-ui-form-validator';
import CustomTextValidator from 'component/CustomTextValidator';

import { mec, mmc } from 'utils/demo';
import { createNewMovie } from 'api'

export default function CreateForm() {

  const formRef = React.useRef<any>();
  const MMCFormRef = React.useRef<any>();
  const MECFormRef = React.useRef<any>();
  const [isRequesting, setIsRequesting] = React.useState(false);

  const formDataRef = React.useRef<any>({});

  const handleSubmit = () => {
    const payload:any = {};

    if(formDataRef.current){
      if(formDataRef.current.title){
        payload.title = formDataRef.current.title;
      }else{
        if(formRef.current) formRef.current.submit();
        return;
      }
    }

    if(MECFormRef.current){
      payload.mec = MECFormRef.current.getFormData();
    }
    if(MMCFormRef.current){
      payload.mmc = MMCFormRef.current.getFormData();
    }
    if(payload.title && payload.mmc && payload.mec){
      setIsRequesting(true);
      createNewMovie(payload).then((res:any)=>{
        console.log(res.data);
        setIsRequesting(false);
      }).catch(err=>{
        setIsRequesting(false);
        console.log(err);
      });
    }
  }

  const onChangeForm = (e:any) => {
    formDataRef.current = { ...formDataRef.current, [e.target.name]:e.target.value }
  }


  return (
    <Box sx = {{ pt:'20px' }}>
      <Box sx = {{ mb:'8px', display:'flex' }}>
        <Link href='/' underline="none">
          <Button  variant='outlined'>Back</Button>
        </Link>
      </Box>
      <Box>
        <Box sx = {{ mb:'20px' }}>
          <ValidatorForm
            ref = {formRef}
            autoComplete="off"
            onChange = {onChangeForm}
            onSubmit = {()=>{
              return false;
            }}
          >
            <Typography variant='h5'>New Movie</Typography>
            <CustomTextValidator 
              formData = {formDataRef.current} 
              validators={['required']} 
              errorMessages={['this field is required']} 
              name="title" 
              label="Movie Title *" />
          </ValidatorForm>
        </Box>
        <Divider />
        <Box sx={{ width: '100%', mt:'20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MECForm ref = {MECFormRef} data = {mec} />
            </Grid>
            <Grid item xs={12}>
              <Divider />
              <MMCForm ref = {MMCFormRef} data = {mmc} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
        <Button onClick={handleSubmit} variant="outlined" disabled = {isRequesting}>Submit</Button>
      </Box>
    </Box>
  );
}
