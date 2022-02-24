import React from 'react';
import { Box, TextField, Typography, Button, IconButton  } from '@mui/material';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import { AudioTrackReferenceType, FormType } from 'utils/types';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'
import MMCContext from 'context/MMCContext';
import AddIcon from '@mui/icons-material/Add';
import { DeleteOutline } from '@mui/icons-material';
import _ from 'lodash';

export default function({ parentKey }:FormType){

  const { mmcJSON, setMMCJSON } = React.useContext(MMCContext);

  const [expanded, setExpanded] = React.useState<string | false>('panel-0');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{
    const arr = _.get(mmcJSON, `${parentKey}.AudioTrackReferences`, []);
    const newIndex = arr.length;

    const newItem:AudioTrackReferenceType = {
      'AudioTrackID':'',
    }
    _.set(mmcJSON, `${parentKey}.AudioTrackReferences[${newIndex}]`, newItem);
    setMMCJSON({ ...mmcJSON });
  }

  const arr = _.get(mmcJSON, `${parentKey}.AudioTrackReferences`, []);

  return (
    <Box sx = {{ m:1 }}>
      <Typography >AudioTrackReference</Typography>
      <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add AudioTrackReference</Button>
      <Box sx = {{ mt:1 }}>
        {
          arr.map((ele:AudioTrackReferenceType, index:number)=>
            <Accordion
              key = {`${ele['AudioTrackID']}-${index}`} 
              expanded={expanded === `panel-${index}`} 
              onChange={handleChange(`panel-${index}`)}>
              <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                  <Typography>#{index}</Typography>
                  <IconButton
                    onClick = {()=>{
                      _.omit(mmcJSON, [`${parentKey}.AudioTrackReferences[${index}]`]);
                      setMMCJSON({ ...mmcJSON });
                    }}
                  ><DeleteOutline /></IconButton>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <MMCContextTextValidator 
                  validators={['required']} 
                  errorMessages={['this field is required']} 
                  name={`${parentKey}.AudioTrackReferences[${index}].AudioTrackID`}
                  label="AudioTrackID *"/>
              </AccordionDetails>
            </Accordion>
          )}
      </Box>
    </Box>
  );
}