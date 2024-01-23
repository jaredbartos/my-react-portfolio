export default function Project({ image, title, deployedLink, githubLink }) {
  return (
    <div className="card m-3">
      <img src={image} className="card-img-top" alt={`${title} Screenshot`} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href={deployedLink} className="btn btn-primary me-2" target="_blank" rel="noreferrer">App</a>
        <a href={githubLink} className="btn btn-primary" target="_blank" rel="noreferrer">GitHub Repo</a>
      </div>
    </div>
  );
}