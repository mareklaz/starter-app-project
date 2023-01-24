import React from 'react';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { logout } from '../../store/AccessTokenStore';

const NavBar = () => {
  return (
    <div className='p-3 navbar-custom bg-light rounded fw-bold border border-1 shadow-sm d-flex justify-content-between align-items-center '>
      <Link to='/' className='d-flex align-items-center text-decoration-none text-dark'>
        <img src={Logo} alt='' width={42} />
        <span className='fs-3 ms-2'>Starter</span>
      </Link>
      <div className='d-flex align-items-center '>
        <input className='form-control me-3 ' type='search' placeholder='Buscar...' />
        <div className='text-dark'>
          <div className='dropdown text-end'>
            <div className='d-block link-dark text-decoration-none' data-bs-toggle='dropdown' aria-expanded='false'>
              <i className='bi bi-person-circle fs-3 '></i>
            </div>

            <ul className='dropdown-menu dropdown-menu-end text-small'>
              <li>
                <Link to='/register' className='dropdown-item text-danger'>
                  Register
                </Link>
              </li>
              <li>
                <Link to='/usuarios/perfil' className='dropdown-item'>
                  Perfil
                </Link>
              </li>
              <li>
                <Link to='/proyectos/crear' className='dropdown-item'>
                  Crear proyecto
                </Link>
              </li>
              <li>
                <hr className='dropdown-divider' />
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
                  className='dropdown-item text-danger'>
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
