import React from 'react';
import { Button, Box, TextField, Typography, IconButton  } from '@mui/material';
import MMCContextTextValidator from 'component/ContextTextValidator/MMCContextTextValidator';
import { ExperienceType, FormType } from 'utils/types';
import MMCContext from 'context/MMCContext';
import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'
import { DeleteOutline } from '@mui/icons-material';
import _ from 'lodash';
import ExperienceForm from './ExperienceForm';

export default function(){

  const { mmcJSON, setMMCJSON } = React.useContext(MMCContext);

  const [expanded, setExpanded] = React.useState<string | false>('panel-0');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{
    const experiences = _.get(mmcJSON, 'Experiences', []);
    const newIndex = experiences.length;

    const newItem:ExperienceType = {
      '@ExperienceID':'',
      '@version':'1.0',
      '@ContentID':'',
      Audiovisual:{
        Type:'',
        SubType:'',
        PlayableSequenceID:'',
      },
    }
    _.set(mmcJSON, `Experiences[${newIndex}]`, newItem);
    setMMCJSON({ ...mmcJSON });
  }

  const experiences = _.get(mmcJSON, 'Experiences', []);

  return (
    <Box sx = {{ m:1 }} id="mmc-ExperiencesForm">
      <Typography >Experiences</Typography>
      <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add Experience</Button>
      <Box sx = {{ mt:1 }}>
        {
          experiences.map((ele:ExperienceType, index:number)=>
            ele && <Accordion 
              key = {`${ele['@ExperienceID']}-${index}`} 
              expanded={expanded === `panel-${index}`} 
              onChange={handleChange(`panel-${index}`)}>
              <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                  <Typography>#{index}</Typography>
                  <IconButton
                    onClick = {()=>{
                      _.omit(mmcJSON, [`Experiences[${index}]`]);
                      setMMCJSON({ ...mmcJSON });
                    }}
                  ><DeleteOutline /></IconButton>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <ExperienceForm parentKey={`Experiences[${index}]`} data = {ele} />
              </AccordionDetails>
            </Accordion>
          )}
      </Box>
    </Box>
  );
}