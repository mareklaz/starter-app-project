import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Home, Login, Register, ProjectsCreation, ProjectsDetail, Projects, AuthNewPassword, AuthRestorePassword, AuthActiveAccount } from './screens/_index';

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
          <Route path='/auth' element={<AuthNewPassword />}></Route>
          <Route path='/auth/:token' element={<AuthRestorePassword />}></Route>
          <Route path='/activate/:id' element={<AuthActiveAccount />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/projects/create' element={<ProjectsCreation />}></Route>
          <Route path='/projects/:id' element={<ProjectsDetail />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
