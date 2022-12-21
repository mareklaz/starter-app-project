// Import
import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuthContext } from '../../context/AuthContext';
// import { logout } from '../../store/AccessTokenStore';

// Screens

// Componentes
import {
  RocketLaunchIcon,
  PresentationChartBarIcon,
  UserCircleIcon,
  BellAlertIcon,
  Cog8ToothIcon,
  IdentificationIcon,
  EnvelopeIcon,
  XCircleIcon,
  UserPlusIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

// App
const NavBar = () => {
  // const { user } = useAuthContext();

  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        <li className='logo'>
          <Link to='/' className='nav-link'>
            <span className='link-text'>Starter</span>
            <RocketLaunchIcon strokeWidth={1} className='icon-primary' />
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/proyectos' className='nav-link'>
            <PresentationChartBarIcon strokeWidth={1} className='icon-primary' />
            <span className='link-text'>Proyectos</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='perfil' className='nav-link'>
            <IdentificationIcon strokeWidth={1} className='icon-primary' />
            <span className='link-text'>Perfil</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='configuracion' className='nav-link'>
            <Cog8ToothIcon strokeWidth={1} className='icon-primary' />
            <span className='link-text'>Configuracion</span>
          </Link>
        </li>

        <li className='nav-item'>
          <div className='nav-link'>
            <XCircleIcon strokeWidth={1} className='icon-secondary' />
            <span className='link-text'>Logout</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
