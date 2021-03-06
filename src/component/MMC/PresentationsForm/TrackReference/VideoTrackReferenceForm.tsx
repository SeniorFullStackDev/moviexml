import React from 'react';
import { Box, TextField, Typography, Button, IconButton  } from '@mui/material';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import { VideoTrackReferenceType, FormType } from 'utils/types';
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
    const arr = _.get(mmcJSON, `${parentKey}.VideoTrackReferences`, []);
    const newIndex = arr.length;

    const newItem:VideoTrackReferenceType = {
      'VideoTrackID':'',
    }
    _.set(mmcJSON, `${parentKey}.VideoTrackReferences[${newIndex}]`, newItem);
    setMMCJSON({ ...mmcJSON });
  }

  const arr = _.get(mmcJSON, `${parentKey}.VideoTrackReferences`, []);
  // console.log("arr ===>", );

  return (
    <Box sx = {{ m:1 }}>
      <Typography >VideoTrackReference</Typography>
      <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add VideoTrackReference</Button>
      <Box sx = {{ mt:1 }}>
        {
          arr.map((ele:VideoTrackReferenceType, index:number)=>
            ele && <Accordion
              key = {`${ele['VideoTrackID']}-${index}`} 
              expanded={expanded === `panel-${index}`} 
              onChange={handleChange(`panel-${index}`)}>
              <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                  <Typography>#{index}</Typography>
                  <IconButton
                    onClick = {()=>{
                      _.omit(mmcJSON, [`${parentKey}.VideoTrackReferences[${index}]`]);
                      setMMCJSON({ ...mmcJSON });
                    }}
                  ><DeleteOutline /></IconButton>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <MMCContextTextValidator 
                  validators={['required']} 
                  errorMessages={['this field is required']} 
                  name={`${parentKey}.VideoTrackReferences[${index}].VideoTrackID`}
                  label="VideoTrackID *"/>
              </AccordionDetails>
            </Accordion>
          )}
      </Box>
    </Box>
  );
}