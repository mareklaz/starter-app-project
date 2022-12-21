import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// import { AuthContextProvider } from './context/AuthContext';

// CSS & Bootstrap
import * as bootstrap from 'bootstrap';
import '../src/sass/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <AuthContextProvider>
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  // </AuthContextProvider>
);
