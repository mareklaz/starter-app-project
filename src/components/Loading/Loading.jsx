import React, { Children } from 'react';

const Loading = ({ children }) => {
  return (
    <div className='row'>
      <div className='col-12 justify-content-center'>
        <div className='d-flex my-5 justify-content-center align-items-center'>
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
          <span className='ms-3'>{children}</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
