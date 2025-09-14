import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div className="h-screen relative">
      {/* Background Image */}
      <img
        src="https://www.glofox.com/wp-content/uploads/2019/02/gym20nutrition-2.png" // public folder wali image ho to slash lagana zaroori hai
        alt="Fitness"
        className="w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-40">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          🏠 <br /> Welcome to <br /> Fitness-Tracker <br /> Web-App
        </h2>

        {/* Styled NavLink */}
        <NavLink
          to="/profile"
          className="px-6 py-3 rounded-lg shadow-lg text-white font-semibold 
                     bg-gradient-to-r from-gray-900 to-gray-600
                     hover:from-gray-800 hover:to-gray-500 
                     transition-all duration-300"
        >
          🚀 Get Started
        </NavLink>
      </div>
    </div>
  );
}
