import { Routes, Route } from 'react-router-dom';
import MainContainer from './components/Containers/MainContainer';
import NavBar from './components/NavBar/NavBar';
import NotFound from './screens/404/NotFound';
import Login from './screens/Auth/Login';
import Registro from './screens/Auth/Registro';
import Home from './screens/Misc/Home';
import CreateProject from './screens/Projects/CreateProject';
import ProjectDetail from './screens/Projects/ProjectDetail';
import Projects from './screens/Projects/Projects';
import Starters from './screens/Starters/Starters';
import Profile from './screens/User/Profile';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <MainContainer>
              <Home />
            </MainContainer>
          }
        />
        <Route
          path='/perfil'
          element={
            <MainContainer>
              <Profile />
            </MainContainer>
          }
        />
        <Route
          path='/proyectos'
          element={
            <MainContainer>
              <Projects />
            </MainContainer>
          }
        />
        <Route
          path='/proyectos/:id'
          element={
            <MainContainer>
              <ProjectDetail />
            </MainContainer>
          }
        />
        <Route
          path='/proyectos/crear'
          element={
            <MainContainer>
              <CreateProject />
            </MainContainer>
          }
        />
        <Route
          path='/starters'
          element={
            <MainContainer>
              <Starters />
            </MainContainer>
          }
        />

        <Route
          path='/login'
          element={
            <MainContainer>
              <Login />
            </MainContainer>
          }
        />
        <Route
          path='/registro'
          element={
            <MainContainer>
              <Registro />
            </MainContainer>
          }
        />
        <Route
          path='*'
          element={
            <MainContainer>
              <NotFound />
            </MainContainer>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
