import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-700 to-pink-900 text-white">
      <h2 className="text-2xl font-bold mb-4">🌐 Web-App</h2>
      <h1 className="text-4xl font-bold mb-8">💪 Fitness Tracker</h1>
      <Link  to="/profile" className="bg-gradient-to-br from-pink-600 to-pink-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:from-pink-700 to-pink-900 transition">🚀 Start</Link>
    </div>
  );
}

export default Landing;
