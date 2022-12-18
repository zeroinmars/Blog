import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Nav from './components/Nav/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div style={{display:"flex"}}>
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
      
  );
}

export default App;


