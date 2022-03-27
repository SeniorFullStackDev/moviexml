import React from 'react';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import MovieTable from 'component/MovieTable';
import CreateForm from 'component/CreateForm';
// import DateAdapter from '@mui/lab/AdapterDateFns';
import DateAdapter from '@mui/lab/AdapterMoment';
import { LocalizationProvider } from '@mui/lab';

function App() {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Routes>
        <Route path="/" element={<MovieTable />} />
        <Route path="/movies/create" element={<CreateForm />} />
        <Route path="/movies/edit/:id" element={<CreateForm />} />
      </Routes>
    </LocalizationProvider>
  );
}

export default App;
