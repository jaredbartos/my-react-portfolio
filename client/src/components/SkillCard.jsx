export default function SkillCard({ category, skills }) {
  const styles = {
    fontSize: 18
  };

  return (
    <div className='card shadow mx-3 border-dark-subtle rounded-4 mb-3 p-0 col-lg-5'>
      <div style={styles} className='card-header background-purple rounded-top-4 text-white'>
        {category}
      </div>
      <ul className='list-group list-group-flush rounded-4'>{skills}</ul>
    </div>
  );
}
