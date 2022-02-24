import React from 'react';
import { Box, TextField, Typography, Button, IconButton  } from '@mui/material';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import MMCContext from 'context/MMCContext';
import _ from 'lodash';
import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'
import { FormType, PresentationType } from 'utils/types';
import { DeleteOutline } from '@mui/icons-material';
import PresentationForm from './PresentationForm';


export default function(){

  const { mmcJSON, setMMCJSON } = React.useContext(MMCContext);

  const [expanded, setExpanded] = React.useState<string | false>('panel-0');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{
    const arr = _.get(mmcJSON, 'Presentations', []);
    const newIndex = arr.length;

    const newItem:PresentationType = {
      '@PresentationID':'',
      TrackMetadata:{
        TrackSelectionNumber:0,
        TrackReferences:[],
      }
    }
    _.set(mmcJSON, `Presentations[${newIndex}]`, newItem);
    setMMCJSON({ ...mmcJSON });
  }

  const arr = _.get(mmcJSON, 'Presentations', []);

  return (
    <Box>
      <Typography >Presentations *</Typography>
      <Box sx = {{ m:1 }}>
        <Typography >Presentation *</Typography>
        <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add Presentation</Button>
        <Box sx = {{ mt:1 }}>
          {
            arr.map((ele:PresentationType, index:number)=>
              <Accordion
                key = {`${ele['@PresentationID']}-${index}`} 
                expanded={expanded === `panel-${index}`} 
                onChange={handleChange(`panel-${index}`)}>
                <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                  <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                    <Typography>#{index}</Typography>
                    <IconButton
                      onClick = {()=>{
                        _.omit(mmcJSON, [`Presentations[${index}]`]);
                        setMMCJSON({ ...mmcJSON });
                      }}
                    ><DeleteOutline /></IconButton>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <PresentationForm parentKey={`Presentations[${index}]`} data = {ele} />
                </AccordionDetails>
              </Accordion>
            )}
        </Box>
      </Box>
    </Box>
  );
}