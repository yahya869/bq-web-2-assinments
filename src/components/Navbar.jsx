import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <NavLink to="/">Fitness Tracker </NavLink>
        </h1>
        
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-300 ${isActive ? "text-yellow-400 font-semibold" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `hover:text-yellow-300 ${isActive ? "text-yellow-400 font-semibold" : ""}`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/meals"
            className={({ isActive }) =>
              `hover:text-yellow-300 ${isActive ? "text-yellow-400 font-semibold" : ""}`
            }
          >
            Meals
          </NavLink>
          <NavLink
            to="/exercises"
            className={({ isActive }) =>
              `hover:text-yellow-300 ${isActive ? "text-yellow-400 font-semibold" : ""}`
            }
          >
            Exercises
          </NavLink>
          <NavLink
            to="/progress"
            className={({ isActive }) =>
              `hover:text-yellow-300 ${isActive ? "text-yellow-400 font-semibold" : ""}`
            }
          >
            Progress
          </NavLink>
          <NavLink
            to="/nutrition"
            className={({ isActive }) =>
              `hover:text-yellow-300 ${isActive ? "text-yellow-400 font-semibold" : ""}`
            }
          >
            Nutrition
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
