import React from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <>
      <div className='title-image d-flex justify-content-center'>
        <div className='px-3 text-center py-5 mb-3 text-white align-self-center'>
          <h1 className='mb-3'>Bienvenido a Starter</h1>
          <span className='mb-3'>Descubre todos los proyectos con los que puedes colaborar</span>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className='p-3 my-3 text-color-dark rounded border border-1'>
              <div className='p-2 text-center mb-2'>
                <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' class='bi bi-people-fill' viewBox='0 0 16 16'>
                  <path d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' />
                </svg>
              </div>
              <h4 className='text-center'>Colaborativo</h4>
              <p>Starter es un entorno abierto y colaborativo, donde podrás participar con otros desarrolladores en proyectos.</p>
              <button type='button' className='btn btn-accent-1' data-bs-toggle='modal' data-bs-target='#exampleModal'>
                Descubre más
              </button>
            </div>
          </div>
          <div className='col-4'>
            <div className='p-3 my-3 text-color-dark rounded border border-1'>
              <div className='p-2 text-center mb-2'>
                <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' class='bi bi-box-fill' viewBox='0 0 16 16'>
                  <path
                    fill-rule='evenodd'
                    d='M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z'
                  />
                </svg>
              </div>
              <h4 className='text-center'>Proyectos</h4>
              <p>Crea y publica tu proyecto, encuentra gente con la que colaborar y empieza a desarrollar.</p>
              <button type='button' className='btn btn-accent-1' data-bs-toggle='modal' data-bs-target='#exampleModal'>
                Descubre más
              </button>
            </div>
          </div>
          <div className='col-4'>
            <div className='p-3 my-3 text-color-dark rounded border border-1'>
              <div className='p-2 text-center mb-2'>
                <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' class='bi bi-question-circle-fill' viewBox='0 0 16 16'>
                  <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z' />
                </svg>
              </div>
              <h4 className='text-center'>Ayuda</h4>
              <p>Si necesitas ayuda, en Starter siempre habrá alguien con quien poder contar para desarrollar y crear nuevos proyectos y retos.</p>
              <button type='button' className='btn btn-accent-1' data-bs-toggle='modal' data-bs-target='#exampleModal'>
                Descubre más
              </button>
            </div>
          </div>
        </div>

        <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h1 className='modal-title fs-5' id='exampleModalLabel'>
                  Modal title
                </h1>
                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
              </div>
              <div className='modal-body'>...</div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                  Close
                </button>
                <button type='button' className='btn btn-primary'>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
