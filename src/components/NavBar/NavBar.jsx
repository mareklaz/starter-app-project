import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useAuthContext } from '../../context/AuthContext';
import { logout } from '../../store/AccessTokenStore';

const navlinks = [
  { name: 'Starter', to: '/', style: 'nav-link link-dark px-2' },
  { name: 'Proyectos', to: '/proyectos', style: 'nav-link link-dark px-2' },
  { name: 'Starters', to: '/starters', style: 'nav-link link-dark px-2' },
  { name: 'Top 10', to: '/top', style: 'nav-link link-dark px-2' },
];

const NavBar = () => {
  const { user } = useAuthContext();
  return (
    <nav className='navbar py-3 navbar-expand-lg navbar-dark bg-light border-bottom shadow-sm'>
      <div className='container'>
        <Link
          to='/'
          className='d-flex align-items-center text-decoration-none text-dark me-3'
        >
          <img
            src={Logo}
            alt=''
            width={36}
          />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='fs-1'>
            <i className='bi bi-list text-dark'></i>
          </span>
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav bg-light navbar-light me-auto mb-2 mb-lg-0'>
            {navlinks.map((link) => (
              <li
                className='nav-item'
                key={link.name}
              >
                <Link
                  className={link.style}
                  to={link.to}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {user ? (
            <div className='d-flex'>
              <Link
                to={'/proyectos/crear'}
                className='btn btn-dark me-2'
              >
                <i className='bi bi-plus-lg me-2'></i>
                Proyecto
              </Link>
              <Link
                to={'/perfil'}
                className='btn btn-outline-color-blue me-2'
              >
                Perfil
              </Link>
              <button
                className='btn btn-outline-color-red me-2'
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className='d-flex'>
              <Link
                to={'/login'}
                className='btn btn-outline-color-primary mx-1'
              >
                Login
              </Link>
              <Link
                to={'/registro'}
                className='btn btn-outline-color-primary mx-1'
              >
                Registrar
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
