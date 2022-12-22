import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='row justify-content-center'>
      <h1 className='text-center'>Estas en REGISTER</h1>
      <div className='col-4'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-3'>
            <label htmlFor='nameInput' className='form-label'>
              Nombre
            </label>
            <input type='text' {...register('name', { required: true })} className='form-control py-3' id='nameInput' placeholder='Escribe tu nombre de usuario.' />
          </div>
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
            <input type='password' {...register('password', { required: true })} className='form-control py-3' id='passwordInput' placeholder='Escribe tu nombre de usuario.' />
          </div>

          <div className='mb-3'>
            <label htmlFor='passwordInput' className='form-label'>
              Tu perfil
            </label>
            <select className='form-select py-3' {...register('profile', { required: true })}>
              <option value='Frontend'>Frontend</option>
              <option value='Backend'>Backend</option>
              <option value='Fullstack'>Fullstack</option>
              <option value='UX'>UX/UI</option>
              <option value='Data Analyst'>Data Analyst</option>
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor='passwordInput' className='form-label'>
              Sobre ti
            </label>
            <textarea className='form-control' {...register('description', { required: true })} />
          </div>

          <div className='d-grid gap-2'>
            <button type='submit' className='btn custom-btn btn-primary py-3'>
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
