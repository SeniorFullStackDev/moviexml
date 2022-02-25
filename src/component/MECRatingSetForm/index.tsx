import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'
import { RatingType,  FormType } from 'utils/types';
import { DeleteOutline } from '@mui/icons-material';

import RatingForm from './RatingForm';
import _ from 'lodash';
import MECContext from 'context/MECContext';

export default function MECRatingSetForm({ parentKey }:FormType) {

  const [expanded, setExpanded] = React.useState<string | false>('panel-0');
  const { mecJSON, setMECJSON } = React.useContext(MECContext);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{
    const ratings = _.get(mecJSON, `${parentKey}.RatingSet`, []);
    const newIndex = ratings.length;
    const newItem:RatingType = {
      'Region':{ country:'us' },
      'System':'',
      'Value':'',
    }
    _.set(mecJSON, `${parentKey}.RatingSet[${newIndex}]`, newItem);
    setMECJSON({ ...mecJSON });
  }

  const ratings = _.get(mecJSON, `${parentKey}.RatingSet`, []);

  return (
    <Box sx = {{ m:1 }}>
      <Typography >RatingSet</Typography>
      <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add Rating</Button>
      <Box sx = {{ mt:1 }}>
        {
          ratings.map((ele:RatingType, index:number)=>
            ele && <Accordion 
              key = {index} 
              expanded={expanded === `panel-${index}`} 
              onChange={handleChange(`panel-${index}`)}>
              <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                  <Typography>#{index}</Typography>
                  <IconButton
                    onClick = {()=>{
                      _.omit(mecJSON, [`${parentKey}.RatingSet[${index}]`]);
                      setMECJSON({ ...mecJSON });
                    }}
                  ><DeleteOutline /></IconButton>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <RatingForm parentKey={`${parentKey}.RatingSet[${index}]`} />
              </AccordionDetails>
            </Accordion>
          )}
      </Box>
    </Box>
  );
}