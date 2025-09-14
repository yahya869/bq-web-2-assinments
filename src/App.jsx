import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Meals from "./pages/Meals";
import Exercises from "./pages/Exercises";
import Progress from "./pages/Progress";
import Nutrition from "./pages/Nutrition";
import { Home } from "./pages/Home";

// Dummy Pages (abhi simple headings rakhe hain)
// function Home() {
//   return <h2 className="p-6 text-2xl font-bold">🏠 Welcome to Fitness Tracker</h2>;
// }
// function Profile() {
//   return <h2 className="p-6 text-2xl font-bold">👤 Profile Page</h2>;
// }
// function Meals() {
//   return <h2 className="p-6 text-2xl font-bold">🍽️ Meals Page</h2>;
// }
// function Exercises() {
//   return <h2 className="p-6 text-2xl font-bold">💪 Exercises Page</h2>;
// }
// function Progress() {
//   return <h2 className="p-6 text-2xl font-bold">📊 Progress Page</h2>;
// }
// function Nutrition() {
//   return <h2 className="p-6 text-2xl font-bold">🥗 Nutrition Page</h2>;
// }

export default function App() {
  return (
      <div>
        <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/nutrition" element={<Nutrition />} />
        </Routes>
      </div>
      </div>
  );
}
