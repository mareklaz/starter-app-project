// Import
import React, { useState } from 'react';
import { useFormik } from 'formik';
import RegisterFormSchema from './RegisterFormSchema';
import Button from '../../Button/Button';
import { createUser } from '../../../services/UserServices';
import { handleFormChange } from '../../../screens/Home/Home';
// Screens

// Componentes

// App
const INITIAL_VALUES = {
  userName: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  // const [formSend, setFormSend] = useState(false);

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    setFieldValue,
    setFieldError,
  } = useFormik({
    onSubmit: onSubmit,
    initialValues: INITIAL_VALUES,
    validationSchema: RegisterFormSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });

  function onSubmit(values) {
    console.log('Valores', values);

    createUser({ ...values })
      .then((user) => {
        console.log('Usuario creado', user);
        handleFormChange(true);
      })
      .catch((err) => {
        console.log('Error DB', err.response.data);
        setFieldError('message', err.response.data.message);
        err.response.data &&
          Object.keys(err.response.data.errors).forEach((errorKey) => {
            setFieldError(errorKey, err.response.data.errors[errorKey]);
          });
      })
      .finally(() => {
        console.log('Terminado');
      });
    // resetForm();
    // setFormSend(true);
    // setTimeout(() => {
    //   setFormSend(false);
    // }, 3000);
  }

  return (
    <form onSubmit={handleSubmit} className='register-form'>
      <div className='register-element'>
        {/* <label htmlFor='userName'>Usuario</label> */}
        <input
          type='text'
          id='userName'
          placeholder='Escribe tu nombre de usuario'
          name='userName'
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
          className='form-input'
        />
        <span className='errors'>
          {errors.userName ? (
            <span className='errors'>{errors.userName}</span>
          ) : (
            ''
          )}
        </span>
      </div>
      <div className='register-element'>
        {/* <label htmlFor='email'>Email</label> */}
        <input
          type='email'
          id='email'
          placeholder='Escribe tu correo'
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className='form-input'
        />
        <span className='errors'>
          {errors.email ? <span className='errors'>{errors.email}</span> : ''}
        </span>
      </div>
      <div className='register-element'>
        {/* <label htmlFor='email'>Email</label> */}
        <input
          type='password'
          id='password'
          placeholder='Escribe tu contraseña'
          name='password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className='form-input'
        />
        <span className='errors'>
          {errors.password ? (
            <span className='errors'>{errors.password}</span>
          ) : '' || errors.message ? (
            <span className='errors'>{errors.message}</span>
          ) : (
            ''
          )}
        </span>
      </div>

      <Button type='submit' className='btn'>
        Registrar
      </Button>
      {/* {formSend && <span className='form-send'>Formulario Enviado!</span>} */}
    </form>
  );
};

export default RegisterForm;
