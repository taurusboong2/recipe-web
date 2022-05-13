import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cuisine from './Cuisine';
import Home from './Home';

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine' element={<Cuisine />} />
      </Routes>
    </>
  );
};

export default Pages;
