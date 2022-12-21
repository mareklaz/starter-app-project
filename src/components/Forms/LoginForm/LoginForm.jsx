// Import
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { login as userLogin } from '../../../services/AuthServices';
import AuthContext from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginFormSchema from './LoginFormSchema';
import Button from '../../Button/Button';

const INITIAL_VALUES = {
  email: '',
  password: '',
};

const LoginForm = () => {
  // const [formSend, setFormSend] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

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
    validationSchema: LoginFormSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });
  console.log(setFieldError);
  let validation = {};

  function onSubmit(values) {
    userLogin(values)
      .then(({ accessToken }) => {
        login(accessToken);
        navigate('/start');
      })
      .catch((err) => {
        console.log('En login: ', err.response.data);
        validation = {
          ...validation,
          info: err.response.data,
        };
        err.response.data &&
          Object.keys(err.response.data.errors).forEach((errorKey) => {
            console.log('test', errorKey);
            setFieldError(errorKey, err.response.data.errors[errorKey]);
          });
      })
      .finally(() => {
        // console.log('User Login Successfull');
      });

    // resetForm();
    // console.log('Values', values);
    // console.log('Formulario Enviado');
    // setFormSend(true);
    // setTimeout(() => {
    //   setFormSend(false);
    // }, 3000);
  }
  console.log('Validacion ', validation);
  return (
    <form onSubmit={handleSubmit} className='register-form'>
      {/* {err.response.data ? 'error' : 'nada'} */}
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
        Login
      </Button>
      {/* {formSend && <span className='form-send'>Formulario Enviado!</span>} */}
    </form>
  );
};

export default LoginForm;
