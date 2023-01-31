import CardContainer from '../../components/Containers/CardContainer';
import PageHeader from '../../components/Headers/PageHeader';

const Home = () => {
  return (
    <div className='row'>
      <PageHeader>Home</PageHeader>
      <CardContainer>
        <div className='col-12'>
          <div className='border rounded bg-light shadow-sm mb-3 p-3'>
            <div className='header-image-1 rounded border-light shadow-sm mb-2'></div>
            <h2 className='py-3 fs-4 fw-bold'>Que es Starter</h2>
            <p>
              Starter nace como una plataforma de colaboración en proyectos de Desarrollo Web, UX/UI, Data Analyst. Los usuarios podrán crear proyectos propios o encontrar proyectos de otros coloaboradores. Además tambien podrán ser colaboradores de
              los mismos.
            </p>
          </div>
          <div className='border rounded bg-light shadow-sm mb-3 p-3'>
            <div className='header-image-2 rounded border-light shadow-sm mb-2'></div>
            <h2 className='py-3 fs-4 fw-bold'>Crea y comparte tu proyecto</h2>
            <p>Si tienes un proyecto o una idea y necesitas que colaboradores publica tu proyecto en Starter, elige los perfiles que necesitas y compartelo con la comunidad.</p>
          </div>
          <div className='border rounded bg-light shadow-sm mb-3 p-3'>
            <div className='header-image-2 rounded border-light shadow-sm mb-2'></div>
            <h2 className='py-3 fs-4 fw-bold'>Conviertete en Starter</h2>
            <p>Empieza ya, convierte en Starter y colabora con otros usuarios de la comunidad en diversos proyectos.</p>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default Home;
