import Navigation from './Navigation';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navigation
    links={[
      <Link key={1} className={`nav-link ${document.location.pathname === '/' && 'active'}`} to="/">About Me</Link>,
      <Link key={2} className={`nav-link ${document.location.pathname === '/portfolio' && 'active'}`} to="/portfolio">Portfolio</Link>,
      <Link key={3} className={`nav-link ${document.location.pathname === '/contact' && 'active'}`} to="/contact">Contact</Link>,
      <Link key={4} className={`nav-link ${document.location.pathname === '/resume' && 'active'}`} to="/resume">Resume</Link>
    ]}
    />
  )
}