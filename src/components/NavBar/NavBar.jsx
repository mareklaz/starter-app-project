import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { logout } from '../../store/AccessTokenStore';
import { useAuthContext } from '../../context/AuthContext';

const NavBar = () => {
  const { user } = useAuthContext();

  return (
    <div className='p-4 my-3 bg-light rounded fw-bold border border-1 shadow-sm d-flex justify-content-between align-items-center '>
      <Link to='/' className='d-flex align-items-center text-decoration-none text-dark'>
        <img src={Logo} alt='' width={42} />
        <span className='fs-3 ms-2'>Starter</span>
      </Link>
      <div className='d-flex align-items-center'>
        <div className='text-dark'>
          <div className='dropdown text-end'>
            <div className='d-block link-dark text-decoration-none' data-bs-toggle='dropdown' aria-expanded='false'>
              <i className='bi bi bi-person-circle fs-3'></i>
            </div>

            <ul className='dropdown-menu dropdown-menu-end text-small'>
              <li>
                <Link to='/' className='dropdown-item fw-bold'>
                  Home
                </Link>
              </li>
              <li>
                <Link to={`/perfil/${user?.id}`} className='dropdown-item'>
                  Perfil
                </Link>
              </li>
              <li>
                <Link to='/proyectos/crear' className='dropdown-item'>
                  Crear proyecto
                </Link>
              </li>
              <li>
                <Link to='/proyectos' className='dropdown-item'>
                  Proyectos
                </Link>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <Link to='/register' className='dropdown-item text-success'>
                  Register
                </Link>
              </li>
              <li>
                <Link to='/login' className='dropdown-item text-primary'>
                  Login
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    logout();
                  }}
                  className='dropdown-item text-danger'
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
