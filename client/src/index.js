import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import Search from './Search/Search';
import Restaurant from './Restaurant/Restaurant';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:cuisineName" element={<Search />} />
        <Route path="/restaurant/:restaurantId" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
    </div>
);
