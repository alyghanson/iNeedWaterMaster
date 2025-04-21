import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; // Your home component
import About from './Pages/About'; // Your about component
import Main from './Pages/Main';
import Edit from './Pages/Edit';


//Build Edit page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/main" element={<Main />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
