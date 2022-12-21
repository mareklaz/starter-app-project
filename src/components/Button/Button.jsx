import React from 'react';

const Button = ({ className, children, type }) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
