import { useCallback, useEffect, useState } from 'react';
import ProjectCard from '../../components/Cards/ProjectCard';
import CardContainer from '../../components/Containers/CardContainer';
import PageHeader from '../../components/Headers/PageHeader';
import Loading from '../../components/Loading/Loading';
import { getAllProjects } from '../../services/ProjectServices';

const Projects = () => {
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

  return (
    <div className='row'>
      <PageHeader>Proyectos</PageHeader>
      <CardContainer>
        {loading ? (
          <Loading>Cargando proyectos...</Loading>
        ) : (
          <div className='row'>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                projectCreator={project.creatorId.name}
                type={project.type}
                user={project.user}
                description={project.description}
                startDate={project.startDate}
                endDate={project.endDate}
                status={project.status}
              />
            ))}
          </div>
        )}
      </CardContainer>
    </div>
  );
};

export default Projects;
