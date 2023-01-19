import React from 'react';
import SectionHeader from '../../components/Header/SectionHeader';
import MainContainer from '../../components/MainContainer/MainContainer';

const AuthActiveAccount = () => {
  return (
    <MainContainer>
      <SectionHeader className='login-image text-center py-5 my-3 text-white bg-color-primary rounded shadow-sm'>
        <h1>Activación de cuenta</h1>
      </SectionHeader>
      <div className='row'>
        <div className='col-12 justify-content-center py-3 '>
          <div className='d-flex justify-content-center align-items-center text-success'>
            <i className='bi bi-check-circle-fill me-2 fs-1'></i>
            <h4 className='mb-0'>Tu cuenta se ha activado correctamente</h4>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default AuthActiveAccount;
