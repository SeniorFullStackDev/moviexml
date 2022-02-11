import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import MMCForm from './MMCForm';
import MECForm from './MECForm';
import { Divider } from '@mui/material';
import { mec, mmc } from 'utils/demo';


export default function CreateForm() {

  const [value, setValue] = React.useState(0);
  const MMCFormRef = React.useRef<any>();
  const MECFormRef = React.useRef<any>();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    if(MECFormRef.current){
      const mecData = MECFormRef.current.getFormData();
      console.log(mecData);
    }

    if(MMCFormRef.current){
      const mmcData = MMCFormRef.current.getFormData();
      console.log(mmcData);
    }
  }

  return (
    <Box sx = {{ pt:'20px' }}>
      <Typography variant='h5'>New Movie</Typography>
      <Box>
        <TextField
          autoFocus
          margin="dense"
          label="Movie title"
          fullWidth
          variant="standard"
        />

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
        <Button onClick={handleSubmit} variant="outlined">Submit</Button>
      </Box>
    </Box>
  );
}
