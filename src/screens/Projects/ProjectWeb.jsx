import { useCallback, useEffect, useState } from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import ProjectListCard from '../../components/Project/ProjectListCard';
import { getProjectType } from '../../services/ProjectServices';
import ContentContainer from '../../components/MainContainer/ContentContainer';
import TitleHeader from '../../components/TitleHeader/TitleHeader';
import Loading from '../../components/Loading/Loading';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjectsType = useCallback(() => {
    getProjectType('Desarrollo Web')
      .then((projectsFound) => {
        console.log('PROYECTOS ENCONTRADOS:', projectsFound);
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
    fetchProjectsType();
  }, [fetchProjectsType]);

  return (
    <MainContainer>
      <TitleHeader>
        <i className='bi bi-rocket-takeoff-fill me-2'></i>
        Proyectos Web
      </TitleHeader>
      <ContentContainer>
        {loading ? (
          <Loading>Cargando proyectos...</Loading>
        ) : (
          <div className='row g-3'>
            {projects
              ? projects.map((project) => (
                  <ProjectListCard
                    colValue={'col-12 col-lg-6'}
                    key={project.id}
                    project={project}
                  />
                ))
              : 'Hola'}
          </div>
        )}
      </ContentContainer>
    </MainContainer>
  );
};

export default ProjectsList;
