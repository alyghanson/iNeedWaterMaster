import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Home from './Pages/Home'; // Homepage
import Calandar from './Pages/Calandar'; // Aboutpage
import PlantList from './Pages/PlantList'; //Plant list page
import Login from './Pages/Login';
=======
import Login from './Pages/Login';
import Main from './Pages/Main';
import Calendar from './Pages/Calendar'; 
import PlantList from './Pages/PlantList';
>>>>>>> develop


//Build Edit page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/calandar" element={<Calandar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plantlist" element={<PlantList />} />
=======
        <Route path="/" element={<Main />} />
        <Route path="/plantlist" element={<PlantList />} />
        <Route path="/calendar" element={<Calendar />} />
>>>>>>> develop
      </Routes>
    </BrowserRouter>
  );
}

export default App;
