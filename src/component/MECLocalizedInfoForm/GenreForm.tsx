import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'
import LocalizedInfoForm from './LocalizedInfoForm';
import { FormType, GenreType } from 'utils/types';
import { DeleteOutline } from '@mui/icons-material';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import MenuItem from '@mui/material/MenuItem';
import CustomTextValidator from 'component/CustomTextValidator';

import resolutions from 'config/resolutions.json';
import purposes from 'config/ArtReference.purposes.json';
import genresList from 'config/genres.json';


interface Props extends FormType{
    data:GenreType[]
}
export default ({ parentKey, data }:Props) => {

  const [expanded, setExpanded] = React.useState<string | false>('panel-0');

  const [genres, setGenres] = React.useState<GenreType[]>(data);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{
    const newItem:GenreType = {
      '@id':'GenreType-id',
      '@source':'GenreType-source',
      '@level':'GenreType-level'
    };
    genres.push(newItem);
    setGenres([...genres]);
  }

  return (
    <>
      <Box sx = {{ m:1 }}>
        <Typography >Genre</Typography>
        <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add Genre</Button>
        <Box sx = {{ mt:1 }}>
          {
            genres.map((ele:GenreType, index:number)=>
              <Accordion 
                key = {`${ele['@id']}`} 
                expanded={expanded === `panel-${index}`} 
                onChange={handleChange(`panel-${index}`)}>
                <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                  <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                    <Typography>{ele['@id']}</Typography>
                    <IconButton
                      onClick = {()=>{
                        genres.splice(index, 1);
                        setGenres([...genres]);
                      }}
                    ><DeleteOutline /></IconButton>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                
                  <Box sx = {{ pl:4 }}>
                    <SelectValidator
                      label = "@id *" 
                      name = {`${parentKey}[${index}].@id`} 
                      validators={['required']}
                      errorMessages={['this field is required']}
                      value={ele['@id']}
                      onChange = {(event:any)=>{
                        ele['@id']=event.target.value;
                        setGenres([...genres]);
                      }}
                    >
                      {
                        genresList.map((ele, index)=><MenuItem key = {index} value = {ele.one_ring_code}>{ele.one_ring_string}</MenuItem>)
                      }
                    </SelectValidator>
                  </Box>
                </AccordionDetails>
              </Accordion>
            )}
        </Box>
      </Box>
    </>
  );
}
