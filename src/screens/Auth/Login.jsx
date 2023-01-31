import CardContainer from '../../components/Containers/CardContainer';
import PageHeader from '../../components/Headers/PageHeader';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { login as userLogin } from '../../services/AuthServices';

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [checkPassword, setCheckPassword] = useState(false);

  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);

      userLogin(data)
        .then(({ accessToken }) => {
          login(accessToken);
          console.log('Login correcto');
          navigate('/perfil');
        })
        .catch((error) => {
          console.log(error.response.data.msg);
        });
    }
  };
  return (
    <div className='row'>
      <PageHeader>Login</PageHeader>
      <CardContainer>
        <div className='row'>
          <div className='col-12'>
            <div className='border rounded bg-light shadow-sm mb-3 p-3'>
              <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
                <div className='row g-2 d-flex mb-3 border-bottom'>
                  <h3>Inicia sesión</h3>
                  <p>Introducte tus credenciales para iniciar sesión en Starter.</p>
                  <div className='col-12 form-floating mb-3'>
                    <input {...register('email', { required: true })} type='email' className='form-control' id='email' />
                    <label htmlFor='email'>Correo Electrónico</label>
                    {errors.email?.type === 'required' && <span className='text-danger small my-1'>Es necesario un correo electrónico válido</span>}
                  </div>
                  <div className='col-md-6 form-floating mb-3'>
                    <input {...register('password', { required: true })} type='password' className='form-control' id='password' />
                    <label htmlFor='password'>Contraseña</label>
                    {errors.password?.type === 'required' && <span className='text-danger small my-1'>Es necesario introducir la contraseña</span>}
                    {checkPassword ? <span className='text-danger small my-1'>Las contraseñas no coinciden</span> : ''}
                  </div>
                  <div className='col-md-6 form-floating mb-3'>
                    <input {...register('password2', { required: true })} type='password' className='form-control' id='password2' />
                    <label htmlFor='password2'>Confirmar contraseña</label>
                    {errors.password2?.type === 'required' && <span className='text-danger small my-1'>Es necesario confirmar la contraseña</span>}
                    {checkPassword ? <span className='text-danger small my-1'>Las contraseñas no coinciden</span> : ''}
                  </div>
                </div>

                <div className='col-12 d-flex flex-row justify-content-center'>
                  <button className='btn btn-color-primary py-3 px-5 ms-3' type='submit'>
                    Acceder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default Login;
