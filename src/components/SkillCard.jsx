export default function SkillCard({ category, skills }) {
  return (
    <div className="card shadow mx-3 border-0 mb-3 p-0 col-lg-5">
      <div className="card-header background-onyx text-white">
        {category}
      </div>
      <ul className="list-group list-group-flush">
        {skills}
      </ul>
    </div>
  );
}