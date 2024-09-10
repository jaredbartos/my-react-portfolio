// Import personal photo for page
import photo from '../assets/images/my_photo.jpg';
import { FaCircleInfo } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

export default function AboutMePage() {
  return (
    <div className="container">
      <div className="row mb-5">
        <h2 className="col text-center merriweather-regular from-bottom fs-4">
          <IconContext.Provider
            value={{ className: 'icon-position icon-color' }}
          >
            <FaCircleInfo />
          </IconContext.Provider>
          About Me
        </h2>
      </div>
      <div className="row">
        <div className="col d-flex from-bottom delay-1 justify-content-center mb-3">
          <div className="card bg-dark-subtle shadow rounded-4 border-dark-subtle">
            <div className="card-body p-0">
              <img
                src={photo}
                width="240px"
                className="img rounded-4"
                alt="Me wearing a baseball cap with trees in the background"
                title="A photo of me"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-7 d-flex from-bottom delay-2 align-items-center mb-5">
          <div className="card border-dark-subtle rounded-4 shadow">
            <div className="card-header background-purple rounded-top-4 text-white">Bio</div>
            <div className="card-body rounded">
              <p>
                My name is Jared Bartos, and I am a freelance web developer
                based out of the Minneapolis-St. Paul area. I grew up in a very
                small town in rural northeast Nebraska and attended the
                University of Nebraska-Lincoln, majoring in Psychology, before
                eventually moving to Minnesota. After several years in the North
                Star State, I took the leap into the full-stack web development
                boot camp through the University of Minnesota. Six months later,
                I was awarded a certificate in the MERN stack of development,
                beginning my true calling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
