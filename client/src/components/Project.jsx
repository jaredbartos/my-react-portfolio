import { FaGlobe } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

export default function Project({ image, title, deployedLink, githubLink }) {
  return (
    <div className="card m-3 shadow rounded border-0 project">
      <img
        width="640px"
        src={image}
        className="card-img-top"
        alt={`${title} Screenshot`}
      />
      <div className="card-body background-purple rounded-bottom-1 border-top border-purple">
        <h3 className="card-title h4 text-center text-white">{title}</h3>
        <div className="d-flex justify-content-center">
          <a
            href={deployedLink}
            className="me-5 fs-2 project-link text-white"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider value={{ className: 'icon-position' }}>
              <FaGlobe />
            </IconContext.Provider>
          </a>
          <a
            href={githubLink}
            className="text-white project-link fs-2"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider value={{ className: 'icon-position' }}>
              <FaGithub />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </div>
  );
}
