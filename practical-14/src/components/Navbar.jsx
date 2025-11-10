import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Auth App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
