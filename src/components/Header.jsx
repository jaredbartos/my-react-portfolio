import Navigation from './Navigation';

export default function Header() {
  const styles = {
    h1: {
      fontSize: '250%',
    }
  };

  return (
    <nav className="navbar navbar-expand-lg pb-2 mb-5">
      <div className="container-fluid">
        <h1 style={styles.h1} className="navbar-brand me-5 ms-3 mt-3 pb-5">Jared Bartos</h1>
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