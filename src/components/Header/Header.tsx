import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `hover:text-gray-300 ${isActive ? 'font-bold' : ''}`}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accounts"
              className={({ isActive }) => `hover:text-gray-300 ${isActive ? 'font-bold' : ''}`}
            >
              Tables
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
