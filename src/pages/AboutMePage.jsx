// Import personal photo for page
import photo from '../assets/images/jared_and_rebecca.jpg';

export default function AboutMePage() {
  return (
    <div className="container from-bottom">
      <div className="row mb-5">
        <h2 className="col text-center merriweather-regular fs-4">About Me</h2>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-5 d-flex align-items-center mb-3">
          <div className="card shadow">
            <div className="card-body p-0">
              <img src={photo} className="img-fluid rounded" alt="Me golfing with my fiance, Rebecca" title="Me golfing with my fiance, Rebecca" />
            </div>           
          </div>
        </div>
        <div className="col-lg-7 d-flex align-items-center mb-3">
          <div className="card shadow">
            <div className="card-body background-onyx text-white rounded">
              My name is Jared Bartos. I am a student in the full-stack web development boot camp through the University of Minnesota.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}