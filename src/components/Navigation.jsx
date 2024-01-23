import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
  const links = [
    { key: 1, title: 'About Me', path: '/' },
    { key: 2, title: 'Portfolio', path: '/portfolio' },
    { key: 3, title: 'Contact', path: '/contact' },
    { key: 4, title: 'Resume', path: '/resume' }
  ]

  const [activePath, setActivePath] = useState(document.location.pathname);

  return (
    <ul className="navbar-nav">
      {links.map((link) => {
        return (
          <Link
            key={link.key}
            to={link.path}
            onClick={() => setActivePath(link.path)}
            className={activePath === link.path ? 'nav-link active' : 'nav-link'}
          >
            {link.title}
          </Link>
        );
      })}
    </ul>
  );
}