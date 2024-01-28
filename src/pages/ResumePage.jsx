// Import skill data
import { skills } from '../assets/js/data';
// Import SkillCard component
import SkillCard from '../components/SkillCard';

// Resume Page Component
export default function ResumePage() {
  // Declare empty arrays for each skill category to push to later
  let langSkillItems = [];
  let jsSkillItems = [];

  // Function to create list items for each category
  const createListItems = (array, type) => {
    for (let skill of skills) {
      if (skill.category === type) {
        const listItem = <li key={skill.id} className="list-group-item">{skill.name}</li>;
        array.push(listItem);
      }
    }
  };

  // Call functions to generate lists for each skill category
  createListItems(langSkillItems, 'Languages and Concepts');
  createListItems(jsSkillItems, 'JavaScript Tools');

  return (
    <div className="container-fluid">
      <div className="row mb-5">
        <h2 className="col text-center merriweather-regular from-bottom h4">Resume</h2>
      </div>
      <div className="row from-bottom delay-1 mb-5">
        <div className="col">
          <p className="text-center">You can download my resume by clicking <a href='/jared_bartos_resume.pdf' title="Click to download" download>here!</a></p>
        </div>
      </div>
      <div className="container">
        <div className="row mb-4">
          <h3 className="col text-center merriweather-regular h5 mb-4 from-bottom delay-2">Skills and Proficiencies</h3>
          <div className="row d-flex from-bottom delay-3 justify-content-center">
            <SkillCard
              category='Languages and Concepts'
              skills={langSkillItems}
            />
            <SkillCard
              category='JavaScript Tools'
              skills={jsSkillItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
}