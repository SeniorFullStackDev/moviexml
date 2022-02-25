import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'
import { FormType, GenreType } from 'utils/types';
import { DeleteOutline } from '@mui/icons-material';
import { SelectValidator } from 'react-material-ui-form-validator';
import MenuItem from '@mui/material/MenuItem';

import genresList from 'config/genres.json';
import MECContext from 'context/MECContext';
import _ from 'lodash';

export default ({ parentKey }:FormType) => {

  const [expanded, setExpanded] = React.useState<string | false>('panel-0');

  const { mecJSON, setMECJSON } = React.useContext(MECContext);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{

    const genres = _.get(mecJSON, `${parentKey}`, []);
    const newIndex = genres.length;

    const newItem:GenreType = {
      '@id':'GenreType-id',
      '@source':'GenreType-source',
      '@level':'GenreType-level'
    };
    _.set(mecJSON, `${parentKey}[${newIndex}]`, newItem);
    setMECJSON({ ...mecJSON });
  }

  const genres = _.get(mecJSON, `${parentKey}`, []);

  return (
    <>
      <Box sx = {{ m:1 }}>
        <Typography >Genre</Typography>
        <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add Genre</Button>
        <Box sx = {{ mt:1 }}>
          {
            genres.map((ele:GenreType, index:number)=>
              ele && <Accordion 
                key = {`${ele['@id']}`} 
                expanded={expanded === `panel-${index}`} 
                onChange={handleChange(`panel-${index}`)}>
                <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                  <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                    <Typography>{ele['@id']}</Typography>
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
                      label = "@id *" 
                      name = {`${parentKey}[${index}].@id`} 
                      validators={['required']}
                      errorMessages={['this field is required']}
                      value={ele['@id']}
                      onChange = {(e:any)=>{
                        _.set(mecJSON, e.target.name, e.target.value);
                        setMECJSON({ ...mecJSON });
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
