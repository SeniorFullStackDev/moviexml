import React from 'react';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'
import MMCContext from 'context/MMCContext';
import { DeleteOutline } from '@mui/icons-material';
import { Button, Box, TextField, Typography, IconButton  } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import _ from 'lodash';
import { ClipType } from 'utils/types';

export default function(){

  const [expanded, setExpanded] = React.useState<string | false>('panel-0');
  const { mmcJSON, setMMCJSON } = React.useContext(MMCContext);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{
    const arr = _.get(mmcJSON, 'PlayableSequences.PlayableSequence.Clips', []);
    const newIndex = arr.length;
    const newItem:ClipType = {
      '@sequence':'',
      PresentationID:''
    }
    _.set(mmcJSON, `PlayableSequences.PlayableSequence.Clips[${newIndex}]`, newItem);
    setMMCJSON({ ...mmcJSON });
  }

  const arr = _.get(mmcJSON, 'PlayableSequences.PlayableSequence.Clips', []);


  return (
    <Box sx = {{ mt:1 }}>
      <Typography sx = {{ ml:1 }}>PlayableSequences</Typography>
      <MMCContextTextValidator 
        validators={['required']}
        errorMessages={['this field is required']} 
        name="PlayableSequences.PlayableSequence.@PlayableSequenceID" 
        label="PlayableSequenceID *"/>
      <Box sx = {{ m:1 }}>
        <Typography >Clip</Typography>
        <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add Clip</Button>
        <Box sx = {{ m:1 }}>
          {
            arr.map((ele:ClipType, index:number)=>
              ele && <Accordion 
                key = {`${ele['@sequence']}-${index}`} 
                expanded={expanded === `panel-${index}`} 
                onChange={handleChange(`panel-${index}`)}>
                <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                  <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                    <Typography>#{index}</Typography>
                    <IconButton
                      onClick = {()=>{
                        _.omit(mmcJSON, [`PlayableSequences.PlayableSequence.Clips[${index}]`]);
                        setMMCJSON({ ...mmcJSON });
                      }}
                    ><DeleteOutline /></IconButton>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx = {{ m:1 }}>
                    <MMCContextTextValidator 
                      validators={['required']} 
                      errorMessages={['this field is required']} 
                      name={`PlayableSequences.PlayableSequence.Clips[${index}].@sequence`} 
                      label="@sequence *"/><br/>
                    <MMCContextTextValidator 
                      validators={['required']} 
                      errorMessages={['this field is required']} 
                      name={`PlayableSequences.PlayableSequence.Clips[${index}].PresentationID`} 
                      label="PresentationID *"/><br/>
                  </Box>
                </AccordionDetails>
              </Accordion>
            )
          }
        </Box>
      </Box>
    </Box>
  );
}