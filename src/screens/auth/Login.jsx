import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/Header/SectionHeader';
import MainContainer from '../../components/MainContainer/MainContainer';
import { loginUser } from '../../services/AuthServices';

const Login = () => {
  const [passwordAlert, setPasswordAlert] = useState(null);

  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    // const formData = new FormData();

    // for (let value in values) {
    //   formData.append(value, values[value]);
    // }

    // console.log(formData);
    if (values.password != values.repeatePassword) {
      console.log('Password no coincide');
      setPasswordAlert('Las contraseñas no coinciden');
    } else {
      loginUser(values)
        .then((user) => {
          console.log('Has iniciado sesión correctamente', user);
        })
        .catch((error) => {
          console.log('Error al iniciar sesión del usuario', error);
        });
    }
  };

  return (
    <MainContainer>
      <SectionHeader className='login-image text-center py-5 my-3 text-white bg-color-primary rounded shadow-sm'>
        <h1>Login</h1>
      </SectionHeader>

      <p className='my-5'>Bienvenido a Starter, si ya dispones de una cuenta, inicia sesión para crear nuevos proyectos o colaborar con los ya existentes.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='container'>
          <div className='row justify-content-center mb-3'>
            <div className='col-12 col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='emailInput' className='form-label'>
                  Correo electrónico
                </label>
                <input type='email' {...register('email', { required: true })} className='form-control py-3' id='emailInput' placeholder='Escribe tu nombre de usuario.' />
              </div>
              <div className='mb-3'>
                <label htmlFor='passwordInput' className='form-label'>
                  Password
                </label>
                <input type='password' {...register('password', { required: true })} className='form-control py-3' id='passwordInput' placeholder='Escribe tu contraseña' />
              </div>
              <div className='mb-3'>
                <label htmlFor='passwordInput2' className='form-label'>
                  Confirmar password
                </label>
                <input type='password' {...register('repeatePassword', { required: true })} className='form-control py-3' id='passwordInput2' placeholder='Repite tu contraseña' />
              </div>
              {passwordAlert ? <p>Las contraseñas no coinciden</p> : ''}
              <div className='row justify-content-center'>
                <div className='col my-3'>
                  <div className='d-grid gap-2'>
                    <button type='submit' className='btn custom-btn btn-primary py-3'>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-6 text-center '>
              <p>
                ¿No tienes cuenta? <Link to='/register'>Crear cuenta</Link>
              </p>
              <p>
                <Link to='/auth'>Olvide la contraseña</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </MainContainer>
  );
};

export default Login;
