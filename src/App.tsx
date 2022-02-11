import React from 'react';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import MovieTable from 'component/MovieTable';
import CreateForm from 'component/CreateForm';

function App() {
  return (
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<MovieTable />} />
        <Route path="/movies/create" element={<CreateForm />} />
        <Route path="/movies/edit/:id" element={<CreateForm />} />
      </Routes>
    </Container>
  );
}

export default App;
