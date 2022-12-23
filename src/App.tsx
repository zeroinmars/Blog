import React, {useState} from 'react';
import Main from './pages/Main';
import Typescript from './pages/Typescript';
import Python from './pages/Python';
import Javascript from './pages/Javascript';
import ReactPage from './pages/React';
import Solidity from './pages/Solidity';
import Nav from './components/Nav/Nav';
// import Header from './components/Header';
import styled from 'styled-components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

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
  // window.addEventListener('click', ()=>{
  //   setOpen(!open);
  // })
  const [open, setOpen] = useState(false);
  // const handleModal:any = ()=>{
  //   setOpen(!open);
  // }

  return (
    <BrowserRouter>
      <Nav/>
      {/* <Header/> */}
      <div style={{display:"grid", gridTemplateColumns:"220px 90%"}}>
        <div/>
        <Modal flag={open}></Modal>
        {/* <button onClick={handleModal}>버튼</button> */}
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/python' element={<Python/>}/>
          <Route path='/javascript' element={<Javascript/>}/>
          <Route path='/typescript' element={<Typescript/>}/>
          <Route path='/react' element={<ReactPage/>}/>
          <Route path='/solidity' element={<Solidity/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
      
  );
}

export default App;


