import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CardContainer from '../../components/Containers/CardContainer';
import PageHeader from '../../components/Headers/PageHeader';
import { v4 as uuidv4 } from 'uuid';
import { createUser } from '../../services/UserServices';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const [skills, setSkills] = useState([]);

  const [checkPassword, setCheckPassword] = useState(false);

  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);

      const dataToSend = {
        ...data,
        skills,
      };

      createUser(dataToSend)
        .then((user) => {
          navigate('/login');
          console.log('Usuario creado:', user);
        })
        .catch((error) => {
          console.log('Error al crear', error);
        });
    }
  };

  // Habilidades

  const [skillValue, setSkillValue] = useState('Seleccionar');

  const handleProfileSkill = (event) => {
    event.preventDefault();
    setSkillValue(event.target.value);
  };

  const addSkill = (skillValue) => {
    if (!skillValue) {
      console.log('No se puede');
    } else {
      setSkills([...skills, { skillName: skillValue, skillId: uuidv4() }]);
    }
  };

  const removeSkill = (id) => {
    setSkills(skills.filter((element) => element.skillId !== id));
  };

  return (
    <div className='row'>
      <PageHeader>Registro</PageHeader>
      <CardContainer>
        <div className='col-12'>
          <div className='border rounded bg-light shadow-sm mb-3 p-3'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType='multipart/form-data'
            >
              <div className='row g-2 d-flex mb-3 border-bottom'>
                <h3>Cuenta</h3>
                <p>Introducte tu información para crear tu usuario.</p>
                <div className='col-12 form-floating mb-3'>
                  <input
                    {...register('email', { required: true })}
                    type='email'
                    className='form-control'
                    id='email'
                  />
                  <label htmlFor='email'>Correo Electrónico</label>
                  {errors.email?.type === 'required' && <span className='text-danger small my-1'>Es necesario un correo electrónico válido</span>}
                </div>
                <div className='col-12 form-floating mb-3'>
                  <input
                    {...register('name', { required: true })}
                    type='name'
                    className='form-control'
                    id='name'
                  />
                  <label htmlFor='name'>Usuario</label>
                  {errors.name?.type === 'required' && <span className='text-danger small my-1'>Es necesario introducir el nombre del usuario</span>}
                </div>
                <div className='col-md-6 form-floating mb-3'>
                  <input
                    {...register('password', { required: true })}
                    type='password'
                    className='form-control'
                    id='password'
                  />
                  <label htmlFor='password'>Contraseña</label>
                  {errors.password?.type === 'required' && <span className='text-danger small my-1'>Es necesario introducir la contraseña</span>}
                  {checkPassword ? <span className='text-danger small my-1'>Las contraseñas no coinciden</span> : ''}
                </div>
                <div className='col-md-6 form-floating mb-3'>
                  <input
                    {...register('password2', { required: true })}
                    type='password'
                    className='form-control'
                    id='password2'
                  />
                  <label htmlFor='password2'>Confirmar contraseña</label>
                  {errors.password2?.type === 'required' && <span className='text-danger small my-1'>Es necesario confirmar la contraseña</span>}
                  {checkPassword ? <span className='text-danger small my-1'>Las contraseñas no coinciden</span> : ''}
                </div>
              </div>
              <div className='row g-2 mb-3 border-bottom'>
                <h3>Perfil</h3>
                <p>Introducte información sobre tu perfil.</p>
                <div className='col-12 form-floating mb-3'>
                  <textarea
                    {...register('description', { required: true })}
                    className='form-control'
                    placeholder='Leave a comment here'
                    id='description'
                  ></textarea>
                  <label htmlFor='description'>Sobre ti</label>
                  {errors.description?.type === 'required' && <span className='text-danger small my-1'>Es necesario escribir acerca de tí</span>}
                </div>

                <div className='col-md-6 form-floating mb-3'>
                  <input
                    {...register('githubLink')}
                    type='text'
                    className='form-control'
                    id='githubLink'
                  />
                  <label htmlFor='githubLink'>GitHub</label>
                </div>
                <div className='col-md-6 form-floating mb-3'>
                  <input
                    {...register('linkedinLink')}
                    type='text'
                    className='form-control'
                    id='linkedinLink'
                  />
                  <label htmlFor='linkedinLink'>LinkedIn</label>
                </div>
                <div className='col-md-5 form-floating mb-3'>
                  <select
                    {...register('profile', { required: true })}
                    className='form-select'
                    id='profile'
                  >
                    <option value='Frontend'>Frontend</option>
                    <option value='Backend'>Backend</option>
                    <option value='Fullstack'>Fullstack</option>
                    <option value='UX/UI'>UX/UI</option>
                    <option value='Data Analyst'>Data Analyst</option>
                  </select>
                  <label htmlFor='profile'>Elige tu perfil</label>
                  {errors.profile?.type === 'required' && <span className='text-danger small my-1'>Es necesario elegir un perfil</span>}
                </div>
                <div className='col-md-7 d-flex form-floating mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='skills'
                    onChange={(event) => handleProfileSkill(event)}
                  />
                  <label htmlFor='skills'>Añadir Habilidades</label>
                  <span
                    type='button'
                    className='btn btn-color-primary py-3 px-5 ms-3'
                    onClick={() => {
                      addSkill(skillValue);
                    }}
                  >
                    Agregar
                  </span>
                </div>
                <div className='col-12 d-flex flex-column text-center'>
                  <h5>Habilidades</h5>
                  <span className='small text-secondary'>Pulsa sobre la habilidad, para eliminarla.</span>
                </div>
                <div className='col-12 justify-content-center'>
                  {skills?.map((skill) => (
                    <span
                      key={skill.skillId}
                      className='badge text-bg-dark align-self-center m-1 profil-badge '
                      onClick={() => removeSkill(skill.skillId)}
                    >
                      <i className='bi bi-person-fill-dash fs-5 me-2 '></i>
                      <span className='text-white'>{skill.skillName}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className='col-12 d-flex flex-row justify-content-center'>
                <button
                  className='btn btn-color-primary py-3 px-5'
                  type='submit'
                >
                  Crear perfil
                </button>
              </div>
            </form>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default Registro;
