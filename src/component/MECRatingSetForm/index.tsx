import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'
import { LocalizedInfoType, RatingSetType, RatingType,  FormType } from 'utils/types';
import { DeleteOutline } from '@mui/icons-material';
import CustomTextValidator from 'component/CustomTextValidator';
import { TextValidator } from 'react-material-ui-form-validator';

export default function MECRatingSetForm({ parentKey }:FormType) {

  const [expanded, setExpanded] = React.useState<string | false>('panel-0');

  const [ratings, setRatings] = React.useState<RatingType[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{
    const newItem:RatingType = {
      'Region':{ country:'us' },
      'System':'',
      'Value':'',
    }
    ratings.push(newItem);
    setRatings([...ratings]);
  }

  return (
    <Box sx = {{ m:1 }}>
      <Typography >RatingSet</Typography>
      <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add Rating</Button>
      <Box sx = {{ mt:1 }}>
        {
          ratings.map((ele:RatingType, index:number)=>
            <Accordion 
              key = {index} 
              expanded={expanded === `panel-${index}`} 
              onChange={handleChange(`panel-${index}`)}>
              <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                  <Typography>#{index}</Typography>
                  <IconButton
                    onClick = {()=>{
                      ratings.splice(index, 1);
                      setRatings([...ratings]);
                    }}
                  ><DeleteOutline /></IconButton>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx = {{ pl:4 }}>
                  <Typography >Region</Typography>
                  <Box sx = {{ pl:4 }}>
                    <TextValidator
                      name = {`${parentKey}.RatingSet[${index}].Rating.Region.Country`} 
                      label = "Country *" 
                      validators={['required']}
                      errorMessages={['this field is required']} />
                  </Box>
                  <TextValidator
                    name = {`${parentKey}.RatingSet[${index}].Rating.System`} 
                    label = "System" 
                    validators={['required']}
                    errorMessages={['this field is required']} />
                  <br/>
                  <TextValidator
                    name = {`${parentKey}.RatingSet[${index}].Rating.Value`} 
                    label = "Value *" 
                    validators={['required']}
                    errorMessages={['this field is required']} />
                </Box>
              </AccordionDetails>
            </Accordion>
          )}
      </Box>
    </Box>
  );
}