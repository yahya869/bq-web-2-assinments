// components/Welcome.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/products");
    }, 2000); // 10 seconds delay
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold animate-pulse text-center">
         Welcome to E-Commerce Cart
      </h1>
      <br />
      <img src="/loading.gif" alt="" />
      <p className="mt-4 text-lg">Loading...</p>
    </div>
  );
}

export default Welcome;
