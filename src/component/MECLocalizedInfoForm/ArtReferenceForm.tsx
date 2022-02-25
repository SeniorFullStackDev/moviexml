import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'
import LocalizedInfoForm from './LocalizedInfoForm';
import { ArtReferenceType, FormType } from 'utils/types';
import { DeleteOutline } from '@mui/icons-material';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import MECContextTextValidator from 'component/ContextTextValidator/MECContextTextValidator';
import MenuItem from '@mui/material/MenuItem';

import resolutions from 'config/resolutions.json';
import purposes from 'config/ArtReference.purposes.json';

import MECContext from 'context/MECContext';
import _ from 'lodash';

interface Props extends FormType {
    artreferences:ArtReferenceType[];
}
export default ({ parentKey, artreferences }:Props) => {

  const { mecJSON, setMECJSON } = React.useContext(MECContext);

  const [expanded, setExpanded] = React.useState<string | false>('panel-0');

  // const [artReferences, setArtReferences] = React.useState<ArtReferenceType[]>(artreferences);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{

    const artReferences = _.get(mecJSON, `${parentKey}`, []);
    const newIndex = artReferences.length;

    const newItem:ArtReferenceType = {
      '@purpose':'cover',
      '@resolution':'3840x2160',
      'value':'TheGreatMovie-US-16x9.jpg'
    };
    _.set(mecJSON, `${parentKey}[${newIndex}]`, newItem);
    setMECJSON({ ...mecJSON });
  }

  const artReferences = _.get(mecJSON, `${parentKey}`, []);

  return (
    <>
      <Box sx = {{ m:1 }}>
        <Typography >ArtReference</Typography>
        <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add ArtReference</Button>
        <Box sx = {{ mt:1 }}>
          {
            artReferences.map((ele:ArtReferenceType, index:number)=>
              ele && <Accordion 
                key = {`${ele['@purpose']}-${ele['@resolution']}-${index}`} 
                expanded={expanded === `panel-${index}`} 
                onChange={handleChange(`panel-${index}`)}>
                <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                  <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                    <Typography>{ele['@resolution']} {ele['@purpose']}</Typography>
                    <IconButton
                      onClick = {()=>{
                        _.omit(mecJSON, [`${parentKey}[${index}]`]);
                        setMECJSON({ ...mecJSON });
                      }}
                    ><DeleteOutline /></IconButton>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                
                  <Box sx = {{ pl:4 }}>
                    <SelectValidator
                      label = "@resolution *" 
                      name = {`${parentKey}[${index}].@resolution`} 
                      validators={['required']}
                      errorMessages={['this field is required']}
                      value={ele['@resolution']}
                      onChange = {(e:any)=>{
                        _.set(mecJSON, e.target.name, e.target.value);
                        setMECJSON({ ...mecJSON });
                      }}
                    >
                      {
                        resolutions.map((ele, index)=><MenuItem key = {index} value = {ele}>{ele}</MenuItem>)
                      }
                    </SelectValidator>
                    <SelectValidator
                      label = "@purpose *" 
                      name = {`${parentKey}[${index}].@purpose`} 
                      value={ele['@purpose']}
                      validators={['required']}
                      errorMessages={['this field is required']} 
                      onChange = {(e:any)=>{
                        _.set(mecJSON, e.target.name, e.target.value);
                        setMECJSON({ ...mecJSON });
                      }}
                    >
                      {
                        purposes.map((ele, index)=><MenuItem key = {index} value = {ele}>{ele}</MenuItem>)
                      } 
                    </SelectValidator>
                    <MECContextTextValidator
                      label = "ArtReference *" 
                      name = {`${parentKey}[${index}].value`} 
                      validators={['required']}
                      defaultValue= {ele['value']}
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
