import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { router } from './router';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {router}
      </Routes>
    </BrowserRouter>
  );
}

export default App;