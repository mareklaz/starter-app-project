import MainContainer from '../../components/MainContainer/MainContainer';
import UserImage from '../../assets/jr-korpa-9XngoIpxcEo-unsplash.jpg';
import TitleHeader from '../../components/TitleHeader/TitleHeader';
import ContentContainer from '../../components/MainContainer/ContentContainer';
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUserDetail, updateUser } from '../../services/UserServices';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const UserProfileEdit = () => {
  const { id } = useParams();

  const { register, handleSubmit } = useForm({});
  const [skills, setSkills] = useState([]);
  const [profile, setProfile] = useState({});

  const fetchProfile = useCallback(() => {
    getUserDetail(id)
      .then((userFound) => {
        setProfile(userFound);
        setSkills(userFound.skills);
      })
      .catch((error) => {
        console.log(error.response.data.msg);
      });
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const onSubmit = (data) => {
    const dataToSend = {
      ...data,
      skills,
      email: profile.email,
    };
    updateUser(dataToSend)
      .then((user) => {
        console.log('Usuario actualizado:', user);
      })
      .catch((error) => {
        console.log('Error al actualizar', error);
      });
  };

  // Habilidades

  const [skillValue, setSkillValue] = useState('Seleccionar');

  const handleProfileSkill = (event) => {
    event.preventDefault();
    setSkillValue(event.target.value);
  };

  const addSkill = (skillValue) => {
    if (skillValue === '') {
      console.log('No se puede');
    } else {
      setSkills([...skills, { skillName: skillValue, skillId: uuidv4() }]);
    }
  };

  const removeSkill = (id) => {
    setSkills(skills.filter((element) => element.skillId !== id));
  };

  return (
    <MainContainer>
      <TitleHeader>
        <i className='bi bi-person-fill-gear me-2'></i>
        Editar mi perfil
      </TitleHeader>
      <ContentContainer>
        <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
          <div className='row g-3'>
            <div className='col-12 col-lg-4'>
              <div className='p-5 bg-light rounded fw-bold border border-1 shadow-sm d-flex flex-column align-items-center'>
                <img src={UserImage} width={200} height={200} className='rounded-circle' />
                <Link to={`/perfil/${profile.id}`} className='text-decoration-none text-dark my-3'>
                  <h3 className='fs-4 fw-bold'>{profile?.name}</h3>
                </Link>
                <div className='d-flex flex-column mx-2'>
                  <div className='d-flex flex-column align-items-center'>
                    <i className='bi bi-github mx-2 mb-2 text-dark fs-4'></i>
                    <div className='form-floating mb-3'>
                      <input defaultValue={profile?.githubLink} {...register('githubLink')} className='form-control' id='githubLink' />
                      <label htmlFor='githubLink'>Tu perfil GitHub</label>
                    </div>
                  </div>
                  <div className='d-flex flex-column align-items-center'>
                    <i className='bi bi-linkedin mx-2 mb-2 text-dark fs-4'></i>
                    <div className='form-floating mb-3'>
                      <input defaultValue={profile?.linkedinLink} {...register('linkedinLink')} className='form-control' id='linkedinLink' />
                      <label htmlFor='linkedinLink'>Tu perfil LinkedIn</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-8'>
              <div className='p-3 bg-light rounded fw-bold border border-1 shadow-sm '>
                <div className='border-bottom my-3'>
                  <div className='d-flex flex-column'>
                    <h4 className='fw-bold text-color-secondary mb-3'>Acerca de mí</h4>
                    <div className='form-floating mb-3'>
                      <textarea defaultValue={profile?.description} {...register('description')} className='form-control' id='description' />
                      <label htmlFor='description'>Sobre ti o tu descripción</label>
                    </div>
                  </div>
                </div>
                <div className='border-bottom my-3'>
                  <h4 className='fw-bold text-color-secondary '>Perfil</h4>
                  <div className='form-floating mb-3 d-flex'>
                    <select {...register('profile')} className='form-select' id='profile' aria-label='User profile'>
                      <option defaultValue='Seleccionar'>Seleccionar</option>
                      <option value='Frontend'>Frontend</option>
                      <option value='Backend'>Backend</option>
                      <option value='Fullstack'>Fullstack</option>
                      <option value='UX/UI'>UX/UI</option>
                      <option value='Data Analyst'>Data Analyst</option>
                    </select>
                    <label htmlFor='profile'>Elige tu perfil</label>
                  </div>
                </div>
                <div className='border-bottom my-3'>
                  <h4 className='fw-bold text-color-secondary '>Habilidades</h4>
                  <div className='form-floating mb-3 d-flex'>
                    <input type='text' className='form-control' id='skills' onChange={(event) => handleProfileSkill(event)} />
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
                    <span key={skill.skillId} className='badge text-bg-dark align-self-center m-1 profil-badge ' onClick={() => removeSkill(skill.skillId)}>
                      <i className='bi bi-person-fill-dash fs-5 me-2 '></i>
                      <span className='text-white'>{skill.skillName}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className='col-12 my-3'>
                <div className='p-3 bg-light rounded fw-bold border border-1 shadow-sm '>
                  <button type='submit' className='btn btn-color-primary py-3 px-5'>
                    Guardar cambios
                  </button>
                  {/* {alertMessage ? <p>Proyecto creado</p> : ''} */}
                </div>
              </div>
            </div>
          </div>
        </form>
      </ContentContainer>
    </MainContainer>
  );
};

export default UserProfileEdit;
