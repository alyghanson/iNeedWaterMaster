import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Main from './Pages/Main';
import Calendar from './Pages/Calendar'; 
import PlantList from './Pages/PlantList';

//TODO change to plants not users
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import PostPlant from "./Components/PostPlant";
import GetAllPlant from "./Components/GetAllPlant";


//Build Edit page -> fix last four route to integrate plants not users

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/plantlist" element={<PlantList />} />
        <Route path="/calendar" element={<Calendar />} />

        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post" element={<PostPlant />} />
        <Route path="get" element={<GetAllPlant />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
