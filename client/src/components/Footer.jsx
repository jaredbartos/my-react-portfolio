import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { SiCodesignal } from 'react-icons/si';

export default function Footer() {
  return (
    <div className="container-fluid from-bottom">
      <div className="row mt-5">
        <div className="col d-flex justify-content-center">
          <a
            className="mx-3 fs-1"
            style={{ color: '#6e5494' }}
            href="https://github.com/jaredbartos"
            target="_blank"
            rel="noreferrer"
            title="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            className="mx-3 fs-1"
            style={{ color: '#0a66c2' }}
            href="https://www.linkedin.com/in/jared-bartos-726762272"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            className="mx-3 fs-1"
            style={{ color: '#3a73cf' }}
            href="https://app.codesignal.com/profile/jaredbartos"
            target="_blank"
            rel="noreferrer"
            title="CodeSignal Profile"
          >
            <SiCodesignal />
          </a>
        </div>
      </div>
      <div className="row">
        <p className="col text-center">&copy; 2024 - Jared Bartos</p>
      </div>
    </div>
  );
}
