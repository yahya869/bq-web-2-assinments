import React, { useState, useEffect } from "react";

function Exercises() {
  const today = new Date().toISOString().split("T")[0];
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [exercises, setExercises] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editExercise, setEditExercise] = useState("");
  const [editDuration, setEditDuration] = useState("");
  const [editCalories, setEditCalories] = useState("");

  // Load from localStorage
  useEffect(() => {
    const savedLogs = JSON.parse(localStorage.getItem("exerciseLogs")) || {};
    setExercises(savedLogs[today] || []);
  }, [today]);

  // Save to localStorage
  const saveExercisesToStorage = (updatedExercises) => {
    const savedLogs = JSON.parse(localStorage.getItem("exerciseLogs")) || {};
    savedLogs[today] = updatedExercises;
    localStorage.setItem("exerciseLogs", JSON.stringify(savedLogs));
    setExercises(updatedExercises);
  };

  // Add new exercise
  const addExercise = (e) => {
    e.preventDefault();
    if (!exercise || !duration || !calories) return;

    const newExercises = [
      ...exercises,
      { exercise, duration: parseInt(duration), calories: parseInt(calories) },
    ];
    saveExercisesToStorage(newExercises);

    setExercise("");
    setDuration("");
    setCalories("");
  };

  // Delete
  const deleteExercise = (index) => {
    const updated = exercises.filter((_, i) => i !== index);
    saveExercisesToStorage(updated);
  };

  // Start editing
  const startEditing = (index) => {
    setEditingIndex(index);
    setEditExercise(exercises[index].exercise);
    setEditDuration(exercises[index].duration);
    setEditCalories(exercises[index].calories);
  };

  // Save edit
  const saveEdit = (index) => {
    const updatedExercises = exercises.map((ex, i) =>
      i === index
        ? {
            exercise: editExercise,
            duration: parseInt(editDuration),
            calories: parseInt(editCalories),
          }
        : ex
    );
    saveExercisesToStorage(updatedExercises);
    setEditingIndex(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4"><center>🏋️ Exercises Log</center></h1>

      {/* Add Exercise Form */}
      <form onSubmit={addExercise} className="flex gap-2 mb-6 flex-wrap">
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="Exercise name"
          className="border p-2 rounded flex-1"
        />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration (min)"
          className="border p-2 rounded w-32"
        />
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Calories"
          className="border p-2 rounded w-32"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          ➕ Add
        </button>
      </form>

      {/* Exercises List */}
      {exercises.length > 0 ? (
        <ul className="space-y-3">
          {exercises.map((ex, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-3 rounded shadow flex-wrap"
            >
              {editingIndex === index ? (
                <div className="flex gap-2 w-full flex-wrap">
                  <input
                    type="text"
                    value={editExercise}
                    onChange={(e) => setEditExercise(e.target.value)}
                    className="border p-1 rounded flex-1"
                  />
                  <input
                    type="number"
                    value={editDuration}
                    onChange={(e) => setEditDuration(e.target.value)}
                    className="border p-1 rounded w-24"
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
                <>
                  <span className="font-medium">
                    {ex.exercise} – {ex.duration} min – {ex.calories} kcal
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEditing(index)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => deleteExercise(index)}
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
        <p className="text-gray-500">No exercises logged today.</p>
      )}
    </div>
  );
}

export default Exercises;
