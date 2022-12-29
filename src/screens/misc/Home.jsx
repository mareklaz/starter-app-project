import React from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <div className=''>
      <div className='px-3 text-center py-5 my-3 text-white bg-color-primary rounded shadow-sm title-image'>
        <h1 className='mb-3'>Bienvenido a Starter</h1>
        <span className='mb-3'>Descubre todos los proyectos con los que puedes colaborar</span>
      </div>

      {/* <div className='d-flex flex-row p-3 my-3 text-white bg-accent-2 rounded shadow-sm'>
        <RocketLaunchIcon strokeWidth={1.5} className='text-white me-2' width={32} />
        <h3 className='fw-light mb-0'>Proyectos mejor valorados</h3>
      </div>
      <div className=''>
        <div className='row g-4'>
          <div className='col-12 col-lg-6'>
            <div className='p-3 text-color-light bg-color-primary rounded shadow-sm'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis doloremque impedit doloribus harum enim praesentium eligendi esse ipsum nemo sit, debitis laborum, mollitia ipsam.
                Libero quam quod quisquam aspernatur consequuntur?
              </p>

              <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'>
                Launch demo modal
              </button>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <div className='p-3 text-color-light bg-color-primary rounded shadow-sm'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis doloremque impedit doloribus harum enim praesentium eligendi esse ipsum nemo sit, debitis laborum, mollitia ipsam.
                Libero quam quod quisquam aspernatur consequuntur?
              </p>

              <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'>
                Launch demo modal
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className='p-3 my-3 text-color-light bg-dark rounded shadow-sm'>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis doloremque impedit doloribus harum enim praesentium eligendi esse ipsum nemo sit, debitis laborum, mollitia ipsam. Libero
          quam quod quisquam aspernatur consequuntur?
        </p>

        <button type='button' className='btn btn-accent-1' data-bs-toggle='modal' data-bs-target='#exampleModal'>
          Ver más
        </button>
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
  );
};

export default Home;
