import { Link } from 'react-router-dom';

export default function Navigation() {
  const links = [
    { key: 1, title: 'About Me', path: '/' },
    { key: 2, title: 'Portfolio', path: '/portfolio' },
    { key: 3, title: 'Contact', path: '/contact' },
    { key: 4, title: 'Resume', path: '/resume' }
  ]

  return (
    <ul className="navbar-nav">
      {links.map((link) => {
        return (
          <Link
            key={link.key}
            to={link.path}
            className={`nav-link ${document.location.pathname === link.path && 'active'}`}
          >
            {link.title}
          </Link>
        );
      })}
    </ul>
  );
}