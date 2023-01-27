import { useCallback, useEffect, useState } from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import { getAllProjects } from '../../services/ProjectServices';
import ContentContainer from '../../components/MainContainer/ContentContainer';
import TitleHeader from '../../components/TitleHeader/TitleHeader';
import Loading from '../../components/Loading/Loading';

const UsersList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjects = useCallback(() => {
    getAllProjects()
      .then((projectsFound) => {
        console.log('Proyectos encontrados:', projectsFound);
        setProjects(projectsFound);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
      .catch((error) => {
        console.log(error.response.data.msg);
      });
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const proyectosWeb = projects.filter((project) => project.projectType === 'Desarrollo Web');
  console.log('Proyectos WEB', proyectosWeb);
  return (
    <MainContainer>
      <TitleHeader>
        <i className='bi bi-rocket-takeoff-fill me-2'></i>
        Colaboradores
      </TitleHeader>
      <ContentContainer>
        <div className='row'>
          <div className='col-3'></div>
          <div className='col-3'></div>
          <div className='col-3'></div>
          <div className='col-3'></div>
        </div>
      </ContentContainer>
    </MainContainer>
  );
};

export default UsersList;
