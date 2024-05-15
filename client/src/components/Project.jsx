import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, icons } from '../assets/js/iconData';

export default function Project({ image, title, deployedLink, githubLink }) {
  return (
    <div className='card m-3 shadow project'>
      <img
        width='640px'
        src={image}
        className='card-img-top'
        alt={`${title} Screenshot`}
      />
      <div className='card-body background-onyx rounded-bottom border-top'>
        <h3 className='card-title h5 text-center text-white'>{title}</h3>
        <div className='d-flex justify-content-center'>
          <a
            href={deployedLink}
            className='btn me-2'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={icon(icons.faGlobe)} /> Visit the App
          </a>
          <a href={githubLink} className='btn' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={icon(icons.faGithub)} /> View Repo on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
