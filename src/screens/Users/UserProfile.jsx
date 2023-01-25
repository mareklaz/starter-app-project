import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import UserImage from '../../assets/jr-korpa-9XngoIpxcEo-unsplash.jpg';
import ProjectListCard from '../../components/Project/ProjectListCard';
import TitleHeader from '../../components/TitleHeader/TitleHeader';
import ContentContainer from '../../components/MainContainer/ContentContainer';
import { useAuthContext } from '../../context/AuthContext';
import UserProfileEditModal from '../../components/Modal/UserProfileEditModal';

const UserProfile = () => {
  const { user } = useAuthContext();

  return (
    <MainContainer>
      <TitleHeader>
        <i className='bi bi bi-person-lines-fill me-2'></i>
        Perfil del Usuario
      </TitleHeader>
      <ContentContainer>
        <div className='row g-3'>
          <div className='col-12 col-lg-4'>
            <div className='p-5 bg-light rounded fw-bold border border-1 shadow-sm d-flex flex-column align-items-center'>
              <img src={UserImage} width={200} height={200} className='rounded-circle' />
              <h3 className='my-3'>{user?.name}</h3>
              <div className='d-flex mx-2'>
                <i className='bi bi-github mx-2 text-dark fs-4'></i>
                <i className='bi bi-linkedin mx-2 text-dark  fs-4'></i>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-8'>
            <div className='p-3 bg-light rounded fw-bold border border-1 shadow-sm '>
              <div className='border-bottom my-3'>
                <div className='d-flex flex-column flex-lg-row align-items-center justify-content-between'>
                  <h4 className='fw-bold text-color-secondary m-0 p-0'>Acerca de mí</h4>
                  <button className='btn btn-dark btn-sm d-flex align-items-center' data-bs-toggle='modal' data-bs-target={`#m-${'63cfc3230579dc98c993d590'}`}>
                    Editar
                    <i className='bi bi-person-fill-gear fs-5 ms-2'></i>
                  </button>
                </div>
                <p>{user?.description}</p>
              </div>
              <div className='border-bottom my-3'>
                <h4 className='fw-bold text-color-secondary '>Perfil</h4>
                <p>Fullstack</p>
              </div>
              <div className='border-bottom my-3'>
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
                  <i className='bi bi-rocket-takeoff-fill me-2'></i>
                  Proyectos Creados
                </span>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <div className='p-3 mb-3 bg-color-dark text-color-light rounded fw-bold border border-1 shadow-sm '>
              <div>
                <span className='fs-4'>
                  <i className='bi bi-lightning-charge-fill me-2'></i>
                  Colaboración en Proyectos
                </span>
              </div>
            </div>
          </div>
        </div>
        <UserProfileEditModal modalId={'63cfc3230579dc98c993d590'} />
      </ContentContainer>
    </MainContainer>
  );
};

export default UserProfile;
