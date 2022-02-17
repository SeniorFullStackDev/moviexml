import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'
import LocalizedInfoForm from './LocalizedInfoForm';
import { ArtReferenceType } from 'utils/types';
import { DeleteOutline } from '@mui/icons-material';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import MenuItem from '@mui/material/MenuItem';
import CustomTextValidator from 'component/CustomTextValidator';

import resolutions from 'config/resolutions.json';
import purposes from 'config/ArtReference.purposes.json';


interface Props {
    artreferences:ArtReferenceType[]
}
export default ({ artreferences }:Props) => {

  const [expanded, setExpanded] = React.useState<string | false>('panel-0');

  const [artReferences, setArtReferences] = React.useState<ArtReferenceType[]>(artreferences);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{
    const newItem:ArtReferenceType = {
      '@purpose':'cover',
      '@resolution':'3840x2160',
      'value':'TheGreatMovie-US-16x9.jpg'
    };
    artReferences.push(newItem);
    setArtReferences([...artReferences]);
  }

  return (
    <>
      <Box sx = {{ m:1 }}>
        <Typography >ArtReference</Typography>
        <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add ArtReference</Button>
        <Box sx = {{ mt:1 }}>
          {
            artReferences.map((ele:ArtReferenceType, index:number)=>
              <Accordion 
                key = {`${ele['@purpose']}-${ele['@resolution']}-${index}`} 
                expanded={expanded === `panel-${index}`} 
                onChange={handleChange(`panel-${index}`)}>
                <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                  <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                    <Typography>{ele['@resolution']} {ele['@purpose']}</Typography>
                    <IconButton
                      onClick = {()=>{
                        artReferences.splice(index, 1);
                        setArtReferences([...artReferences]);
                      }}
                    ><DeleteOutline /></IconButton>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                
                  <Box sx = {{ pl:4 }}>
                    <SelectValidator
                      label = "@resolution *" 
                      name = "ArtReference.@resolution" 
                      validators={['required']}
                      errorMessages={['this field is required']}
                      value={ele['@resolution']}
                      onChange = {(event:any)=>{
                        ele['@resolution']=event.target.value;
                        setArtReferences([...artReferences]);
                      }}
                    >
                      {
                        resolutions.map((ele, index)=><MenuItem key = {index} value = {ele}>{ele}</MenuItem>)
                      }
                    </SelectValidator>
                    <SelectValidator
                      label = "@purpose *" 
                      name = "ArtReference.@purpose" 
                      value={ele['@purpose']}
                      validators={['required']}
                      errorMessages={['this field is required']} 
                      onChange = {(event:any)=>{
                        ele['@purpose']=event.target.value;
                        setArtReferences([...artReferences]);
                      }}
                    >
                      {
                        purposes.map((ele, index)=><MenuItem key = {index} value = {ele}>{ele}</MenuItem>)
                      } 
                    </SelectValidator>
                    <CustomTextValidator
                      formData = {ele} 
                      label = "ArtReference *" 
                      name = "ArtReference.value" 
                      validators={['required']}
                      errorMessages={['this field is required']} />
                  </Box>
                </AccordionDetails>
              </Accordion>
            )}
        </Box>
      </Box>
    </>
  );
}
