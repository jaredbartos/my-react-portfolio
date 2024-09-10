import { Link, useLocation } from 'react-router-dom';
import { FaCircleInfo } from 'react-icons/fa6';
import { FaFolderOpen } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa6';
import { BsFillFileTextFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import useWindowDimensions from '../../utils/hooks';

export default function Navigation() {
  // Declare the active location path and set value to initial path
  const activePath = useLocation().pathname;

  const dimensions = useWindowDimensions();

  const isDesktop = dimensions.width > 800;

  // Array to use for nav links
  const links = [
    { title: 'About Me', path: '/' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Contact', path: '/contact' },
    { title: 'Resume', path: '/resume' }
  ];

  // Map through link data to create link elements for use in navigation
  const linkElements = links.map((link, index) => {
    const isActivePath = activePath === link.path;

    let icon;

    switch (link.title) {
      case 'About Me':
        icon = <FaCircleInfo />;
        break;
      case 'Portfolio':
        icon = <FaFolderOpen />;
        break;
      case 'Contact':
        icon = <FaEnvelope />;
        break;
      case 'Resume':
        icon = <BsFillFileTextFill />;
    }

    return (
      <Link
        key={index}
        to={link.path}
        // Check if activePath is equal to the path of the link
        // If so, add 'active' class for bootstrap styling
        className={`p-2 px-3 col-12 col-lg-2 mx-3 text-center rounded ${
          isActivePath ? 'nav-link active text-white' : 'nav-link'
        }`}
      >
        <IconContext.Provider
          value={{
            className: `${isActivePath ? 'text-white' : 'icon-color'} ${isDesktop && 'icon-position'}`
          }}
        >
          {icon}
        </IconContext.Provider>
        {isDesktop && link.title}
      </Link>
    );
  });

  return (
    <ul className="row justify-content-center merriweather-regular fs-6">
      {/* Insert links into nav */}
      {linkElements}
    </ul>
  );
}
