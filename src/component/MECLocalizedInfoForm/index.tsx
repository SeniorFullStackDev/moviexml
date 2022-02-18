import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'
import LocalizedInfoForm from './LocalizedInfoForm';
import { LocalizedInfoType, FormType } from 'utils/types';
import { DeleteOutline } from '@mui/icons-material';

export default function MECLocalizedInForm({ parentKey }:FormType) {

  const [expanded, setExpanded] = React.useState<string | false>('panel-0');

  const [localizedInfos, setLocalizeddInifos] = React.useState<LocalizedInfoType[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{
    const newItem:LocalizedInfoType = {
      '@Language':'en-US',
      'ArtReference':[],
      'Genre':[],
      'Summary400':'',
      'TitleDisplay19':'',
      'TitleDisplayUnlimited':''
    }
    localizedInfos.push(newItem);
    setLocalizeddInifos([...localizedInfos]);
  }

  return (
    <Box sx = {{ m:1 }}>
      <Typography >LocalizedInfo</Typography>
      <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add LocalizedInfo</Button>
      <Box sx = {{ mt:1 }}>
        {
          localizedInfos.map((ele:LocalizedInfoType, index:number)=>
            <Accordion 
              key = {`${ele['@Language']}-${index}`} 
              expanded={expanded === `panel-${index}`} 
              onChange={handleChange(`panel-${index}`)}>
              <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                  <Typography>{ele['@Language']}</Typography>
                  <IconButton
                    onClick = {()=>{
                      localizedInfos.splice(index, 1);
                      setLocalizeddInifos([...localizedInfos]);
                    }}
                  ><DeleteOutline /></IconButton>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <LocalizedInfoForm
                  data = {ele}
                  parentKey = {`${parentKey}.LocalizedInfo[${index}]`}
                  onChangeLanguage = {(lang:string)=>{
                    ele['@Language']=lang;
                    setLocalizeddInifos([...localizedInfos]);
                  }}
                />
              </AccordionDetails>
            </Accordion>
          )}
      </Box>
    </Box>
  );
}
