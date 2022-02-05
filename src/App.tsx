import React from 'react';
import { Container, Box, AppBar, Toolbar, Button } from '@mui/material';

import MovieTable from 'component/MovieTable';
import CreateFormDialog from 'component/CreateFormDialog';

// import logo from './logo.svg';

function App() {
  // const host = process.env.REACT_APP_API_HOST;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Container maxWidth="lg">
      <Box sx = {{ pt:'20px' }}>
        <Box sx = {{ mb:'8px', display:'flex' }}>
          <Button sx = {{ ml:'auto', mr:'0' }} variant='outlined' onClick = {handleClickOpen}>New</Button>
        </Box>
        <MovieTable />
        <CreateFormDialog 
          open = {open}  
          onClose = {()=>{
            setOpen(false);
          }}/>
      </Box>
    </Container>
  );
}

export default App;
