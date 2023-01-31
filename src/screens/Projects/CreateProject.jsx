import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CardContainer from '../../components/Containers/CardContainer';
import PageHeader from '../../components/Headers/PageHeader';
import { v4 as uuidv4 } from 'uuid';
import { createProject } from '../../services/ProjectServices';
const CreateProject = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [alertMessage, setAlertMessage] = useState(false);

  // Colaboradores
  const [profiles, setProfiles] = useState([]);
  const [selectValue, setSelectValue] = useState('Seleccionar');

  const handleProfileValue = (event) => {
    event.preventDefault();
    setSelectValue(event.target.value);
  };

  const addProfile = (selectValue) => {
    setProfiles([
      ...profiles,
      { profileName: selectValue, profileId: uuidv4() },
    ]);
  };

  const removeProfile = (id) => {
    setProfiles(profiles.filter((element) => element.profileId !== id));
  };

  const onSubmit = (data) => {
    const dataToSend = {
      ...data,
      profiles,
    };
    console.log(dataToSend);

    createProject(dataToSend)
      .then((project) => {
        reset();
        setAlertMessage(true);
        // setTimeout(() => {
        //   setAlertMessage(false);
        // }, 1000);

        console.log('Proyecto creado:', project);
      })
      .catch((error) => {
        console.log('Error al crear proyecto:', error);
      });
  };

  return (
    <div className='row'>
      <PageHeader>Nuevo Proyecto</PageHeader>
      <CardContainer>
        <div className='col-12'>
          <div className='border rounded bg-light shadow-sm mb-3 p-3'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType='multipart/form-data'
            >
              <div className='row g-2 d-flex mb-3 border-bottom'>
                <h3>Crear un nuevo proyecto</h3>
                <p>Introducte la información sobre tu proyecto.</p>
                <div className='col-12 form-floating mb-3'>
                  <input
                    {...register('name', { required: true })}
                    type='name'
                    className='form-control'
                  />
                  <label>Nombre proyecto</label>
                  {errors.name?.type === 'required' && (
                    <span className='text-danger small my-1'>
                      Es necesario introducir el nombre de un proyecto.
                    </span>
                  )}
                </div>
                <div className='col-12 form-floating mb-3'>
                  <textarea
                    {...register('description', { required: true })}
                    className='form-control'
                  />
                  <label>Descripción del proyecto</label>
                  {errors.description?.type === 'required' && (
                    <span className='text-danger small my-1'>
                      Es necesario introducir un descripción del proyecto.
                    </span>
                  )}
                </div>

                <div className='col-12 col-md-6 form-floating mb-3 d-flex'>
                  <select
                    {...register('status', { required: true })}
                    className='form-select'
                    aria-label='Project status'
                  >
                    <option value='Iniciado'>Iniciado</option>
                    <option value='En curso'>En curso</option>
                    <option value='Pendiente'>Pendiente</option>
                    <option value='Finalizado'>Finalizado</option>
                  </select>
                  <label>Elige el estado del proyecto</label>
                  {errors.status?.type === 'required' && (
                    <span className='text-danger small my-1'>
                      Es necesario introducir un descripción del proyecto.
                    </span>
                  )}
                </div>
                <div className='col-12 col-md-6 form-floating mb-3 d-flex'>
                  <select
                    {...register('projectType', { required: true })}
                    className='form-select'
                    aria-label='Project status'
                  >
                    <option value='Desarrollo Web'>Desarrollo Web</option>
                    <option value='UX/UI'>UX/UI</option>
                    <option value='Data Analyst'>Data Analyst</option>
                  </select>
                  <label>Tipo de proyecto</label>
                </div>
                <div className='col-12 col-md-6 form-floating mb-3'>
                  <input
                    type='date'
                    {...register('startDate', { required: true })}
                    className='form-control'
                  />
                  <label>Fecha inicio del proyecto</label>
                  {errors.startDate?.type === 'required' && (
                    <span className='text-danger small my-1'>
                      Es necesario introducir la fecha de inicio.
                    </span>
                  )}
                </div>
                <div className='col-12 col-md-6 form-floating mb-3'>
                  <input
                    type='date'
                    {...register('endDate', { required: true })}
                    className='form-control'
                  />
                  <label>Fecha final del proyecto</label>
                  {errors.endDate?.type === 'required' && (
                    <span className='text-danger small my-1'>
                      Es necesario introducir la fecha de fin.
                    </span>
                  )}
                </div>
                <div className='form-floating mb-3'>
                  <input
                    type='text'
                    {...register('github')}
                    className='form-control'
                  />
                  <label>Link proyecto en GitHub</label>
                </div>
                <div className='col-12'>
                  <h4 className=''>Colaboradores</h4>
                  <p>
                    Agrega los perfiles de los Starters que necesites, puedes
                    agregar varias opciones.
                  </p>
                  <div className='form-floating mb-3 d-flex'>
                    <select
                      className='form-select'
                      aria-label='Starter profiles'
                      onChange={(event) => handleProfileValue(event)}
                    >
                      <option defaultValue='Seleccionar'>Seleccionar</option>
                      <option value='Frontend'>Frontend</option>
                      <option value='Backend'>Backend</option>
                      <option value='Fullstack'>Fullstack</option>
                      <option value='UX/UI'>UX/UI</option>
                      <option value='Data Analyst'>Data Analyst</option>
                    </select>
                    <label>Escoge un perfil a agregar</label>
                    <button
                      type='button'
                      className='btn btn-color-primary py-3 px-5 ms-3'
                      onClick={() => {
                        addProfile(selectValue);
                      }}
                    >
                      Agregar
                    </button>
                  </div>
                  <div className='d-flex flex-column text-center py-3'>
                    <h5>Starters</h5>
                    <span className='small text-secondary'>
                      Pulsa sobre el perfil, para eliminarlo.
                    </span>
                  </div>
                  <div className='col-12 mb-3'>
                    {profiles.map((profile) => (
                      <span
                        type='button'
                        key={profile.profileId}
                        className='badge text-bg-dark align-self-center m-1 profil-badge '
                        onClick={() => removeProfile(profile.profileId)}
                      >
                        <i className='bi bi-person-fill-dash fs-5 me-2 '></i>
                        <span className='text-white'>
                          {profile.profileName}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* submit */}
              <div className='col-12 text-center mb-2'>
                {alertMessage && (
                  <div
                    className='alert alert-color-green d-flex align-items-center alert-dismissible fade show'
                    role='alert'
                  >
                    <i className='bi bi-check-circle-fill me-3'></i>
                    <div>¡Proyecto creado correctamente!</div>
                    <button
                      onClick={() => {
                        setAlertMessage(false);
                      }}
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='alert'
                      aria-label='Close'
                    ></button>
                  </div>
                )}
              </div>
              <div className='col-12 d-flex flex-row justify-content-center'>
                <button
                  className='btn btn-color-primary py-3 px-5 ms-3'
                  type='submit'
                >
                  Crear proyecto
                </button>
              </div>
            </form>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default CreateProject;
