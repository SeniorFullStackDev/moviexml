import React from 'react';
import { Typography, Box, Button, IconButton } from '@mui/material';
import { AltIdentifierType, FormType } from 'utils/types';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'
import AddIcon from '@mui/icons-material/Add';
import { DeleteOutline } from '@mui/icons-material';
import AltIdentifierForm from './AltIdentifierForm';
import _ from 'lodash';
import MECContext from 'context/MECContext';

export default function({ parentKey }:FormType){

  const [expanded, setExpanded] = React.useState<string | false>('altidentifire-panel-0');
  const { mecJSON, setMECJSON } = React.useContext(MECContext);

  // const [altIdentifires, setAltIdenifires] = React.useState<AltIdentifierType[]>(data || []);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{
    const altIdentifires = _.get(mecJSON, `${parentKey}.AltIdentifier`, []);
    const newIndex = altIdentifires.length;
    const newItem:AltIdentifierType = {
      'Namespace':'',
      'Identifier':''
    }
    _.set(mecJSON, `${parentKey}.AltIdentifier[${newIndex}]`, newItem);
    setMECJSON({ ...mecJSON });
    
  }

  const altIdentifires = _.get(mecJSON, `${parentKey}.AltIdentifier`, []);

  return (
    <Box sx = {{ m:1 }}>
      <Typography>AltIdentifier</Typography>
      <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add AltIdentifier</Button>
      <Box sx = {{ m:1 }}>
        {
          altIdentifires.map((ele:AltIdentifierType, index:number)=>
            <Accordion 
              key = {`#${index}`} 
              expanded={expanded === `panel-${index}`} 
              onChange={handleChange(`panel-${index}`)}>
              <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                  <Typography>{ele['Namespace']}</Typography>
                  <IconButton
                    onClick = {()=>{
                      _.omit(mecJSON, [`${parentKey}.AltIdentifier[${index}]`]);
                      setMECJSON({ ...mecJSON });
                    }}
                  ><DeleteOutline /></IconButton>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <AltIdentifierForm parentKey={`${parentKey}.AltIdentifier[${index}]`} data = {ele} />
              </AccordionDetails>
            </Accordion>
          )}
      </Box>
    </Box>
  )
}