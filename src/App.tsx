import React, { useEffect, useState } from 'react';
import { Container, Box, AppBar, Toolbar, Button } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import MovieTable from 'component/MovieTable';
import CreateForm from 'component/CreateForm';
import { getAllMovies } from 'api';

// import logo from './logo.svg';

function App() {
  // const host = process.env.REACT_APP_API_HOST;
  const [tableData, setTableData] = useState<any[]>([]);

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
      <Routes>
        <Route path="/" element={<MovieTable tableData = {tableData}/>} />
        <Route path="/movies/create" element={<CreateForm />} />
      </Routes>
    </Container>
  );
}

export default App;
