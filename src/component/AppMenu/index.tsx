import * as React from 'react';
import {
  Button,
  Box,
  Link, 
  Drawer, 
  Toolbar,
  List,
} from '@mui/material';
import { Divider } from '@mui/material';

import DataObjectIcon from '@mui/icons-material/DataObject';
import ArticleIcon from '@mui/icons-material/Article';
import AppMenuItem from 'component/AppMenuItem';

export default function({ drawerWidth }:{ drawerWidth:number }){

    

  const [activeMenuItem, setActiveMenuItem] = React.useState('mec');

  const appMenuItems = [
    {
      name: 'MEC',
      href:'#mec-form',
      Icon: ArticleIcon,
      items: [
        {
          name: 'LocalizedInfo',
          href:'#mec-MECLocalizedInfoForm'
        },
        {
          name: 'Release History',
          href:'#mec-MECReleaseHistoryForm'
        },
        {
          name: 'AltIdentifier',
          href:'#mec-AltIdentifierForm'
        },
        {
          name: 'RatingSet',
          href:'#mec-MECRatingSetForm'
        },
        {
          name: 'AssociatedOrg',
          href:'#mec-MECAssociatedOrgForm'
        },
        {
          name: 'SequenceInfo',
          href:'#mec-SequenceInfoForm'
        },
        {
          name: 'Parent',
          href:'#mec-MECParentForm'
        },
        {
          name: 'CompanyDisplayCredit',
          href:'#mec-MECCompanyDisplayCreditForm'
        },
      ]
    },
    {
      name: 'MMC',
      href:'#mmc-form',
      Icon: DataObjectIcon,
      items: [
        {
          name:'Inventory',
          href:'#mmc-InventoryForm'
        },
        {
          name:'Presentations',
          href:'#mmc-PresentationsForm'
        },
        {
          name:'PlayableSequences',
          href:'#mmc-PlayableSequencesForm'
        },
        {
          name:'Experiences',
          href:'#mmc-ExperiencesForm'
        },
        {
          name:'ALIDExperienceMaps',
          href:'#mmc-ALIDExperienceMapsForm'
        },
      ]
    },
  ]

  const drawer = (
    <>
      <Toolbar>
        <Box sx = {{ mb:'8px', display:'flex' }}>
          <Link href='/' underline="none">
            <Button  variant='outlined'>Back</Button>
          </Link>
        </Box>
      </Toolbar>
      <Divider />
      <List>
        {
          appMenuItems.map((item:any, index:number)=>
            <AppMenuItem {...item} key={index} />
          )
        }
      </List>
    </>
  )
      
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        variant="temporary"
        anchor="left"
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}