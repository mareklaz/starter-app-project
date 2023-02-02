import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardContainer from '../../components/Containers/CardContainer';
import PageHeader from '../../components/Headers/PageHeader';
import Loading from '../../components/Loading/Loading';
import { getProjectCollaborators } from '../../services/CollaboratorServices';
import { getCurrentUserLikesInProject, getProjectLikes, like } from '../../services/LikeServices';
import { getProjectDetail } from '../../services/ProjectServices';

const ProjectDetail = () => {
  const { id } = useParams();

  const [project, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjects = useCallback(() => {
    getProjectDetail(id)
      .then((projectsFound) => {
        console.log('Proyectos encontrados:', projectsFound);
        setProjects(projectsFound);
      })
      .catch((error) => {
        console.log(error.response.data.msg);
      });
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const [collaborators, setCollaborators] = useState();

  const fetchCollaborators = useCallback(() => {
    getProjectCollaborators(id)
      .then((projectsFound) => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 500);
        setCollaborators(projectsFound);
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
    <div className='row'>
      <PageHeader>Proyecto</PageHeader>
      <CardContainer>
        {loading ? (
          <Loading>Cargando proyecto...</Loading>
        ) : (
          <div className='col-12'>
            <div className='border rounded bg-light shadow-sm mb-3 px-4 py-2'>
              <div className='d-flex py-3  justify-content-between mb-3 align-items-center border-bottom pb-2'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h2 className='fs-5 mb-0 fw-bold'>{project?.name}</h2>
                  <span className='badge small bg-dark ms-2'>{project?.type}</span>
                </div>
                <h2 className='fs-5 mb-0 fw-bold'>{project?.creatorId?.name}</h2>
              </div>

              <div className='d-flex py-3 justify-content-between border-bottom'>
                <p className='line-clamp'>{project?.description}</p>
              </div>
              <div className='d-flex py-3 justify-content-between aling-items-center mb-2 border-bottom'>
                <span className='small fw-bold'>Inicio: {moment(project?.startDate).format('DD-MM-YYYY')}</span>
                <span className='small fw-bold'>Estado: {project?.status}</span>
                <span className='small fw-bold'>Finaliza: {moment(project?.startDate).format('DD-MM-YYYY')}</span>
              </div>
              <div className='col-12 d-flex flex-column align-items-center border-bottom py-4'>
                <h2 className='fs-5 mb-2 fw-bold'>Colaboradores</h2>
                <div className='d-flex flex-row '>
                  {collaborators
                    ? collaborators.map((collaborator) => (
                        <span
                          key={collaborator.id}
                          className='d-flex badge text-bg-color-yellow border border-dark shadow-sm align-items-center m-1'
                        >
                          <span className=''>
                            {collaborator.collaboratorId?.name ? (
                              <div className='d-flex align-items-center'>
                                <i className='bi bi-person-fill-check fs-5 me-2'></i>
                                {collaborator.collaboratorId.name}
                              </div>
                            ) : (
                              <div className='d-flex align-items-center'>
                                <i className='bi bi-person-fill-up fs-5 me-2'></i>
                                {collaborator.collaboratorProfile}
                              </div>
                            )}
                          </span>
                        </span>
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
        )}
      </CardContainer>
    </div>
  );
};

export default ProjectDetail;
