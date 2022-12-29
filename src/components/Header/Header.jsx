import React from 'react';

const Header = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h1 className='mb-3'>{title}</h1>
      <span className='mb-3'>{subtitle}</span>
    </div>
  );
};

export default Header;
