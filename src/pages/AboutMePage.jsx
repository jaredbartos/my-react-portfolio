// Import personal photo for page
import photo from '../assets/images/my_photo.jpg';

export default function AboutMePage() {
  return (
    <div className="container">
      <div className="row mb-5">
        <h2 className="col text-center merriweather-regular from-bottom fs-4">About Me</h2>
      </div>
      <div className="row">
        <div className="col d-flex from-bottom delay-1 justify-content-center mb-3">
          <div className="card shadow">
            <div className="card-body p-0">
              <img src={photo} width='240px' className="img rounded" alt="Me wearing a baseball cap with trees in the background" title="A photo of me" />
            </div>           
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-7 d-flex from-bottom delay-2 align-items-center mb-3">
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