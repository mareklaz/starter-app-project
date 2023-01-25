import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import MainContainer from '../../components/MainContainer/MainContainer';
import { useForm } from 'react-hook-form';
import { createProject } from '../../services/ProjectServices';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../../components/Modal/Modal';
import TitleHeader from '../../components/TitleHeader/TitleHeader';

const ProjectCreate = () => {
  const [alertMessage, setAlertMessage] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let projectProfiles = [];

    profiles.forEach((element) => {
      projectProfiles.push(element.profileName);
    });

    const dataToSend = {
      ...data,
      projectProfiles,
    };

    console.log('DATA TO SEND', dataToSend);
    createProject(dataToSend)
      .then((project) => {
        console.log('Proyecto creado:', project);
      })
      .catch((error) => {
        console.log('Error al crear proyecto:', error);
      });
  };

  // Colaboradores
  const [profiles, setProfiles] = useState([]);
  const [selectValue, setSelectValue] = useState('Seleccionar');

  const handleProfileValue = (event) => {
    event.preventDefault();
    setSelectValue(event.target.value);
  };

  const addProfile = (selectValue) => {
    if (selectValue != 'Seleccionar') {
      setProfiles([...profiles, { profileName: selectValue, id: uuidv4() }]);
    }
  };

  const removeProfile = (id) => {
    setProfiles(profiles.filter((element) => element.id != id));
  };

  return (
    <MainContainer>
      <TitleHeader>
        <i className='bi bi-rocket-takeoff-fill me-2'></i>
        Crear un nuevo Proyecto
      </TitleHeader>
      <div className='container m-0 p-0'>
        <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
          <div className='row g-3'>
            <div className='col-12 col-lg-6'>
              <div className='p-3 bg-light rounded fw-bold border border-1 shadow-sm '>
                <h4 className='fw-bold text-color-secondary '>Información General</h4>
                <p>Introduce la información sobre tu proyecto, una descripción, las fechas en las que se va a realizar.</p>
                <div className='form-floating mb-3'>
                  <input type='text' {...register('name', { required: true })} className='form-control' id='floatingInput' placeholder='Introduce un nombre para tu proyecto' />
                  <label htmlFor='floatingInput'>Nombre del proyecto</label>
                </div>
                <div className='form-floating mb-3'>
                  <textarea {...register('description', { required: true })} className='form-control' id='description' placeholder='Introduce un nombre para tu proyecto' />
                  <label htmlFor='description'>Descripción del proyecto</label>
                </div>
                <div className='form-floating mb-3 d-flex'>
                  <select {...register('status', { required: true })} className='form-select' id='profilSelection' aria-label='Project status'>
                    <option defaultValue='Seleccionar'>Seleccionar</option>
                    <option value='Iniciado'>Iniciado</option>
                    <option value='En curso'>En curso</option>
                    <option value='Pendiente'>Pendiente</option>
                    <option value='Finalizado'>Finalizado</option>
                  </select>
                  <label htmlFor='profilSelection'>Elige el estado del proyecto</label>
                </div>
                <div className='form-floating mb-3 d-flex'>
                  <select {...register('projectType', { required: true })} className='form-select' id='projectType' aria-label='Project status'>
                    <option defaultValue='Seleccionar'>Seleccionar</option>
                    <option value='Desarrollo Web'>Desarrollo Web</option>
                    <option value='UX/UI'>UX/UI</option>
                    <option value='Data Analyst'>Data Analyst</option>
                  </select>
                  <label htmlFor='profilSelection'>Tipo de proyecto</label>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='col-5 form-floating mb-3'>
                    <input type='date' {...register('startDate', { required: true })} className='form-control' id='startDate' />
                    <label htmlFor='startDate'>Fecha inicio del proyecto</label>
                  </div>
                  <div className='col-5 form-floating mb-3'>
                    <input type='date' {...register('endDate', { required: true })} className='form-control' id='endDate' />
                    <label htmlFor='endDate'>Fecha final del proyecto</label>
                  </div>
                </div>
                <div className='form-floating mb-3'>
                  <input type='text' {...register('github', { required: true })} className='form-control' id='githubInput' placeholder='Introduce un nombre para tu proyecto' />
                  <label htmlFor='githubInput'>Link proyecto en GitHub</label>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-6'>
              <div className='p-3 bg-light rounded fw-bold border border-1 shadow-sm '>
                <h4 className='fw-bold text-color-secondary '>Colaboradores</h4>
                <p>Agrega los perfiles de los Starters que necesites, puedes agregar varias opciones.</p>
                <div className='form-floating mb-3 d-flex'>
                  <select className='form-select' id='profilSelection' aria-label='Starter profiles' onChange={(event) => handleProfileValue(event)}>
                    <option defaultValue='Seleccionar'>Seleccionar</option>
                    <option value='Frontend'>Frontend</option>
                    <option value='Backend'>Backend</option>
                    <option value='Fullstack'>Fullstack</option>
                    <option value='UX/UI'>UX/UI</option>
                    <option value='Data Analyst'>Data Analyst</option>
                  </select>
                  <label htmlFor='profilSelection'>Escoge un perfil a agregar</label>
                  <button
                    type='button'
                    className='btn btn-color-primary py-3 px-5 ms-3'
                    onClick={() => {
                      addProfile(selectValue);
                    }}>
                    Agregar
                  </button>
                </div>
                <div className='d-flex flex-column text-center'>
                  <h5>Starters</h5>
                  <span className='small text-secondary'>Pulsa sobre el perfil, para eliminarlo.</span>
                </div>

                {profiles.map((profile) => (
                  <span key={profile.id} className='badge text-bg-dark align-self-center m-1 profil-badge ' onClick={() => removeProfile(profile.id)}>
                    {/* <i className='bi bi-person-fill-up fs-5 me-2'></i> */}
                    <i className='bi bi-person-fill-dash fs-5 me-2 '></i>
                    <span className='text-white'>{profile.profileName}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className='col-12'>
              <div className='p-3 bg-light rounded fw-bold border border-1 shadow-sm '>
                <button type='submit' className='btn btn-color-primary py-3 px-5'>
                  Crear proyecto
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </MainContainer>
  );
};

export default ProjectCreate;
