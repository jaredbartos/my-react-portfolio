export default function Project({ image, title, deployedLink, githubLink }) {
  return (
    <div className="card m-3 shadow-lg project">
      <img src={image} className="card-img-top" alt={`${title} Screenshot`} />
      <div className="card-body border-top">
        <h3 className="card-title h5 text-center">{title}</h3>
        <div className="d-flex justify-content-center">
          <a href={deployedLink} className="btn btn-primary me-2" target="_blank" rel="noreferrer">Visit the App</a>
          <a href={githubLink} className="btn btn-primary" target="_blank" rel="noreferrer">View Repo on GitHub</a>
        </div>

      </div>
    </div>
  );
}