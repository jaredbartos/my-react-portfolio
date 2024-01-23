// Import CSS
import './App.css';
// Import React Components
import Header from './components/Header';
import Footer from './components/Footer';
// Import React Router modules
import { Outlet } from 'react-router-dom';

// App component to compile current page
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

// Export App component
export default App;
