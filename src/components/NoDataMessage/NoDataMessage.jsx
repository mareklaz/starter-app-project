import React from 'react';

const NoDataMessage = ({ children }) => {
  return (
    <div className='row'>
      <div className='col-12 justify-content-center'>
        <div className='d-flex my-5 justify-content-center align-items-center'>
          <span className='ms-3'>{children}</span>
        </div>
      </div>
    </div>
  );
};

export default NoDataMessage;
