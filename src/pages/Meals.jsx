import React, { useState, useEffect } from "react";

function Meals() {
  const today = new Date().toISOString().split("T")[0];
  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState("");
  const [meals, setMeals] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editMeal, setEditMeal] = useState("");
  const [editCalories, setEditCalories] = useState("");

  // Load meals from localStorage
  useEffect(() => {
    const savedLogs = JSON.parse(localStorage.getItem("mealLogs")) || {};
    setMeals(savedLogs[today] || []);
  }, [today]);

  // Save meals to localStorage
  const saveMealsToStorage = (updatedMeals) => {
    const savedLogs = JSON.parse(localStorage.getItem("mealLogs")) || {};
    savedLogs[today] = updatedMeals;
    localStorage.setItem("mealLogs", JSON.stringify(savedLogs));
    setMeals(updatedMeals);
  };

  // Add new meal
  const addMeal = (e) => {
    e.preventDefault();
    if (!meal || !calories) return;

    const newMeals = [...meals, { meal, calories: parseInt(calories) }];
    saveMealsToStorage(newMeals);

    setMeal("");
    setCalories("");
  };

  // Delete meal
  const deleteMeal = (index) => {
    const newMeals = meals.filter((_, i) => i !== index);
    saveMealsToStorage(newMeals);
  };

  // Start editing
  const startEditing = (index) => {
    setEditingIndex(index);
    setEditMeal(meals[index].meal);
    setEditCalories(meals[index].calories);
  };

  // Save edited meal
  const saveEdit = (index) => {
    const updatedMeals = meals.map((m, i) =>
      i === index ? { meal: editMeal, calories: parseInt(editCalories) } : m
    );
    saveMealsToStorage(updatedMeals);
    setEditingIndex(null);
    setEditMeal("");
    setEditCalories("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4"><center>🍽 Meals Log</center></h1>

      {/* Add Meal Form */}
      <form onSubmit={addMeal} className="flex gap-2 mb-6">
        <input
          type="text"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
          placeholder="Enter meal name"
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Calories"
          className="border p-2 rounded w-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          ➕ Add
        </button>
      </form>

      {/* Meals List */}
      {meals.length > 0 ? (
        <ul className="space-y-3">
          {meals.map((m, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-3 rounded shadow"
            >
              {editingIndex === index ? (
                // Inline editing form
                <div className="flex gap-2 w-full">
                  <input
                    type="text"
                    value={editMeal}
                    onChange={(e) => setEditMeal(e.target.value)}
                    className="border p-1 rounded flex-1"
                  />
                  <input
                    type="number"
                    value={editCalories}
                    onChange={(e) => setEditCalories(e.target.value)}
                    className="border p-1 rounded w-24"
                  />
                  <button
                    onClick={() => saveEdit(index)}
                    className="bg-green-600 text-white px-2 py-1 rounded"
                  >
                    ✅ Save
                  </button>
                  <button
                    onClick={() => setEditingIndex(null)}
                    className="bg-gray-400 text-white px-2 py-1 rounded"
                  >
                    ❌ Cancel
                  </button>
                </div>
              ) : (
                // Normal view
                <>
                  <span className="font-medium">
                    {m.meal} - {m.calories} kcal
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEditing(index)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => deleteMeal(index)}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      🗑 Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No meals logged today.</p>
      )}
    </div>
  );
}

export default Meals;
