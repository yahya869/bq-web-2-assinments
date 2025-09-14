import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";

function Profile() {
  const [form, setForm] = useState({
    age: "",
    gender: "male",
    weight: "",
    height: "",
    activity: "1.2", // sedentary default
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

    setResult({ bmr: Math.round(bmr), tdee: Math.round(tdee) });

    // Save to localStorage
    localStorage.setItem("userProfile", JSON.stringify({ ...form, bmr, tdee }));
  };

  return (
    <PageWrapper title=<center>"👤 My Profile"</center>>
      <form
        onSubmit={calculateBMR}
        className="bg-white shadow rounded p-6 space-y-4 max-w-md mx-auto"
      >
        <div>
          <label className="block font-medium">Age</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Gender</label>
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

        <div>
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

        <div>
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

        <div>
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

        <button
          type="submit"
          className="bg-gradient-to-r from-gray-900 to-gray-600
                     hover:from-gray-800 hover:to-gray-500  text-white px-4 py-2 rounded w-full"
        >
          Calculate
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded text-center shadow">
          <h2 className="text-xl font-bold">Results</h2>
          <p>BMR: {result.bmr} kcal/day</p>
          <p>TDEE: {result.tdee} kcal/day</p>
        </div>
      )}
    </PageWrapper>
  );
}

export default Profile;
