import { Link } from 'react-router-dom';
import { useState } from 'react';
// Import link data
import { links } from '../assets/js/data';

export default function Navigation() {
  // Declare useState variables for the active location path and set value to initial path
  const [activePath, setActivePath] = useState(document.location.pathname);

  // Map through link data to create link elements for use in navigation
  const linkElements = links.map((link, index) => {
    return (
      <Link
        key={index}
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
  });  

  return (
    <ul className="navbar-nav">
      {/* Insert links into nav */}
      {linkElements}
    </ul>
  );
}