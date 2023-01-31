import { useCallback, useEffect, useState } from 'react';
import StarterCard from '../../components/Cards/StarterCard';
import CardContainer from '../../components/Containers/CardContainer';
import PageHeader from '../../components/Headers/PageHeader';
import Loading from '../../components/Loading/Loading';
import { getAllUsers } from '../../services/UserServices';

const Starters = () => {
  const [starters, setStarters] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStarters = useCallback(() => {
    getAllUsers()
      .then((projectsFound) => {
        console.log('Proyectos encontrados:', projectsFound);
        setStarters(projectsFound);
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
    fetchStarters();
  }, [fetchStarters]);

  console.log('PROFILE', starters);
  return (
    <div className='row'>
      <PageHeader>Starters</PageHeader>
      <CardContainer>
        {loading ? (
          <Loading>Buscando Starters...</Loading>
        ) : (
          <div className='row'>
            {starters
              ? starters.map((starter) => (
                  <StarterCard
                    key={starter.id}
                    name={starter.name}
                    profile={starter.profile}
                  />
                ))
              : 'No hay collaboradores aún'}
          </div>
        )}
      </CardContainer>
    </div>
  );
};

export default Starters;
