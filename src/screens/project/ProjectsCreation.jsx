import React from 'react';
import Header from '../../components/Header/Header';
import { useForm } from 'react-hook-form';

const ProjectsCreation = () => {
  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Header title={'Crear proyecto'} subtitle={'Comparte tu proyecto con la comunidad'} className='project-image px-3 text-center py-5 my-3 text-white bg-color-primary rounded shadow-sm' />
      <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
        <div className='row'>
          <div className='col-6'>
            <div className='mb-3'>
              <label htmlFor='nameInput' className='form-label'>
                Nombre del Proyecto
              </label>
              <input type='text' {...register('name', { required: true })} className='form-control py-3' id='nameInput' placeholder='Escribe tu nombre del proyecto' />
            </div>
            <div className='mb-3'>
              <label htmlFor='githubInput' className='form-label'>
                Link a Github
              </label>
              <input type='text' {...register('github', { required: true })} className='form-control py-3' id='githubInput' placeholder='Escribe tu nombre del proyecto' />
            </div>
            <div className='mb-3'>
              <label htmlFor='descriptionInput' className='form-label'>
                Descripción del Proyecto
              </label>
              <textarea className='form-control' {...register('description', { required: true })} id='descriptionInput' />
            </div>

            {/* <div className='mb-3'>
              <label htmlFor='fileUploadInput' className='form-label'>
                Selecciona una imagen para tu avatar
              </label>
              {!watch('image') || watch('image').length === 0 ? (
                <>
                  <input type='file' className='form-control form-control-lg fs-6' {...register('image', { required: true })} id='fileUploadInput' />
                </>
              ) : (
                <div className='py-3 text-center'>
                  <span className='small m-2'>{watch('image')[0].name}</span>
                  <span
                    type='button'
                    className='badge rounded-pill text-bg-primary m-2'
                    onClick={() => {
                      resetField('image');
                    }}>
                    Cambiar imagen
                  </span>
                </div>
              )}
            </div> */}
          </div>
          <div className='col-6'>
            <div className='mb-3'>
              <label htmlFor='statusInput' className='form-label'>
                Elige el estado de tu proyecto
              </label>
              <select className='form-select py-3' {...register('status', { required: true })}>
                <option value='Iniciando'>Iniciando</option>
                <option value='En progreso'>En progreso</option>
                <option value='Pendiente'>Pendiente</option>
                <option value='Finalizado'>Finalizado</option>
              </select>
            </div>
            <div className='mb-3'>
              <label htmlFor='startDateInput' className='form-label'>
                Fecha inicio del proyecto
              </label>
              <input type='date' {...register('startDate', { required: true })} className='form-control py-3' id='startDateInput' placeholder='Escribe tu nombre del proyecto' />
            </div>
            <div className='mb-3'>
              <label htmlFor='endDateInput' className='form-label'>
                Fecha fin del proyecto
              </label>
              <input type='date' {...register('endDate', { required: true })} className='form-control py-3' id='endDateInput' placeholder='Escribe tu nombre del proyecto' />
            </div>
          </div>
        </div>
        <div className='d-grid gap-2'>
          <button type='submit' className='btn btn-color-primary py-3'>
            Crear proyecto
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectsCreation;
