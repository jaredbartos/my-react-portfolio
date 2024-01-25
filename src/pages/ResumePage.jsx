import { skills } from '../assets/js/data';
import SkillCard from '../components/SkillCard';

export default function ResumePage() {
  let langSkillItems = [];
  let jsSkillItems = [];
  let dataSkillItems = [];

  const createListItems = (array, type) => {
    for (let skill of skills) {
      if (skill.category === type) {
        const listItem = (
          <li key={skill.id} className="list-group-item">{skill.name}</li>
        );
        array.push(listItem);
      }
    }
  };

  createListItems(langSkillItems, 'Languages and Concepts');
  createListItems(jsSkillItems, 'JavaScript Tools');
  createListItems(dataSkillItems, 'Databases');

  return (
    <div className="container-fluid">
      <div className="row mb-5">
        <h2 className="col text-center">Resume</h2>
      </div>
      <div className="row mb-5">
        <div className="col">
          <p className="text-center">You can download my resume by clicking <a href='/jared_bartos_resume.pdf' title="Click to download" download>here!</a></p>
        </div>
      </div>
      <div className="container">
        <div className="row mb-4">
          <h3 className="col text-center">Skills and Proficiencies</h3>
          <SkillCard
            category='Languages and Concepts'
            skills={langSkillItems}
          />
          <SkillCard
            category='JavaScript Tools'
            skills={jsSkillItems}
          />
          <SkillCard
            category='Databases'
            skills={dataSkillItems}
          />
        </div>
      </div>
    </div>
  );
}