import Navigation from './Navigation';

export default function Header() {
  const styles = {
    h1: {
      fontSize: '175%'
    }
  };

  return (
    <nav className="navbar-expand-lg mb-5 border-bottom border-2 border-purple">
      <div className="container text-center p-3">
        <h1 style={styles.h1} className="libre-baskerville-regular">
          Jared Bartos
        </h1>
      </div>
      <div className="container my-3" id="navbarNav">
        <Navigation />
      </div>
    </nav>
  );
}
