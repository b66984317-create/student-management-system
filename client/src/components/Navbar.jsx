import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/students" className={({ isActive }) => isActive ? 'active' : ''}>Students</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/teachers" className={({ isActive }) => isActive ? 'active' : ''}>Teachers</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;