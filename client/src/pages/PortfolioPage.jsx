// Import project data
import { projects } from '../assets/js/projectData';
// Import Project component
import Project from '../components/Project';
import heatCheckScreenshot from '../assets/images/screenshots/heatcheck_screenshot.png';
import { FaFolderOpen } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function PortfolioPage() {
  // Map through project data to create project cards
  const projectCards = projects.map((project) => {
    // Set variable for amount of animation delay so it increases
    // for each project card
    const delay = project.id * 50 + 150;

    const styles = {
      animationDelay: `${delay}ms`
    };

    return (
      <div key={project.id} style={styles} className="col-lg-6 from-bottom">
        <Project {...project} />
      </div>
    );
  });

  return (
    <div className="container-fluid from-bottom">
      <div className="row mb-5">
        <h2 className="col text-center merriweather-regular fs-4">
          <IconContext.Provider
            value={{ className: 'icon-position icon-color' }}
          >
            <FaFolderOpen />
          </IconContext.Provider>
          Portfolio
        </h2>
      </div>
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-center">
          {/* Display featured project first */}
          <div className="col-12 from-bottom delay-1">
            <Project
              image={heatCheckScreenshot}
              title="HeatCheck"
              deployedLink="https://heatcheck.onrender.com/"
              githubLink="https://github.com/jaredbartos/heat-check"
            />
          </div>
          {projectCards}
        </div>
      </div>
    </div>
  );
}
