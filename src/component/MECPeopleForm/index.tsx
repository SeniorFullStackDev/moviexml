import React from 'react';
import { FormType, PeopleType } from 'utils/types';
import { Typography, Box, Button, IconButton } from '@mui/material';
import { TextValidator } from 'react-material-ui-form-validator';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'

import { DeleteOutline } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import PeopleForm from './PeopleForm';
import MECContext from 'context/MECContext';
import _ from 'lodash';

export default function({ parentKey }:FormType){

  const [expanded, setExpanded] = React.useState<string | false>('people-panel-0');
  const { mecJSON, setMECJSON } = React.useContext(MECContext);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{

    const peoples = _.get(mecJSON, `${parentKey}.People`, []);
    const newIndex = peoples.length;

    const newItem:PeopleType = {
      'Job':{ JobFunction:'', BillingBlockOrder:1 },
      'Name':{
        '@language':'US',
        DisplayName:''
      }
    }
    _.set(mecJSON, `${parentKey}.People[${newIndex}]`, newItem);
    setMECJSON({ ...mecJSON });
  }

  const peoples = _.get(mecJSON, `${parentKey}.People`, []);

  console.log('peoples --->', peoples);

  return (
    <Box sx = {{ m:1 }}>
      <Typography >People</Typography>
      <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add People</Button>
      <Box sx = {{ mt:1 }}>
        {
          peoples.map((ele:PeopleType, index:number)=>
            <Accordion 
              key = {index} 
              expanded={expanded === `people-panel-${index}`} 
              onChange={handleChange(`people-panel-${index}`)}>
              <AccordionSummary aria-controls={`people-panel${index}d-content`} id={`people-panel${index}d-content`}>
                <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                  <Typography>#{index}</Typography>
                  <IconButton
                    onClick = {()=>{
                      _.omit(mecJSON, [`${parentKey}.People[${index}]`]);
                      setMECJSON({ ...mecJSON });
                    }}
                  ><DeleteOutline /></IconButton>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <PeopleForm parentKey={`${parentKey}.People[${index}]`} data = {ele} />
              </AccordionDetails>
            </Accordion>
          )}
      </Box>
    </Box>
  )
}