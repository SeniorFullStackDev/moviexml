import React, { useEffect, useState } from 'react';
import { Container, Box, AppBar, Toolbar, Button } from '@mui/material';

import MovieTable from 'component/MovieTable';
import CreateFormDialog from 'component/CreateFormDialog';
import { getAllMovies } from 'api';

// import logo from './logo.svg';

function App() {
  // const host = process.env.REACT_APP_API_HOST;
  const [open, setOpen] = React.useState(false);
  const [tableData, setTableData] = useState<any[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(()=>{
    getAllMovies()
      .then(res=>{
        setTableData(res.data);
      }).catch((err:any)=>{
        console.log(err);
      })
  }, [])

  return (
    <Container maxWidth="lg">
      <Box sx = {{ pt:'20px' }}>
        <Box sx = {{ mb:'8px', display:'flex' }}>
          <Button sx = {{ ml:'auto', mr:'0' }} variant='outlined' onClick = {handleClickOpen}>New</Button>
        </Box>
        <MovieTable tableData = {tableData}/>
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
