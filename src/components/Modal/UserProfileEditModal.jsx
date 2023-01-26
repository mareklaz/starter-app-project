import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const UserProfileEditModal = ({ modalId, profile }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: profile.name,
      profile: profile.profile,
      description: profile.description,
      skills: profile.skills,
      githubLink: profile.githubLink,
      linkedinLink: profile.linkedinLink,
    },
  });

  const onSubmit = (data) => {
    console.log('Data', data);
  };

  console.log('Profile desde Modal', profile.name);

  // Habilidades
  const [skills, setSkills] = useState(profile.skills);
  const [skillValue, setSkillValue] = useState('Seleccionar');

  const handleProfileSkill = (event) => {
    event.preventDefault();
    setSkillValue(event.target.value);
  };

  const addSkill = (skillValue) => {
    if (skillValue === 'Seleccionar') {
      console.log('No se puede');
    } else {
      setSkills([...skills, { skillName: skillValue, id: uuidv4() }]);
    }
  };

  const removeSkill = (id) => {
    setSkills(skills.filter((element) => element.id !== id));
  };

  const cleanSkills = () => {
    setSkills([]);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
        <div className='modal  fade' id={`m-${modalId}`} tabIndex='-1' aria-labelledby={modalId} aria-hidden='true'>
          <div className='modal-dialog modal-xl modal-fullscreen-lg-down'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h1 className='modal-title fs-5 align-content-center' id={modalId}>
                  <i className='bi bi-person-fill-gear fs-3 me-2'></i>
                  Editar perfil del usuario
                </h1>
                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
              </div>
              <div className='modal-body'>
                <div className='row'>
                  <div className='col-6'>
                    <div className='form-floating mb-3'>
                      <input
                        type='text'
                        defaultValue={profile.name}
                        {...register('name', { required: true })}
                        className='form-control'
                        id='name'
                      />
                      <label htmlFor='name'>Nombre del usuario</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <textarea
                        defaultValue={profile.description}
                        {...register('description', { required: true })}
                        className='form-control'
                        id='description'
                      />
                      <label htmlFor='description'>Sobre ti o tu descripción</label>
                    </div>
                    <div className='form-floating mb-3 d-flex'>
                      <input
                        type='text'
                        className='form-control'
                        id='skills'
                        onChange={(event) => handleProfileSkill(event)}
                      />
                      <label htmlFor='skills'>Añadir Habilidades</label>
                      <span
                        className='btn btn-color-primary py-3 px-5 ms-3'
                        onClick={() => {
                          addSkill(skillValue);
                        }}
                      >
                        Agregar
                      </span>
                    </div>
                    <div className='d-flex flex-column text-center'>
                      <h5>Habilidades</h5>
                      <span className='small text-secondary'>Pulsa sobre la habilidad, para eliminarla.</span>
                    </div>

                    {skills?.map((skill) => (
                      <span
                        key={skill.id}
                        className='badge text-bg-dark align-self-center m-1 profil-badge '
                        onClick={() => removeSkill(skill.id)}
                      >
                        <i className='bi bi-person-fill-dash fs-5 me-2 '></i>
                        <span className='text-white'>{skill.skillName}</span>
                      </span>
                    ))}
                  </div>
                  <div className='col-6'>
                    <div className='form-floating mb-3 d-flex'>
                      <select
                        defaultValue={profile.profile}
                        {...register('profile', { required: true })}
                        className='form-select'
                        id='profile'
                        aria-label='User profile'
                      >
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
                      <textarea
                        defaultValue={profile.linkedinLink}
                        {...register('linkedinLink', { required: true })}
                        className='form-control'
                        id='linkedinLink'
                      />
                      <label htmlFor='linkedinLink'>Introducte tu perfil de LinkedIn</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <textarea
                        defaultValue={profile.githubLink}
                        {...register('githubLink', { required: true })}
                        className='form-control'
                        id='githubLink'
                      />
                      <label htmlFor='githubLink'>Introducte tu perfil de GitHub</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                  onClick={() => cleanSkills()}
                >
                  Cerrar
                </button>
                <button type='submit' className='btn btn-primary'>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserProfileEditModal;
