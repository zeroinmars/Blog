import Main from './pages/Main';
import Typescript from './pages/Typescript';
import Python from './pages/Python';
import Javascript from './pages/Javascript';
import ReactPage from './pages/React';
import Solidity from './pages/Solidity';
import Nav from './components/Nav/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div style={{display:"grid", gridTemplateColumns:"210px 90%"}}>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/python' element={<Python/>}/>
          <Route path='/javascript' element={<Javascript/>}/>
          <Route path='/typescript' element={<Typescript/>}/>
          <Route path='/react' element={<ReactPage/>}/>
          <Route path='/solidity' element={<Solidity/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
      
  );
}

export default App;


