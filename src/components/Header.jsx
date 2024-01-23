import Navigation from './Navigation';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <h1 className="navbar-brand">Jared Bartos</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <Navigation />
        </div>
      </div>
    </nav>
  );
}