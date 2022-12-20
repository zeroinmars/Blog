import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './pages/Main/Main';
import Typescript from './pages/Typescript/Typescript';
import Nav from './components/Nav/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const typescript = 
<div style={{height:"500px", background:"lightblue"}}>
  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s---rROvro4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/y8duykf5peuazf5rghqr.png" 
  alt="" width="99%"/>
</div>

function App() {
  return (
    <div style={{display:"grid", gridTemplateColumns:"210px 90%"}}>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/typescript' element={<Typescript topImage={typescript}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
      
  );
}

export default App;


