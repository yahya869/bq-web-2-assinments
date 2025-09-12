import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";

function Profile() {
  const [form, setForm] = useState({
    age: "",
    gender: "male",
    weight: "",
    height: "",
    activity: "1.2", // default sedentary
  });

  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Calculate BMR & TDEE
  const calculateBMR = (e) => {
    e.preventDefault();
    const { age, gender, weight, height, activity } = form;

    if (!age || !weight || !height) {
      alert("⚠️ Please fill all fields");
      return;
    }

    // Mifflin-St Jeor Equation
    let bmr =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    const tdee = bmr * parseFloat(activity);

    const results = { bmr: Math.round(bmr), tdee: Math.round(tdee) };
    setResult(results);
    setShowModal(true); // open modal

    // Save to localStorage
    localStorage.setItem("userProfile", JSON.stringify({ ...form, ...results }));
  };

  return (
    <PageWrapper title="👤 My Profile">
      {/* Form */}
      <form
        onSubmit={calculateBMR}
        className="bg-white shadow rounded p-6 space-y-4 max-w-md mx-auto  h-screen"
      >
        <div className="mt-5 mb-5">

        <div className="m-5">
          <label className="block font-medium mt-5">Age</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div className="m-5">
          <label className="block font-medium mt-5">Gender</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="m-5">
          <label className="block font-medium">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div className="m-5">
          <label className="block font-medium">Height (cm)</label>
          <input
            type="number"
            name="height"
            value={form.height}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div className="m-5">
          <label className="block font-medium">Activity Level</label>
          <select
            name="activity"
            value={form.activity}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="1.2">Sedentary (little/no exercise)</option>
            <option value="1.375">Light (1-3 days/week)</option>
            <option value="1.55">Moderate (3-5 days/week)</option>
            <option value="1.725">Active (6-7 days/week)</option>
            <option value="1.9">Very Active (hard exercise + job)</option>
          </select>
        </div>
        </div>
        <div className="m-5">
        <button
          type="submit"
          className="mt-5 bg-gradient-to-br from-pink-600 to-pink-800 hover:from-pink-700 to-pink-900 text-white px-4 py-2 rounded w-full"
        >
          Calculate
        </button>
        </div>
      </form>

      {/* Modal */}
      {showModal && result && (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-700 to-pink-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center max-w-sm w-80 animate-fadeIn">
            <h2 className="text-xl font-bold mb-4 ">Results ✅</h2>
            <p className="mb-2 ">BMR: {result.bmr} kcal/day</p>
            <p className="mb-4 ">TDEE: {result.tdee} kcal/day</p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-gradient-to-br from-pink-600 to-pink-800 hover:from-pink-700 to-pink-900 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}

export default Profile;
