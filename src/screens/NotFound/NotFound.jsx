import { Link } from 'react-router-dom';
import HomeContainer from '../../components/MainContainer/HomeContainer';
import Logo from '../../assets/logo.svg';

const NotFound = () => {
  return (
    <HomeContainer>
      <div className='row g-3 p-3 vh-100 d-flex flex-column flex-lg-row align-items-center justify-content-center'>
        <div className='col-12 col-lg-4'>
          <div className='p-3 d-flex flex-column align-items-center justify-content-center text-decoration-none'>
            <img src={Logo} alt='' width={128} />
          </div>
        </div>
        <div className='col-12 col-lg-8'>
          <div className='p-3 bg-light rounded fw-bold border border-1 shadow-sm text-decoration-none text-center'>
            <div className='border-bottom mb-3 py-2 d-flex flex-column justify-content-center align-items-center'>
              <i className='bi bi-emoji-frown fs-2 me-2'></i>
              <span className='text-center fs-4 '>Vaya, no hemos podido encontrar lo que buscabas</span>
            </div>
            <ul className='list-group list-group-flush '>
              <li className='list-group-item bg-light'>
                <Link to='/' className='text-decoration-none'>
                  Ir a Inicio
                </Link>
              </li>
              <li className='list-group-item bg-light'>
                <Link to='/login' className='text-decoration-none'>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
};

export default NotFound;
