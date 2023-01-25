import React from 'react';
import NavBar from '../NavBar/NavBar';

const MainContainer = ({ children }) => {
  return (
    <div className='container align-items-center'>
      <div className='row '>
        <div className='col-12'>
          <NavBar />
        </div>
      </div>
      {children}
    </div>
  );
};

export default MainContainer;
