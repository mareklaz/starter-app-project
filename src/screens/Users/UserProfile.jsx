import MainContainer from '../../components/MainContainer/MainContainer';
import UserImage from '../../assets/jr-korpa-9XngoIpxcEo-unsplash.jpg';
import TitleHeader from '../../components/TitleHeader/TitleHeader';
import ContentContainer from '../../components/MainContainer/ContentContainer';
import { useAuthContext } from '../../context/AuthContext';
import UserProfileEditModal from '../../components/Modal/UserProfileEditModal';
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUserDetail } from '../../services/UserServices';

const UserProfile = () => {
  const { user } = useAuthContext();
  const { id } = useParams();

  const [profile, setProfile] = useState({});

  const fetchProfile = useCallback(() => {
    getUserDetail(id)
      .then((collaboratorsFound) => {
        setProfile(collaboratorsFound);
      })
      .catch((error) => {
        console.log(error.response.data.msg);
      });
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // console.log('Profile', profile.id);
  // console.log('Current User', user.id);

  return (
    <MainContainer>
      <TitleHeader>
        <i className='bi bi bi-person-lines-fill me-2'></i>
        Perfil del Usuario
      </TitleHeader>
      <ContentContainer>
        <div className='row g-3'>
          <div className='col-12 col-lg-4'>
            <div className='p-5 bg-light rounded fw-bold border border-1 shadow-sm d-flex flex-column align-items-center'>
              <img src={UserImage} width={200} height={200} className='rounded-circle' />
              <h3 className='fs-4 my-3 fw-bold'>{profile?.name}</h3>
              <div className='d-flex mx-2'>
                {profile.githubLink ? (
                  <a href={profile.githubLink} target='_blank' rel='noreferrer'>
                    <i className='bi bi-github mx-2 text-dark fs-4'></i>
                  </a>
                ) : (
                  ''
                )}

                {profile.linkedinLink ? (
                  <a href={profile.linkedinLink} target='_blank' rel='noreferrer'>
                    <i className='bi bi-linkedin mx-2 text-dark fs-4'></i>
                  </a>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-8'>
            <div className='p-3 bg-light rounded fw-bold border border-1 shadow-sm '>
              <div className='border-bottom my-3'>
                <div className='d-flex flex-column flex-lg-row align-items-center justify-content-between'>
                  <h4 className='fw-bold text-color-secondary m-0 p-0'>Acerca de mí</h4>
                  {profile?.id === user?.id ? (
                    <Link to={`/perfil/edit/${id}`} className='btn btn-dark btn-sm d-flex align-items-center'>
                      Editar
                      <i className='bi bi-person-fill-gear fs-5 ms-2'></i>
                    </Link>
                  ) : (
                    ''
                  )}
                </div>
                <p>{profile?.description}</p>
              </div>
              <div className='border-bottom my-3'>
                <h4 className='fw-bold text-color-secondary '>Perfil</h4>
                <p>{profile?.profile}</p>
              </div>
              <div className='border-bottom my-3'>
                <h4 className='fw-bold text-color-secondary '>Habilidades</h4>
                {profile.skills ? (
                  profile.skills.map((skill) => (
                    <span key={skill.skillId} className='badge text-bg-dark align-self-center m-1 profil-badge '>
                      <i className='bi bi-person-fill-check fs-5 me-2 '></i>
                      <span className='text-white'>{skill.skillName}</span>
                    </span>
                  ))
                ) : (
                  <span>No hay habilidades aún</span>
                )}
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <div className='p-3 mb-3 bg-color-dark text-color-light rounded fw-bold border border-1 shadow-sm '>
              <div>
                <span className='fs-4'>
                  <i className='bi bi-rocket-takeoff-fill me-2'></i>
                  Proyectos Creados
                </span>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <div className='p-3 mb-3 bg-color-dark text-color-light rounded fw-bold border border-1 shadow-sm '>
              <div>
                <span className='fs-4'>
                  <i className='bi bi-lightning-charge-fill me-2'></i>
                  Colaboración en Proyectos
                </span>
              </div>
            </div>
          </div>
        </div>
        <UserProfileEditModal modalId={id} profile={profile} fetchProfile={() => fetchProfile()} />
      </ContentContainer>
    </MainContainer>
  );
};

export default UserProfile;
