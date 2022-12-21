import React from 'react';

const Home = () => {
  return (
    <div className='container'>
      <h1 className='mb-3 text-primary'>Estas en HOME</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis doloremque impedit doloribus harum enim praesentium eligendi esse ipsum nemo sit, debitis laborum, mollitia ipsam. Libero
        quam quod quisquam aspernatur consequuntur?
      </p>
      <span data-bs-toggle='tooltip' data-bs-title='Default tooltip'>
        MArek
      </span>

      <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'>
        Launch demo modal
      </button>

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
