import React, { useCallback, useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import MainContainer from '../../components/MainContainer/MainContainer';
import ProjectListCard from '../../components/Project/ProjectListCard';
import { getAllProjects } from '../../services/ProjectServices';

const ProjectsList = () => {
  const [projects, setProjects] = useState();

  const fetchProjects = useCallback(() => {
    getAllProjects()
      .then((projectsFound) => {
        console.log('PROYECTOS ENCONTRADOS:', projectsFound);
        setProjects(projectsFound);
      })
      .catch((error) => {
        console.log(error.response.data.msg);
      });
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <MainContainer>
      <div className='container p-0 m-0 my-5 align-items-center'>
        <div className='row'>
          <div className='col-12'>
            <NavBar />
          </div>
        </div>
        <div className='p-3 my-3 navbar-custom bg-dark text-light rounded fw-bold border border-1 shadow-sm d-flex justify-content-center align-items-center '>
          <span className='fs-4 '>
            <i className='bi bi-rocket-takeoff-fill me-2'></i>
            Proyectos
          </span>
        </div>
        <div className='container m-0 p-0'>
          <div className='row g-3'>{projects ? projects.map((project) => <ProjectListCard colValue={'col-12 col-lg-6'} key={project.id} project={project} />) : 'No hay proyectos disponibles'}</div>
        </div>
      </div>
    </MainContainer>
  );
};

export default ProjectsList;
