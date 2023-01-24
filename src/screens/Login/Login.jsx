import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import Logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';

import { login as userLogin } from '../../services/AuthServices';
import AuthContext from '../../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    userLogin(data)
      .then(({ accessToken }) => {
        login(accessToken);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.response.data.msg);
      });
  };

  return (
    <MainContainer>
      <div className='row g-3 p-3 vh-100 d-flex flex-column flex-lg-row align-items-center justify-content-center'>
        <div className='col-12 col-lg-4'>
          <div className='p-3 d-flex flex-column align-items-center justify-content-center text-decoration-none'>
            <img src={Logo} alt='' width={128} />
            <span className='fs-3 fw-bold'>Starter</span>
          </div>
        </div>
        <div className='col-12 col-lg-4'>
          <div to='/proyectos/crear' className='p-3 bg-light rounded fw-bold border border-1 shadow-sm text-decoration-none'>
            <h3 className='text-center fs-2 mb-3 border-bottom py-1 '>Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
              <div className='form-floating mb-3'>
                <input type='text' {...register('email', { required: true })} className='form-control' id='floatingInput' placeholder='Introduce un nombre para tu proyecto' />
                <label htmlFor='floatingInput'>Email</label>
              </div>
              <div className='form-floating mb-3'>
                <input type='password' {...register('password', { required: true })} className='form-control' id='floatingInput' placeholder='Introduce un nombre para tu proyecto' />
                <label htmlFor='floatingInput'>Contraseña</label>
              </div>
              <div className='form-floating mb-3'>
                <input type='password' {...register('password2', { required: true })} className='form-control' id='floatingInput' placeholder='Introduce un nombre para tu proyecto' />
                <label htmlFor='floatingInput'>Confirmar contraseña</label>
              </div>
              <div className='d-grid gap-2 border-top pt-3 mb-3'>
                <button type='submit' className='btn btn-color-primary py-3 px-5'>
                  Iniciar sesión
                </button>
              </div>
            </form>
            <span className='small'>
              ¿No estas registrado? <Link to='/register'>Crear cuenta</Link>
            </span>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Login;
