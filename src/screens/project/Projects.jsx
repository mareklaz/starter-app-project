import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { getAllProjects } from '../../services/ProjectServices';

const Projects = () => {
  const [projects, setProjects] = useState();

  const fetchProjects = useCallback(() => {
    getAllProjects()
      .then((users) => {
        setProjects(users);
      })
      .catch((error) => {
        console.log('error feching users', error);
      });
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <>
      <Header title={'Proyectos'} subtitle={'Listado de proyectos'} className='project-image px-3 text-center py-5 mb-3 text-white bg-color-primary rounded shadow-sm' />
      <div className='container'>
        <div className='row'>
          {projects ? (
            projects.map((project) => (
              <div className='col-4' key={project.id}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span>{project.status}</span>
                <span>{project.github}</span>
                <p>{project.startDate}</p>
                <p>{project.endDate}</p>
                <p>{project.creatorId}</p>
              </div>
            ))
          ) : (
            <p className='text-center'>No existe ningún proyectos aún...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
