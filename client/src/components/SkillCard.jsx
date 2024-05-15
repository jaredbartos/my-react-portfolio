export default function SkillCard({ category, skills }) {
  const styles = {
    fontSize: 18
  };

  return (
    <div className='card shadow mx-3 border-0 mb-3 p-0 col-lg-5'>
      <div style={styles} className='card-header background-khaki'>
        {category}
      </div>
      <ul className='list-group list-group-flush'>{skills}</ul>
    </div>
  );
}
