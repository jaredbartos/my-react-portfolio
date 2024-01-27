// Import project data
import { projects } from '../assets/js/data';
// Import Project component
import Project from '../components/Project';

export default function PortfolioPage() {
  // Map through project data to create project cards
  const projectCards = projects.map((project) => {
    // Set variable for amount of animation delay so it increases
    // for each project card
    const delay = project.id * 0.1;

    const styles = {
      animationDelay: `${delay}s`
    };

    return (
      <div key={project.id} style={styles} className="col-lg-6 from-bottom">
        <Project
          {...project}
        />
      </div>
    );
  });

  return (
    <div className="container-fluid from-bottom">
      <div className="row mb-5">
        <h2 className="col text-center merriweather-regular h4">Portfolio</h2>
      </div>
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-center">
          {projectCards}
        </div>
      </div>
    </div>
  );
}