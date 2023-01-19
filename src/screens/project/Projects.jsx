import React, { useCallback, useEffect, useState } from 'react';
import SectionHeader from '../../components/Header/SectionHeader';
import Header from '../../components/Header/SectionHeader';
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
    <div className='container'>
      <SectionHeader className='project-image text-center py-5 my-3 text-white bg-color-primary rounded shadow-sm'>
        <h1>Listado de Proyectos</h1>
      </SectionHeader>
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
  );
};

export default Projects;
