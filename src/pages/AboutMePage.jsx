// Import personal photo for page
import photo from '../assets/images/jared_and_rebecca.jpg';

export default function AboutMePage() {
  return (
    <div className="container-fluid">
      <div className="row mb-5">
        <h2 className="col text-center">About Me</h2>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-3 d-flex align-items-center">
          <img src={photo} className="img-fluid" alt="Me golfing with my fiance, Rebecca" title="Me golfing with my fiance, Rebecca" />
        </div>
        <div className="col-3 d-flex align-items-center">
          <p>
            My name is Jared Bartos. I am a student in the full-stack web development boot camp through the University of Minnesota. I currently reside in Forest Lake, MN, near Minneapolis-St.Paul.
            I have always had a love for the ever-expanding field of modern tech, and I am eager to break into the development industry. My main goal is to either become a software developer or join the 
            exciting area of video game development.
          </p>
        </div>
      </div>
    </div>
  );
}