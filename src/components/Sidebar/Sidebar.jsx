import React from 'react';
import { RocketLaunchIcon, PresentationChartBarIcon, IdentificationIcon, Cog8ToothIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='d-flex flex-nowrap vh-100'>
      <div className='d-flex flex-column flex-shrink-0 bg-light' width={48}>
        <Link to='/' className='d-block p-3 link-dark text-decoration-none border-bottom' data-bs-toggle='tooltip' data-bs-placement='right' data-bs-original-title='Icon-only'>
          <RocketLaunchIcon strokeWidth={1.5} className='text-dark' />
          <span className='visually-hidden'>Icon-only</span>
        </Link>
        <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
          <li className='nav-item'>
            <NavLink to='/projects' className={({ isActive }) => (isActive ? 'active nav-link active py-3 border-bottom rounded-0' : 'nav-link py-3 border-bottom rounded-0')}>
              <PresentationChartBarIcon strokeWidth={1.5} className='bi pe-none' width={32} height={32} />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/profile' className={({ isActive }) => (isActive ? 'active nav-link active py-3 border-bottom rounded-0' : 'nav-link py-3 border-bottom rounded-0')}>
              <IdentificationIcon strokeWidth={1.5} className='bi pe-none' width={32} height={32} />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/settings' className={({ isActive }) => (isActive ? 'active nav-link active py-3 border-bottom rounded-0' : 'nav-link py-3 border-bottom rounded-0')}>
              <Cog8ToothIcon strokeWidth={1.5} className='bi pe-none' width={32} height={32} />
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/goals' className={({ isActive }) => (isActive ? 'active nav-link active py-3 border-bottom rounded-0' : 'nav-link py-3 border-bottom rounded-0')}>
              <TrophyIcon strokeWidth={1.5} className='bi pe-none' width={32} height={32} />
            </NavLink>
          </li>
        </ul>
        <div className='dropdown border-top'>
          <a href='#' className='d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
            <img src='https://github.com/mdo.png' alt='mdo' width='24' height='24' className='rounded-circle' />
          </a>
          <ul className='dropdown-menu text-small shadow'>
            <li>
              <Link to='/register' className='dropdown-item' href='#'>
                Registrar
              </Link>
            </li>
            <li>
              <Link to='/login' className='dropdown-item' href='#'>
                Login
              </Link>
            </li>
            <li>
              <Link to='/logout' className='dropdown-item' href='#'>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
