import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='title-image d-flex justify-content-center m-0 p-0'>
        <div className='text-center py-5 mb-3 text-white align-self-center'>
          <h1 className='mb-3'>Bienvenido a Starter</h1>
          <span className='mb-3'>Descubre todos los proyectos con los que puedes colaborar</span>
        </div>
      </div>
      <MainContainer>
        <div className='row m-0 p-0  mb-5 '>
          <div className='col-12 py-5'>
            <h2>Que es Starter</h2>
            <p>
              Starter es una plataforma en las que los diferentes perfiles tanto expertos como novatos, podrán crear, buscar y colaborar con proyectos de Desarrollo en diferentes fases. Tanto si eres
              un Starter y quieres iniciar un proyecto, como si eres un colaborador, en Starter siempre encontrar un hueco para ti.
            </p>
          </div>
        </div>
        <div className='row mb-5 g-5'>
          <div className='col-12 text-center'>
            <h3>Caracteristicas de Starter</h3>
          </div>
          <div className='col-12 col-lg-4 d-flex flex-column'>
            <div className='text-center py-3'>
              <i c='bi bi-people-fill fs-2'></i>
              <h5>Colaborativo</h5>
            </div>
            <p>
              Starter es colaborativo, tanto si ya tienes un proyecto como si aún no, podrás buscar y ayudar en proyectos de otros Starters. Descubre todos los proyectos{' '}
              <Link to='/projects' className='text-decoration-none fw-bold'>
                aquí.
              </Link>
            </p>
          </div>
          <div className='col-12 col-lg-4 d-flex flex-column'>
            <div className='text-center py-3'>
              <i c='bi bi-rocket-takeoff-fill fs-2'></i>
              <h5>Proyectos</h5>
            </div>
            <p>Si dispones de una idea y quieres llevarla al cabo, no lo dudes, publica tu proyecto, busca colaboradores y lánza tu proyecto con Starter.</p>
          </div>
          <div className='col-12 col-lg-4 d-flex flex-column'>
            <div className='text-center py-3'>
              <i c='bi bi-question-circle-fill fs-2'></i>
              <h5>Ayuda</h5>
            </div>
            <p>En Starter podrás encontrar los perfiles de diferentes usuarios y con ellos podrás crear y apoyarte en tus proyectos. No dudes en solicitar ayuda en tus proyectos.</p>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Home;
