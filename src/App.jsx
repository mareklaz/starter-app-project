import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { Home, Login, Register } from './screens/_index';

function App() {
  return (
    <div className='d-flex flex-nowrap'>
      <Sidebar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
