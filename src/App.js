import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Hill from './Pages/Hill';
import Temples from './Pages/Temples';
import Watterfalls from './Pages/Watterfalls';
import Navbar from "./components/Navbar";



const App = () => {

  return <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    
    <Route path="/hill" element={<Hill/>}/>
    <Route path="/temples" element={<Temples/>}/>
    <Route path="/watterfalls" element={<Watterfalls/>}/>
  </Routes>
  </BrowserRouter>
  }

  export default App;









