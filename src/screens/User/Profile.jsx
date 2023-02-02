import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CardContainer from '../../components/Containers/CardContainer';
import PageHeader from '../../components/Headers/PageHeader';
import AuthContext from '../../context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='row'>
      <PageHeader>Perfil</PageHeader>
      <CardContainer>
        <div className='col-12'>
          <div className='border rounded bg-light shadow-sm mb-3 p-3'>
            <div className='row g-2 d-flex'>
              <div className='col-12 d-flex justify-content-between align-items-start mb-3 border-bottom'>
                <div className=''>
                  <h3>Perfil {user?.name}</h3>
                  <h6 className='text-color-secondary'>{user?.profile}</h6>
                </div>
                <div className='d-flex'>
                  {user?.linkedinLink && (
                    <Link
                      to={user?.linkedinLink}
                      className='text-decoration-none text-color-dark mx-2'
                    >
                      <i className='bi bi-linkedin fs-3'></i>
                    </Link>
                  )}
                  {user?.githubLink && (
                    <Link
                      to={user?.githubLink}
                      className='text-decoration-none text-color-dark mx-2'
                    >
                      <i className='bi bi-github fs-3'></i>
                    </Link>
                  )}
                </div>
              </div>
              <div className='col-12 mb-3 border-bottom pb-2'>
                <h5>Acerca de mi:</h5>
                {user?.description}
              </div>
              {user?.skills && (
                <div className='col-12 mb-3 border-bottom pb-2'>
                  <h5>Habilitades:</h5>
                  <div className='col-12 justify-content-center'>
                    {user?.skills?.map((skill) => (
                      <div
                        key={skill.id}
                        // className='badge text-bg-dark align-items-center m-1 profil-badge'
                        className='badge bg-color-light text-dark border border-dark shadow-sm align-items-center m-1'
                      >
                        <div className='d-flex align-items-center'>
                          <i className='bi bi-person-fill-gear fs-5 me-2 '></i>
                          <span className=''>{skill.skillName}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default Profile;
