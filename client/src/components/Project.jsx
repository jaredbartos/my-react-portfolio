import { FaGlobe } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

export default function Project({ image, title, deployedLink, githubLink }) {
  return (
    <div className="card m-3 shadow border bg-dark-subtle rounded-4 border-dark-subtle project">
      <img
        width="640px"
        src={image}
        className="card-img-top rounded-top-4"
        alt={`${title} Screenshot`}
      />
      <div className="card-body background-purple rounded-bottom-4 border-top border-purple">
        <h3 className="card-title h4 text-center text-white">{title}</h3>
        <div className="d-flex justify-content-center">
          <a
            href={deployedLink}
            className="me-5 fs-2 text-white"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider value={{ className: 'icon-position' }}>
              <FaGlobe />
            </IconContext.Provider>
          </a>
          <a
            href={githubLink}
            className="text-white fs-2"
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
