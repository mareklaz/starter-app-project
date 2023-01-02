import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

const AuthRestorePassword = () => {
  const [passwordAlert, setPasswordAlert] = useState(null);

  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    setPasswordAlert('Hola');
  };

  return (
    <>
      <Header title={'Nueva Contraseña'} subtitle={'Crea una nueva contraseña'} className='login-image px-3 text-center py-5 mb-3 text-white bg-color-primary rounded shadow-sm' />
      <form onSubmit={handleSubmit(onSubmit)} className='my-5'>
        <div className='container'>
          <div className='row justify-content-center mb-3'>
            <div className='col-4'>
              <div className='mb-3'>
                <label htmlFor='passwordInput' className='form-label'>
                  Password
                </label>
                <input type='password' {...register('password', { required: true })} className='form-control py-3' id='passwordInput' placeholder='Escribe tu nombre de usuario.' />
              </div>
              <div className='mb-3'>
                <label htmlFor='passwordInput2' className='form-label'>
                  Confirmar password
                </label>
                <input type='password' {...register('repeatePassword', { required: true })} className='form-control py-3' id='passwordInput2' placeholder='Escribe tu nombre de usuario.' />
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
                <Link to='/register'>Olvide la contraseña</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AuthRestorePassword;
