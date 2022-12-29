import React from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='p-3 border-bottom'>
        <div className='container'>
          <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
            <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
              <li>
                <NavLink to='/' className='nav-link px-2 link-secondary'>
                  Acerca de...
                </NavLink>
              </li>
              <li>
                <NavLink to='/projects' className='nav-link px-2 link-dark'>
                  Proyectos
                </NavLink>
              </li>
              <li>
                <a href='#' className='nav-link px-2 link-dark'>
                  Colaboradores
                </a>
              </li>
            </ul>

            <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'>
              <input type='search' className='form-control' placeholder='Search...' aria-label='Search' />
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
              <ul className='dropdown-menu text-small' aria-labelledby='dropdownUser1'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Crear proyecto
                  </a>
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
                  <a className='dropdown-item' href='#'>
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <header className='py-3 mb-4 border-bottom'>
        <div className='container d-flex flex-row justify-content-center'>
          <RocketLaunchIcon strokeWidth={1.5} className='text-dark me-3' width={32} />
          <a href='/' className='d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none'>
            <span className='fs-4'>Starter</span>
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
