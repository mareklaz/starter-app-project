import React from 'react';
import { RocketLaunchIcon, PresentationChartBarIcon, IdentificationIcon, Cog8ToothIcon, TrophyIcon } from '@heroicons/react/24/outline';

const style1 = {
  position: 'absolute',
  inset: '0px auto auto 0px',
  margin: '0px',
  transform: 'translate3d(680px, 136.667px, 0px)',
};

const style2 = {
  position: 'absolute',
  top: '0px',
  transform: 'translate3d(0px, 14.6667px, 0px)',
};

const Sidebar = () => {
  return (
    <div className='d-flex flex-nowrap vh-100'>
      <div className='d-flex flex-column flex-shrink-0 bg-light' width={48}>
        <a href='/' className='d-block p-3 link-dark text-decoration-none' data-bs-toggle='tooltip' data-bs-placement='right' data-bs-original-title='Icon-only'>
          <RocketLaunchIcon strokeWidth={1} className='text-dark' />
          <span className='visually-hidden'>Icon-only</span>
        </a>
        <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
          <li className='nav-item'>
            <a href='#' className='nav-link active py-3 border-bottom rounded-0' data-bs-toggle='tooltip' data-bs-placement='right' data-bs-title='Tooltip on right'>
              <PresentationChartBarIcon strokeWidth={1} className='bi pe-none' width='32' height='32' role='img' aria-label='Dashboard' />
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link py-3 border-bottom rounded-0' data-bs-toggle='tooltip' data-bs-placement='right' data-bs-title='Tooltip on right'>
              <IdentificationIcon strokeWidth={1} className='bi pe-none' width='32' height='32' role='img' aria-label='Dashboard' />
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link py-3 border-bottom rounded-0' data-bs-toggle='tooltip' data-bs-placement='right' data-bs-title='Tooltip on right'>
              <Cog8ToothIcon strokeWidth={1} className='bi pe-none' width='32' height='32' role='img' aria-label='Dashboard' />
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link py-3 border-bottom rounded-0' data-bs-toggle='tooltip' data-bs-placement='right' data-bs-title='Tooltip on right'>
              <TrophyIcon strokeWidth={1} className='bi pe-none' width='32' height='32' role='img' aria-label='Dashboard' />
            </a>
          </li>
        </ul>
        <div className='dropdown border-top'>
          <a href='#' className='d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
            <img src='https://github.com/mdo.png' alt='mdo' width='24' height='24' className='rounded-circle' />
          </a>
          <ul className='dropdown-menu text-small shadow'>
            <li>
              <a className='dropdown-item' href='#'>
                New project...
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Settings
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Profile
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
