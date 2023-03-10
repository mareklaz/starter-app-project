import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeContainer from '../components/MainContainer/HomeContainer';
import NavBar from '../components/NavBar/NavBar';
import { getAllProjects } from '../services/ProjectServices';

const Home = () => {
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

  const proyectosWeb = projects?.filter((project) => project.projectType === 'Desarrollo Web');
  const proyectosData = projects?.filter((project) => project.projectType === 'Data Analyst');
  const proyectosUXUI = projects?.filter((project) => project.projectType === 'UX/UI');

  return (
    <HomeContainer>
      <div className='container p-0 m-0 my-5 vh-100 d-lg-flex align-items-center'>
        <div className='row row-cols-2 g-3'>
          <div className='col-12'>
            <NavBar />
          </div>
          <div className='col-12 col-lg-7'>
            <Link to='/proyectos' className='p-3 card-custom bg-color-dark rounded fw-bold border border-1 shadow-sm position-relative d-flex align-items-end text-decoration-none'>
              <span className='position-absolute bottom-0 end-0 m-2 badge bg-light text-dark fs-6 p-2 '>{projects ? projects.length : 0}</span>
              <span className='card-title'>
                <i className='bi bi-rocket-takeoff-fill me-2'></i>
                Proyectos
              </span>
            </Link>
          </div>
          <div className='col-12 col-lg-5'>
            <Link to='/proyectos/crear' className='p-3 card-custom bg-accent-1 rounded fw-bold border border-1 shadow-sm d-flex align-items-end text-decoration-none'>
              <span className='card-title text-dark'>
                <i className='bi bi-plus-square-fill me-2'></i>
                Crea tu proyecto
              </span>
            </Link>
          </div>
          <div className='col-12 col-lg-5'>
            <div className='p-3 card-custom bg-color-dark rounded fw-bold border border-1 shadow-sm d-flex align-items-end'>
              <span className='card-title'>
                <i className='bi bi-star-fill me-2'></i>Proyectos Top
              </span>
            </div>
          </div>
          <div className='col-12 col-lg-7'>
            <Link to='/colaboradores' className='p-3 card-custom bg-accent-4 rounded fw-bold border border-1 shadow-sm d-flex align-items-end text-decoration-none'>
              <span className='position-absolute bottom-0 end-0 m-2 badge bg-light text-dark p-1'>1</span>
              <span className='card-title'>
                <i className='bi bi-people-fill me-2'></i>
                Colaboradores
              </span>
            </Link>
          </div>
          <div className='col-12 col-lg-4'>
            <Link to='/proyectos/uxui' className='p-3 card-custom bg-color-dark rounded fw-bold border border-1 shadow-sm position-relative d-flex align-items-end text-decoration-none'>
              <span className='position-absolute bottom-0 end-0 m-2 badge bg-light text-dark fs-6 p-2 '>{proyectosUXUI ? proyectosUXUI.length : 0}</span>
              <span className='card-title'>
                <i className='bi bi-palette-fill me-2'></i>
                Proyectos UX/UI
              </span>
            </Link>
          </div>
          <div className='col-12 col-lg-4'>
            <Link to='/proyectos/web' className='p-3 card-custom bg-color-dark rounded fw-bold border border-1 shadow-sm position-relative d-flex align-items-end text-decoration-none'>
              <span className='position-absolute bottom-0 end-0 m-2 badge bg-light text-dark fs-6 p-2 '>{proyectosWeb ? proyectosWeb.length : 0}</span>

              <span className='card-title'>
                <i className='bi bi-code-square me-2'></i>
                Proyectos Web
              </span>
            </Link>
          </div>
          <div className='col-12 col-lg-4'>
            <Link to='/proyectos/data' className='p-3 card-custom bg-color-dark rounded fw-bold border border-1 shadow-sm position-relative d-flex align-items-end text-decoration-none'>
              <span className='position-absolute bottom-0 end-0 m-2 badge bg-light text-dark fs-6 p-2 '>{proyectosData ? proyectosData.length : 0}</span>
              <span className='card-title'>
                <i className='bi bi-database-fill-gear me-2'></i>
                Proyectos Data
              </span>
            </Link>
          </div>
          <div className='col-12 col-lg-6'>
            <div className='p-3 card-custom bg-color-dark rounded fw-bold border border-1 shadow-sm d-flex align-items-end'>
              <span className='card-title'>
                <i className='bi bi-question-square-fill me-2'></i>
                Sobre Starter
              </span>
            </div>
          </div>
          <div className='col-12 col-lg-3'>
            <div className='p-3 card-custom bg-danger rounded fw-bold border border-1 shadow-sm d-flex align-items-end'>
              <span className='card-title'>Social</span>
              <div className='d-flex mx-2'>
                <i className='bi bi-github mx-2  fs-4 social-icon'></i>
                <i className='bi bi-linkedin mx-2  fs-4 social-icon'></i>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-3'>
            <div className='p-3 card-custom bg-color-dark rounded fw-bold border border-1 shadow-sm d-flex align-items-end'>
              <span className='card-title'>
                <i className='bi bi-envelope-at-fill me-2'></i>
                Contacto
              </span>
            </div>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;
