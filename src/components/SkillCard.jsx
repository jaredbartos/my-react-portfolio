export default function SkillCard({ category, skills }) {
  return (
    <div className="card">
      <div className="card-header">
        {category}
      </div>
      <ul className="list-group list-group-flush">
        {skills}
      </ul>
    </div>
  );
}