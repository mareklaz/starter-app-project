import React from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../assets/iconmonstr-rocket-19.svg';

const Navbar = () => {
  return (
    <>
      <nav className='py-3 border-bottom'>
        <div className='container'>
          <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
            <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
              <li>
                <NavLink to='/' className='nav-link px-2 link-secondary'>
                  Starter
                </NavLink>
              </li>
              <li>
                <NavLink to='/projects' className='nav-link px-2 link-dark'>
                  Proyectos
                </NavLink>
              </li>
              <li>
                <NavLink to='/collaborators' className='nav-link px-2 link-dark'>
                  Colaboradores
                </NavLink>
              </li>
              <li>
                <NavLink to='/top' className='nav-link px-2 link-dark'>
                  Top 10
                </NavLink>
              </li>
            </ul>

            <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'>
              <input type='search' className='form-control' placeholder='Buscar...' aria-label='Search' />
            </form>

            <div className='dropdown text-end'>
              <a href='#' className='d-block link-dark text-decoration-none dropdown-toggle' id='dropdownUser1' data-bs-toggle='dropdown' aria-expanded='false'>
                <img
                  src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
                  alt='mdo'
                  width='32'
                  height='32'
                  className='rounded-circle'
                />
              </a>
              <ul className='dropdown-menu dropdown-menu-end text-small' aria-labelledby='dropdownUser1'>
                <li>
                  <NavLink to='/projects/create' className='dropdown-item' href='#'>
                    Crear proyecto
                  </NavLink>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Configuración
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Perfil
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <NavLink to='/register' className='dropdown-item'>
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/login' className='dropdown-item'>
                    Login
                  </NavLink>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <Link to='/auth' className='dropdown-item'>
                    Nueva
                  </Link>
                </li>
                <li>
                  <Link to='/auth/30' className='dropdown-item'>
                    Restaurar
                  </Link>
                </li>
                <li>
                  <Link to='/activate/20' className='dropdown-item'>
                    Activar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <header className='py-3 border-bottom'>
        <div className='container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between'>
          <div className='d-flex align-items-center mb-3 m-lg-0 justify-content-center'>
            <img src={Logo} alt='Starter Logo Image' width={36} className='me-2' />
            <a href='/' className=' text-dark text-decoration-none'>
              <span className='fs-4'>Starter</span>
            </a>
          </div>
          <div className='d-flex justify-content-center align-items-center text-danger '>
            <i className='bi bi-exclamation-circle'></i>
            <span className='align-items-center ms-2'>Sitio web de ejemplo</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
