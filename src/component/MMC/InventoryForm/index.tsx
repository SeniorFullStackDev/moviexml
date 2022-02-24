import React from 'react';
import { Box, TextField, Typography, Button, IconButton  } from '@mui/material';
import _ from 'lodash';
import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionSummary, AccordionDetails } from 'component/CustomAccordion'
import { FormType, InventoryType, VideoType } from 'utils/types';
import MMCContext from 'context/MMCContext';
import { DeleteOutline } from '@mui/icons-material';
import InventoryForm from './InventoryForm';

export default function({ parentKey }:FormType){

  const { mmcJSON, setMMCJSON } = React.useContext(MMCContext);

  const [expanded, setExpanded] = React.useState<string | false>('panel-0');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const addMoreItem = ()=>{
    const arr = _.get(mmcJSON, 'Inventories', []);
    const newIndex = arr.length;

    const newItem:InventoryType = {
      Video:{
        '@VideoTrackID':'',
        Type:'string',
        Picture:{
          AspectRatio:'string',
          WidthPixels:'string',
          HeightPixels:'string',
          MasteredColorVolume:{
            PrimaryRChromaticity:{
              ChromaticityCIEx:'string',
              ChromaticityCIEy:'string',
            },
            PrimaryGChromaticity:{
              ChromaticityCIEx:'string',
              ChromaticityCIEy:'string',
            },
            PrimaryBChromaticity:{
              ChromaticityCIEx:'string',
              ChromaticityCIEy:'string',
            },
            WhitePointChromaticity:{
              ChromaticityCIEx:'string',
              ChromaticityCIEy:'string',
            },
            LuminanceMin:'string',
            LuminanceMax:'string',
          },
          LightLevel:{
            ContentMax:'string',
            FrameAverageMax:'string',
          },
        },
        Language:'string',
        ContainerReference:{
          ContainerLocation:'string'
        }
      },
      Audio:{
        '@AudioTrackID':'string',
        Type:'string',
        Language:'string',
        ContainerReference: {
          ContainerLocation:'string',
        }
      },
      Subtitle:{
        '@SubtitleTrackID':'string',
        Format:'string',
        Type:'string',
        Language:'string',
        Encoding:{
          FrameRate:{
            '@multiplier':'string',
            timecode:'string',
            value:0,
          }
        },
        ContainerReference:{
          ContainerLocation:'string',
        }
      }
    }
    _.set(mmcJSON, `Inventories[${newIndex}]`, newItem);
    setMMCJSON({ ...mmcJSON });
  }

  const arr = _.get(mmcJSON, 'Inventories', []);

  return (
    <Box>
      <Typography >Inventory</Typography>
      <Button variant='outlined' onClick={addMoreItem} startIcon = {<AddIcon />}>Add Inventory</Button>
      <Box sx = {{ mt:1 }}>
        {
          arr.map((ele:InventoryType, index:number)=>
            <Accordion
              key = {`${index}`} 
              expanded={expanded === `panel-${index}`} 
              onChange={handleChange(`panel-${index}`)}>
              <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
                <Box sx = {{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                  <Typography>#{index}</Typography>
                  <IconButton
                    onClick = {()=>{
                      _.omit(mmcJSON, [`Inventories[${index}]`]);
                      setMMCJSON({ ...mmcJSON });
                    }}
                  ><DeleteOutline /></IconButton>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <InventoryForm parentKey={`Inventories[${index}]`} data = {ele} />
              </AccordionDetails>
            </Accordion>
          )}
      </Box>
    </Box>
  );
}