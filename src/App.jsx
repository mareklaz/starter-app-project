import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Projects from './screens/project/Projects';
import { Home, Login, Register } from './screens/_index';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
