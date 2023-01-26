import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import { validate } from '../../services/AuthServices';
import Logo from '../../assets/logo.svg';

const AuthActivation = () => {
  const [alert, setAlert] = useState();
  const { id } = useParams();

  useEffect(() => {
    validate(id)
      .then((res) => {
        console.log(res.msg);
        setAlert(res.msg);
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        setAlert(error.response.data.msg);
      });
  }, []);

  return (
    <MainContainer>
      <div className='row g-3 p-3 vh-100 d-flex flex-column flex-lg-row align-items-center justify-content-center'>
        <div className='col-12 col-lg-4'>
          <div className='p-3 d-flex flex-column align-items-center justify-content-center text-decoration-none'>
            <img src={Logo} alt='' width={128} />
            <span className='fs-3 fw-bold'>Starter</span>
          </div>
        </div>
        <div className='col-12 col-lg-6'>
          <div className='p-3 bg-light rounded fw-bold border border-1 shadow-sm text-center'>
            <div className='col-12'>
              <h2>Activación de la cuenta</h2>
              {alert ? <p>{alert}</p> : ''}
            </div>
            <span className='small'>
              <Link to='/login' className='text-decoration-none'>
                Iniciar sesión
              </Link>
            </span>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default AuthActivation;
