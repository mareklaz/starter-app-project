import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import ProjectsList from './screens/Projects/ProjectList';
import ProjectCreate from './screens/Projects/ProjectCreate';
import UserProfile from './screens/Users/UserProfile';
import Register from './screens/Register/Register';
import Login from './screens/Login/Login';
import AuthActivation from './screens/Auth/AuthActivation';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/proyectos' element={<ProjectsList />}></Route>
        <Route path='/proyectos/crear' element={<ProjectCreate />}></Route>
        <Route path='/usuarios/perfil' element={<UserProfile />}></Route>
        <Route path='/activation/:id' element={<AuthActivation />}></Route>
      </Routes>
    </>
  );
}

export default App;
