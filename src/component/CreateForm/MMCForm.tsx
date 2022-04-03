import React, { useImperativeHandle, useRef, useEffect, useState } from 'react';
import { Box, TextField, Typography  } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import MMCContext from 'context/MMCContext';
import _ from 'lodash';
import InventoryForm from 'component/MMC/InventoryForm';
import PresentationsForm from 'component/MMC/PresentationsForm';
import PlayableSequencesForm from 'component/MMC/PlayableSequencesForm';
import ExperiencesForm from 'component/MMC/ExperiencesForm';
import ALIDExperienceMapsForm from 'component/MMC/ALIDExperienceMapsForm';

const Index = () => {
  return (
    <Box>
      <Typography variant="h5">MMC</Typography>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
      >
        <Typography >MediaManifest-type</Typography>

        <Box sx = {{ pl:4 }}>
          <InventoryForm parentKey='Inventory'/>
          <PresentationsForm />
          <PlayableSequencesForm />
          <ExperiencesForm />
          <ALIDExperienceMapsForm />
        </Box>
      </Box>
    </Box>
  )
}

export default Index;