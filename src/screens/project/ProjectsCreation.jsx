import React from 'react';
import { useForm } from 'react-hook-form';
import SectionHeader from '../../components/Header/SectionHeader';
import MainContainer from '../../components/MainContainer/MainContainer';
import { createProject } from '../../services/ProjectServices';

const ProjectsCreation = () => {
  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    const formData = new FormData();

    for (let value in values) {
      formData.append(value, values[value]);
    }
    console.log(formData);
    createProject(formData)
      .then((project) => {
        if (project) {
          console.log('Proyecto creado:', project);
        } else {
          console.log('Error en la creación del proyecto: ', project);
        }
      })
      .catch((error) => {
        console.log('Error al crear proyecto:', error);
      });
  };

  return (
    <MainContainer>
      <SectionHeader className='project-image text-center py-5 my-3 text-white bg-color-primary rounded shadow-sm'>
        <h1>Crear proyecto nuevo</h1>
      </SectionHeader>

      <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-4'>
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

            <div className='mb-3'>
              <label htmlFor='fileUploadInput' className='form-label'>
                Selecciona una imagen para la cabecera de tu proyecto
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
            </div>
          </div>
          <div className='col-12 col-lg-4'>
            <div className='mb-3'>
              <label htmlFor='statusInput' className='form-label'>
                Elige el estado de tu proyecto
              </label>
              <select className='form-select py-3' {...register('status', { required: true })}>
                <option value='Iniciado'>Iniciado</option>
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
          <div className='col-12 my-3 '>
            <div className='d-flex gap-2 justify-content-center'>
              <button type='submit' className='btn btn-color-primary py-3 px-5'>
                Crear proyecto
              </button>
            </div>
          </div>
        </div>
      </form>
    </MainContainer>
  );
};

export default ProjectsCreation;
