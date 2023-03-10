import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import ProjectsList from './screens/Projects/ProjectList';
import ProjectCreate from './screens/Projects/ProjectCreate';
import UserProfile from './screens/Users/UserProfile';
import Register from './screens/Register/Register';
import Login from './screens/Login/Login';
import AuthActivation from './screens/Auth/AuthActivation';
import ProjectDetail from './screens/Projects/ProjectDetail';
import ProtectedRoute from './components/ProtectedRoutes/ProtectedRoutes';
import NotFound from './screens/NotFound/NotFound';
import UsersList from './screens/Users/UsersList';
import UserProfileEdit from './screens/Users/UserProfileEdit';
import ProjectWeb from './screens/Projects/ProjectWeb';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route
          path='/proyectos'
          element={
            <ProtectedRoute>
              <ProjectsList />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path='/proyectos/web'
          element={
            <ProtectedRoute>
              <ProjectWeb />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path='/proyectos/data'
          element={
            <ProtectedRoute>
              <ProjectWeb />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path='/proyectos/uxui'
          element={
            <ProtectedRoute>
              <ProjectWeb />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path='/proyectos/:id'
          element={
            <ProtectedRoute>
              <ProjectDetail />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path='/proyectos/crear'
          element={
            <ProtectedRoute>
              <ProjectCreate />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={'/perfil/:id'}
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={'/perfil/edit/:id'}
          element={
            <ProtectedRoute>
              <UserProfileEdit />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={'/colaboradores'}
          element={
            <ProtectedRoute>
              <UsersList />
            </ProtectedRoute>
          }
        ></Route>
        <Route path='/activation/:id' element={<AuthActivation />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
