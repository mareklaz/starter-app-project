import React from 'react';
import { useForm } from 'react-hook-form';

const UserProfileEditModal = ({ children, modalId }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div className='modal  fade' id={`m-${modalId}`} tabIndex='-1' aria-labelledby={modalId} aria-hidden='true'>
        <div className='modal-dialog modal-xl modal-fullscreen-lg-down'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id={modalId}>
                Editar perfil del usuario
              </h1>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <form encType='multipart/form-data'>
                <div className='form-floating mb-3'>
                  <input type='text' {...register('name', { required: true })} className='form-control' id='floatingInput' placeholder='Introduce un nombre para tu proyecto' />
                  <label htmlFor='floatingInput'>Nombre del usuario</label>
                </div>
                <div className='form-floating mb-3'>
                  <input type='text' {...register('name', { required: true })} className='form-control' id='floatingInput' placeholder='Introduce un nombre para tu proyecto' />
                  <label htmlFor='floatingInput'>Habilidades</label>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                Cerrar
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

export default UserProfileEditModal;
