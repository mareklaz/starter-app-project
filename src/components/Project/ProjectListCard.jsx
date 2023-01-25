import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getProjectCollaborators } from '../../services/CollaboratorServices';

const ProjectListCard = ({ colValue, project }) => {
  const [projectCollaborators, setProjectCollaborators] = useState();
  console.log(project.id);

  const fetchProjectCollaborators = useCallback(() => {
    getProjectCollaborators(project.id)
      .then((collaboratorsFound) => {
        console.log('COLABORADORES ENCONTRADOS:', collaboratorsFound);
        setProjectCollaborators(collaboratorsFound);
      })
      .catch((error) => {
        console.log(error.response.data.msg);
      });
  }, []);

  useEffect(() => {
    fetchProjectCollaborators();
  }, [fetchProjectCollaborators]);

  return (
    <div className={colValue}>
      <div className='p-3 bg-light rounded fw-bold border border-1 shadow-sm '>
        <div className='d-flex flex-row justify-content-between border-bottom mb-3'>
          <Link to={`/proyectos/${project.id}`} className='text-decoration-none text-dark'>
            <h2 className='fs-4 fw-bold'>{project.name}</h2>
          </Link>
          <Link className='text-decoration-none text-dark'>
            <span className='fw-bold'>{project.creatorId.name}</span>
          </Link>
        </div>
        <div className='border-bottom mb-3'>
          <p className='line-clamp'>{project.description}</p>
        </div>
        <div className='d-flex flex-row justify-content-between small border-bottom mb-3 text-dark'>
          <p className=''>{project.status}</p>
          <p>
            Inicio <span className='text-secondary'>{moment(project.startDate).format('DD-MM-YYYY')}</span>
          </p>
          <p>
            Fin <span className='text-secondary'>{moment(project.endDate).format('DD-MM-YYYY')}</span>
          </p>
        </div>
        <div className='d-flex justify-content-center mb-2 fw-bolder'>Perfiles</div>
        <div className='d-flex flex-row justify-content-center'>
          {projectCollaborators
            ? projectCollaborators.map((collaborator) => (
                <span className='badge text-bg-dark align-self-center m-1' key={collaborator.id}>
                  <i className='bi bi-person-fill-up fs-5 me-2'></i>
                  <span className=''>{collaborator.collaboratorProfile}</span>
                </span>
              ))
            : 'Este proyecto aún no tiene colaboradores'}
        </div>
      </div>
    </div>
  );
};

export default ProjectListCard;
