import StarterCard from '../../components/Cards/StarterCard';
import CardContainer from '../../components/Containers/CardContainer';
import PageHeader from '../../components/Headers/PageHeader';

const Starters = () => {
  return (
    <div className='row'>
      <PageHeader>Starters</PageHeader>
      <CardContainer>
        <StarterCard />
        <StarterCard />
        <StarterCard />
        <StarterCard />
        <StarterCard />
        <StarterCard />
      </CardContainer>
    </div>
  );
};

export default Starters;
