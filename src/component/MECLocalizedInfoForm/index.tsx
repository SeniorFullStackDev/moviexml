import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'
import LocalizedInfoForm from './LocalizedInfoForm';
import { LocalizedInfoType, FormType } from 'utils/types';
import { DeleteOutline } from '@mui/icons-material';
import MECContext from 'context/MECContext';
import _ from 'lodash';

export default function MECLocalizedInForm({ parentKey }:FormType) {

  const [expanded, setExpanded] = React.useState<string | false>('panel-0');

  const { mecJSON, setMECJSON } = React.useContext(MECContext);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{
    const localizedInfos = _.get(mecJSON, `${parentKey}.LocalizedInfo`, []);
    const newIndex = localizedInfos.length;

    const newItem:LocalizedInfoType = {
      '@Language':'en-US',
      'ArtReference':[],
      'Genre':[],
      'Summary400':'',
      'TitleDisplay19':'',
      'TitleDisplayUnlimited':''
    }
    _.set(mecJSON, `${parentKey}.LocalizedInfo[${newIndex}]`, newItem);
    setMECJSON({ ...mecJSON });
  }

  const localizedInfos = _.get(mecJSON, `${parentKey}.LocalizedInfo`, []);

  return (
    <Box sx = {{ m:1 }} id="mec-MECLocalizedInfoForm">
      <Typography >LocalizedInfo</Typography>
      <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add LocalizedInfo</Button>
      <Box sx = {{ mt:1 }}>
        {
          localizedInfos.map((ele:LocalizedInfoType, index:number)=>
            ele && <Accordion 
              key = {`${ele['@Language']}-${index}`} 
              expanded={expanded === `panel-${index}`} 
              onChange={handleChange(`panel-${index}`)}>
              <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                  <Typography>{ele['@Language']}</Typography>
                  <IconButton
                    onClick = {()=>{
                      _.omit(mecJSON, [`${parentKey}.LocalizedInfo[${index}]`]);
                      setMECJSON({ ...mecJSON });
                    }}
                  ><DeleteOutline /></IconButton>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <LocalizedInfoForm
                  data = {ele}
                  parentKey = {`${parentKey}.LocalizedInfo[${index}]`}
                />
              </AccordionDetails>
            </Accordion>
          )}
      </Box>
    </Box>
  );
}
