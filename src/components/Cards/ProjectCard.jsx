import moment from 'moment';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { getProjectCollaborators } from '../../services/CollaboratorServices';
import { getCurrentUserLikesInProject, getProjectLikes, like } from '../../services/LikeServices';

const ProjectCard = ({ name, id, type, projectCreator, description, startDate, endDate, status }) => {
  const [collaborators, setCollaborators] = useState();

  const fetchCollaborators = useCallback(() => {
    getProjectCollaborators(id)
      .then((projectsFound) => {
        setCollaborators(projectsFound);
        // setLoading(true);
        // setTimeout(() => {
        //   setLoading(false);
        // }, 800);
      })
      .catch((error) => {
        console.log(error.response.data.msg);
      });
  }, []);

  const [currentUserLike, setCurrentUserLike] = useState(false);
  const [projectLikes, setProjectLikes] = useState(false);

  const fetchCurrentUserLikesInProject = useCallback(() => {
    getCurrentUserLikesInProject(id)
      .then((likes) => {
        setCurrentUserLike(true);
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        setCurrentUserLike(false);
      });
  }, []);

  const fetchProjectLikes = useCallback(() => {
    getProjectLikes(id)
      .then((projectLikes) => {
        setProjectLikes(projectLikes.length);
      })
      .catch((error) => {
        console.log(error.response.data.msg);
      });
  }, []);

  const doLike = () => {
    like({ projectId: id })
      .then((res) => {
        if (res) {
          fetchCurrentUserLikesInProject();
          fetchProjectLikes();
        } else {
          fetchCurrentUserLikesInProject();
          fetchProjectLikes();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCollaborators();
    fetchCurrentUserLikesInProject();
    fetchProjectLikes();
  }, [fetchCollaborators, fetchCurrentUserLikesInProject, fetchProjectLikes()]);

  return (
    <div className='col-12'>
      <div className='border rounded bg-light shadow-sm mb-3 px-4 py-2'>
        <div className='d-flex py-3  justify-content-between mb-3 align-items-center border-bottom pb-2'>
          <div className='d-flex justify-content-between align-items-center'>
            <Link
              to={`/proyectos/${id}`}
              className='text-decoration-none text-color-dark'
            >
              <h2 className='fs-5 mb-0 fw-bold'>{name}</h2>
            </Link>
            <span className='badge small bg-dark ms-2'>{type}</span>
          </div>
          <h2 className='fs-5 mb-0 fw-bold'>{projectCreator}</h2>
        </div>

        <div className='d-flex py-3 justify-content-between border-bottom'>
          <p className='line-clamp'>{description}</p>
        </div>
        <div className='d-flex py-3 justify-content-between aling-items-center mb-2 border-bottom'>
          <span className='small fw-bold'>Inicio: {moment(startDate).format('DD-MM-YYYY')}</span>
          <span className='small fw-bold'>Estado: {status}</span>
          <span className='small fw-bold'>Finaliza: {moment(startDate).format('DD-MM-YYYY')}</span>
        </div>
        <div className='col-12 d-flex flex-column align-items-center border-bottom py-4'>
          <h2 className='fs-5 mb-2 fw-bold'>Colaboradores</h2>
          <div className='d-flex flex-row '>
            {collaborators
              ? collaborators.map((collaborator) => (
                  <div key={collaborator.id}>
                    {collaborator.collaboratorId?.name ? (
                      <span className='d-flex badge text-bg-color-blue border border-dark shadow-sm align-items-center m-1'>
                        <div className='d-flex align-items-center'>
                          <i className='bi bi-person-fill-check fs-5 me-2'></i>
                          {collaborator.collaboratorId.name}
                        </div>
                      </span>
                    ) : (
                      <span className='d-flex badge text-bg-color-yellow border border-dark shadow-sm align-items-center m-1 poi'>
                        <div className='d-flex align-items-center'>
                          <i className='bi bi-person-fill-up fs-5 me-2'></i>
                          {collaborator.profileName}
                        </div>
                      </span>
                    )}
                  </div>
                ))
              : ''}
          </div>
        </div>
        <div className='d-flex py-2 mt-2 alingn-align-self-center'>
          {currentUserLike ? (
            <i
              type='button'
              className='bi bi-heart-fill me-1 text-color-red fs-6'
              onClick={doLike}
            ></i>
          ) : (
            <i
              type='button'
              className='bi bi-heart-fill me-1 text-color-dark fs-6'
              onClick={doLike}
            ></i>
          )}
          <span className='fw-bold fs-6'>{projectLikes}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
