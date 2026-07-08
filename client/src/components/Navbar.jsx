import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Dashboard</Link></li>
        <li className="navbar-item"><Link to="/students">Students</Link></li>
        <li className="navbar-item"><Link to="/teachers">Teachers</Link></li>
        <li className="navbar-item"><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;