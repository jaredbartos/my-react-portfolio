export default function SkillCard({ category, skills }) {
  return (
    <div className="card shadow mx-3 mb-3 col-lg-5">
      <div className="card-header">
        {category}
      </div>
      <ul className="list-group list-group-flush">
        {skills}
      </ul>
    </div>
  );
}