import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; // Homepage
import Calandar from './Pages/Calandar'; // Aboutpage
import PlantList from './Pages/PlantList'; //Plant list page
import Login from './Pages/Login';


//Build Edit page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/calandar" element={<Calandar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plantlist" element={<PlantList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
