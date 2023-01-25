import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const UserProfileEditModal = ({ children, modalId }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Habilidades
  const [skills, setSkills] = useState([]);
  const [skillValue, setSkillValue] = useState('Seleccionar');

  const handleProfileSkill = (event) => {
    event.preventDefault();
    setSkillValue(event.target.value);
  };

  const addSkill = (skillValue) => {
    if (skillValue != 'Seleccionar') {
      setSkills([...skills, { skillName: skillValue, id: uuidv4() }]);
    }
  };

  const removeSkill = (id) => {
    setSkills(skills.filter((element) => element.id != id));
  };

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
                <div className='row'>
                  <div className='col-6'>
                    <div className='form-floating mb-3'>
                      <input type='text' {...register('name', { required: true })} className='form-control' id='name' />
                      <label htmlFor='name'>Nombre del usuario</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <textarea {...register('description', { required: true })} className='form-control' id='description' />
                      <label htmlFor='description'>Sobre ti o tu descripción</label>
                    </div>
                    <div className='form-floating mb-3 d-flex'>
                      <input type='text' className='form-control' id='skills' onChange={(event) => handleProfileSkill(event)} />
                      <label htmlFor='skills'>Habilidades</label>
                      <span
                        className='btn btn-color-primary py-3 px-5 ms-3'
                        onClick={() => {
                          addSkill(skillValue);
                        }}>
                        Agregar
                      </span>
                    </div>
                    <div className='d-flex flex-column text-center'>
                      <h5>Starters</h5>
                      <span className='small text-secondary'>Pulsa sobre el perfil, para eliminarlo.</span>
                    </div>

                    {skills.map((skill) => (
                      <span key={skill.id} className='badge text-bg-dark align-self-center m-1 profil-badge ' onClick={() => removeSkill(skill.id)}>
                        <i className='bi bi-person-fill-dash fs-5 me-2 '></i>
                        <span className='text-white'>{skill.skillName}</span>
                      </span>
                    ))}
                  </div>
                  <div className='col-6'>
                    <div className='form-floating mb-3'>
                      <input type='text' {...register('name', { required: true })} className='form-control' id='floatingInput' />
                      <label htmlFor='floatingInput'>Habilidades</label>
                    </div>
                    <div className='form-floating mb-3 d-flex'>
                      <select {...register('profile', { required: true })} className='form-select' id='profile' aria-label='User profile'>
                        <option defaultValue='Seleccionar'>Seleccionar</option>
                        <option value='Frontend'>Frontend</option>
                        <option value='Backend'>Backend</option>
                        <option value='Fullstack'>Fullstack</option>
                        <option value='UX/UI'>UX/UI</option>
                        <option value='Data Analyst'>Data Analyst</option>
                      </select>
                      <label htmlFor='profile'>Elige tu perfil</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <textarea {...register('linkedin', { required: true })} className='form-control' id='linkedin' />
                      <label htmlFor='linkedin'>Introducte tu perfil de LinkedIn</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <textarea {...register('github', { required: true })} className='form-control' id='github' />
                      <label htmlFor='github'>Introducte tu perfil de GitHub</label>
                    </div>
                  </div>
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
