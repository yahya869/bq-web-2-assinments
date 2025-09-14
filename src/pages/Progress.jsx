import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Progress() {
  const [chartData, setChartData] = useState([]);
  const [todaySummary, setTodaySummary] = useState(null);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [meals, setMeals] = useState([]);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const savedMeals = JSON.parse(localStorage.getItem("mealLogs")) || {};
    const savedExercises = JSON.parse(localStorage.getItem("exerciseLogs")) || {};
    const profile = JSON.parse(localStorage.getItem("profile")) || null;

    let tdee = profile?.tdee || 2000;
    const allDates = new Set([
      ...Object.keys(savedMeals),
      ...Object.keys(savedExercises),
    ]);

    const data = Array.from(allDates).map((date) => {
      const totalConsumed = (savedMeals[date] || []).reduce(
        (sum, meal) => sum + (meal.calories || 0),
        0
      );
      const totalBurned = (savedExercises[date] || []).reduce(
        (sum, ex) => sum + (ex.calories || 0),
        0
      );

      return {
        date,
        consumed: totalConsumed,
        burned: totalBurned,
        goal: tdee,
        net: totalConsumed - totalBurned - tdee,
      };
    });

    setChartData(data);

    // ✅ Selected Date Summary
    const totalConsumed = (savedMeals[selectedDate] || []).reduce(
      (sum, meal) => sum + (meal.calories || 0),
      0
    );
    const totalBurned = (savedExercises[selectedDate] || []).reduce(
      (sum, ex) => sum + (ex.calories || 0),
      0
    );
    const totalNet = totalConsumed - totalBurned - tdee;

    setTodaySummary({
      consumed: totalConsumed,
      burned: totalBurned,
      goal: tdee,
      net: totalNet,
    });

    setMeals(savedMeals[selectedDate] || []);
    setExercises(savedExercises[selectedDate] || []);
  }, [selectedDate]);

  // ✅ Delete Meal
  const deleteMeal = (index) => {
    const savedMeals = JSON.parse(localStorage.getItem("mealLogs")) || {};
    if (savedMeals[selectedDate]) {
      savedMeals[selectedDate].splice(index, 1);
      localStorage.setItem("mealLogs", JSON.stringify(savedMeals));
      setMeals([...savedMeals[selectedDate]]);
    }
  };

  // ✅ Delete Exercise
  const deleteExercise = (index) => {
    const savedExercises = JSON.parse(localStorage.getItem("exerciseLogs")) || {};
    if (savedExercises[selectedDate]) {
      savedExercises[selectedDate].splice(index, 1);
      localStorage.setItem("exerciseLogs", JSON.stringify(savedExercises));
      setExercises([...savedExercises[selectedDate]]);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4"><center>📊 Progress Tracker</center></h1>

      {/* ✅ Date Selector */}
      <div className="mb-4">
        <label className="mr-2 font-semibold">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      {/* ✅ Summary Card */}
      {todaySummary && (
        <div className="bg-gray-100 p-4 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Summary ({selectedDate})
          </h2>
          <p>🍽️ Calories Consumed: {todaySummary.consumed} kcal</p>
          <p>🔥 Calories Burned: {todaySummary.burned} kcal</p>
          <p>🎯 Goal (TDEE): {todaySummary.goal} kcal</p>
          <p
            className={`font-bold ${
              todaySummary.net > 0 ? "text-red-600" : "text-green-600"
            }`}
          >
            ⚖️ Net Balance: {todaySummary.net} kcal
          </p>
        </div>
      )}

      {/* ✅ Chart */}
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="consumed" fill="#8884d8" name="Calories Consumed" />
            <Bar dataKey="burned" fill="#4fc3f7" name="Calories Burned" />
            <Bar dataKey="goal" fill="#82ca9d" name="Calories Goal (TDEE)" />
            <Bar dataKey="net" fill="#ff6961" name="Net Balance" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-500">No progress data yet.</p>
      )}

      {/* ✅ Meals List */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">🍽️ Meals</h2>
        {meals.length > 0 ? (
          <ul className="space-y-2">
            {meals.map((meal, index) => (
              <li
                key={index}
                className="flex justify-between bg-white shadow p-2 rounded"
              >
                <span>
                  {meal.meal} - {meal.calories} kcal
                </span>
                <button
                  onClick={() => deleteMeal(index)}
                  className="text-red-600 font-bold"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No meals logged.</p>
        )}
      </div>

      {/* ✅ Exercises List */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">🏋️ Exercises</h2>
        {exercises.length > 0 ? (
          <ul className="space-y-2">
            {exercises.map((ex, index) => (
              <li
                key={index}
                className="flex justify-between bg-white shadow p-2 rounded"
              >
                <span>
                  {ex.exercise} - {ex.calories} kcal
                </span>
                <button
                  onClick={() => deleteExercise(index)}
                  className="text-red-600 font-bold"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No exercises logged.</p>
        )}
      </div>
    </div>
  );
}

export default Progress;
