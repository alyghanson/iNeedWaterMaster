import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Main from './Pages/Main';
import Calendar from './Pages/Calendar'; 
import PlantList from './Pages/PlantList';

//TODO change to plants not users
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import PostUser from "./Components/PostUser";
import GetAllUser from "./Components/GetAllUser";


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
        <Route path="post" element={<PostUser />} />
        <Route path="get" element={<GetAllUser />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}


{/* Added this with tutorial? not sure if it is needed*/}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

