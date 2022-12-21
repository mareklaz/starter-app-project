import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();

  user ? children : <Navigate to='/' />;
  // if (!user) {
  //   return <Navigate to='/' replace />;
  // }
  // return children;
};

export default ProtectedRoute;
