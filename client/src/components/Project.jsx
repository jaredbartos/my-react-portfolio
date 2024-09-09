import { FaGlobe } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

export default function Project({ image, title, deployedLink, githubLink }) {
  return (
    <div className="card m-3 shadow project">
      <img
        width="640px"
        src={image}
        className="card-img-top"
        alt={`${title} Screenshot`}
      />
      <div className="card-body background-onyx rounded-bottom border-top">
        <h3 className="card-title h5 text-center text-white">{title}</h3>
        <div className="d-flex justify-content-center">
          <a
            href={deployedLink}
            className="btn me-2 text-white"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider value={{ className: 'icon-position' }}>
              <FaGlobe />
            </IconContext.Provider>
            Visit the App
          </a>
          <a
            href={githubLink}
            className="btn text-white"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider value={{ className: 'icon-position' }}>
              <FaGithub />
            </IconContext.Provider>
            View Repo on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
