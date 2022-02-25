import React from 'react';
import { Box, Typography } from '@mui/material';
import _ from 'lodash';
import PresentationForm from './PresentationForm';

export default function(){
  return (
    <Box sx = {{ m:1 }}>
      <Typography >Presentations *</Typography>
      <Box sx = {{ mt:1 }}>
        <PresentationForm parentKey={'Presentations'} />
      </Box>
    </Box>
  );
}