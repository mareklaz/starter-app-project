import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import NavBar from '../../components/NavBar/NavBar';
import UserImage from '../../assets/jr-korpa-9XngoIpxcEo-unsplash.jpg';
import ProjectListCard from '../../components/Project/ProjectListCard';
const UserProfile = () => {
  return (
    <MainContainer>
      <div className='container p-0 m-0 my-5 align-items-center'>
        <div className='row'>
          <div className='col-12'>
            <NavBar />
          </div>
        </div>
        <div className='p-3 my-3 navbar-custom bg-dark text-light rounded fw-bold border border-1 shadow-sm d-flex justify-content-center align-items-center '>
          <span className='fs-4 '>
            <i className='bi bi bi-person-lines-fill me-2'></i>
            Perfil del Usuario
          </span>
        </div>
        <div className='container m-0 p-0'>
          <div className='row g-3'>
            <div className='col-12 col-lg-4'>
              <div className='p-5 bg-light rounded fw-bold border border-1 shadow-sm d-flex flex-column align-items-center'>
                <img src={UserImage} width={200} height={200} className='rounded-circle' />
                <h3 className='my-3'>Marek</h3>
                <div className='d-flex mx-2'>
                  <i className='bi bi-github mx-2 text-dark fs-4'></i>
                  <i className='bi bi-linkedin mx-2 text-dark  fs-4'></i>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-8'>
              <div className='p-3 bg-light rounded fw-bold border border-1 shadow-sm '>
                <div>
                  <h4 className='fw-bold text-color-secondary '>Acerca de mí</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci inventore quas quod odit fugit explicabo, est nam illum excepturi dolorem.</p>
                </div>
                <div>
                  <h4 className='fw-bold text-color-secondary '>Perfil</h4>
                  <p>Fullstack</p>
                </div>
                <div>
                  <h4 className='fw-bold text-color-secondary '>Habilidades</h4>
                  <p>JavaScript</p>
                  <p>HTML</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-6'>
              <div className='p-3 mb-3 bg-color-dark text-color-light rounded fw-bold border border-1 shadow-sm '>
                <div>
                  <span className='fs-4'>
                    <i class='bi bi-rocket-takeoff-fill me-2'></i>
                    Proyectos Creados
                  </span>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-6'>
              <div className='p-3 mb-3 bg-color-dark text-color-light rounded fw-bold border border-1 shadow-sm '>
                <div>
                  <span className='fs-4'>
                    <i class='bi bi-lightning-charge-fill me-2'></i>
                    Colaboración en Proyectos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default UserProfile;
