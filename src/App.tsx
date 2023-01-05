import React, {useEffect, useState} from 'react';
import Main from './pages/Main';
import Test from './pages/Test';
import Typescript from './pages/languages/Typescript';
import Python from './pages/languages/Python';
import Javascript from './pages/languages/Javascript';
import ReactPage from './pages/languages/React';
import Solidity from './pages/languages/Solidity';
import Nav from './components/Nav/Nav';
// import Header from './components/Header';
import styled from 'styled-components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Generic from './pages/languages/typescript/Generic';
import CryptoZombies1 from './pages/languages/solidity/crypto-zombies/CryptoZombies1';
import axios from 'axios';

const Modal = styled.div<{flag:boolean}>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.1);
  width:100%;
  height:100vh;
  display:  ${props=>(props.flag? 'block' : 'none')};;
`

function App() {
  // const [open, setOpen] = useState(false);
  // const handleModal:any = ()=>{
  //   setOpen(!open);
  // }
  const getApi = ()=>{
    axios.post('http://localhost:5000/test',{name:"seungmin"})
    .then((result:any)=>{console.log("success to send api", result)})
    .catch((err:any)=>{console.log(err)})
  }
  return (
    <BrowserRouter>
      <Nav/>
      {/* <button onClick={getApi}>ㄷㄱㄷㄱㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ</button> */}
      {/* <Header/> */}
      <div style={{display:"grid", gridTemplateColumns:"220px 90%"}}>
        <div/>
        {/* <Modal flag={open}></Modal> */}
        {/* <button onClick={handleModal}>버튼</button> */}
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/test' element={<Test/>}/>
          <Route path='/python' element={<Python/>}/>
          <Route path='/javascript' element={<Javascript/>}/>
          <Route path='/typescript' element={<Typescript/>}/>
          <Route path='/react' element={<ReactPage/>}/>
          <Route path='/solidity' element={<Solidity/>}/>
          <Route path='/typescript/generic' element={<Generic/>}/>
          <Route path='/solidity/cryptoZombies' element={<CryptoZombies1/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
      
  );
}

export default App;


