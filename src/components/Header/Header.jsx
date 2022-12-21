import React from 'react';

const Header = ({ children, subtitle }) => {
  return (
    <div className='header-container'>
      <h1>{children}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Header;
