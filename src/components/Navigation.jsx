import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
  // Array to use for nav links
  const links = [
    { key: 1, title: 'About Me', path: '/' },
    { key: 2, title: 'Portfolio', path: '/portfolio' },
    { key: 3, title: 'Contact', path: '/contact' },
    { key: 4, title: 'Resume', path: '/resume' }
  ]

  // Declare useState variables for the active location path and set value to initial path
  const [activePath, setActivePath] = useState(document.location.pathname);

  return (
    <ul className="navbar-nav">
      {/* Map through links array to render page links */}
      {links.map((link) => {
        return (
          <Link
            key={link.key}
            to={link.path}
            // Set onclick behavior to change activePath state to link path
            onClick={() => setActivePath(link.path)}
            // Check if activePath is equal to the path of the link
            // If so, add 'active' class for bootstrap styling
            className={activePath === link.path ? 'nav-link active' : 'nav-link'}
          >
            {link.title}
          </Link>
        );
      })}
    </ul>
  );
}