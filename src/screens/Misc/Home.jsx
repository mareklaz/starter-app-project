import CardContainer from '../../components/Containers/CardContainer';
import PageHeader from '../../components/Headers/PageHeader';

const Home = () => {
  return (
    <div className='row'>
      <PageHeader>Home</PageHeader>
      <CardContainer>
        <div className='col-12'>
          <div className='border rounded bg-light shadow-sm mb-3 p-3'>
            <h2>Titulo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est
              recusandae quas aliquid impedit molestias error, porro cupiditate
              sint officiis, quisquam dolorem libero rerum aliquam neque,
              temporibus voluptates fugiat perferendis.
            </p>
          </div>
          <div className='border rounded bg-light shadow-sm mb-3 p-3'>
            <h2>Titulo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est
              recusandae quas aliquid impedit molestias error, porro cupiditate
              sint officiis, quisquam dolorem libero rerum aliquam neque,
              temporibus voluptates fugiat perferendis.
            </p>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default Home;
