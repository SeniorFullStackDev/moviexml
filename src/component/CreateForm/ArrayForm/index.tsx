import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'
// import LocalizedInfoForm from './LocalizedInfoForm';
// import { LocalizedInfoType, FormType } from 'utils/types';
import { DeleteOutline } from '@mui/icons-material';
import MECContext from 'context/MECContext';
import _ from 'lodash';
import FormData from 'models/FormData';
import ChildForm from 'component/CreateForm/ChildForm';

interface Props {
    formData:FormData
}

export default function ArrayForm({ formData }:Props) {

  const [expanded, setExpanded] = React.useState<string | false>('panel-0');

  const { mecJSON, setMECJSON } = React.useContext(MECContext);

  const [localFormData, setLocalFormData] = React.useState(formData);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{
    const arrayData = _.get(mecJSON, formData.name, []);
    const newIndex = arrayData.length;
    // const newItem:LocalizedInfoType = {
    //   '@Language':'en-US',
    //   'ArtReference':[],
    //   'Genre':[],
    //   'Summary400':'',
    //   'TitleDisplay19':'',
    //   'TitleDisplayUnlimited':''
    // }
    // _.set(mecJSON, `${parentKey}.LocalizedInfo[${newIndex}]`, newItem);
    // setMECJSON({ ...mecJSON });
    // formData.addd
  }

  //   const arrayData = _.get(mecJSON, formData.name, []);

  return (
    <Box sx = {{ m:1 }} id="mec-MECLocalizedInfoForm">
      <Typography >LocalizedInfo</Typography>
      <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add LocalizedInfo</Button>
      <Box sx = {{ mt:1 }}>
        {
          formData.children?.map((ele:FormData, index:number)=>
            ele && <Accordion 
              key = {index} 
              expanded={expanded === `panel-${index}`} 
              onChange={handleChange(`panel-${index}`)}>
              <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                  <Typography>{ele.label}</Typography>
                  <IconButton
                    onClick = {()=>{
                    //   _.omit(mecJSON, [`${parentKey}.LocalizedInfo[${index}]`]);
                      setMECJSON({ ...mecJSON });
                    }}
                  ><DeleteOutline /></IconButton>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <ChildForm formData={ele} />
              </AccordionDetails>
            </Accordion>
          )}
      </Box>
    </Box>
  );
}
