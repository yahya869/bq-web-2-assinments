import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";

function Nutrition() {
  const [query, setQuery] = useState("");
  const [foodData, setFoodData] = useState(null);
  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const searchFood = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1`
      );

      const data = await res.json();
      if (data.products && data.products.length > 0) {
        const product = data.products[0];
        setFoodData({
          name: product.product_name || query,
          calories: product.nutriments?.["energy-kcal_100g"] || 0,
          protein: product.nutriments?.["proteins_100g"] || 0,
          carbs: product.nutriments?.["carbohydrates_100g"] || 0,
          fat: product.nutriments?.["fat_100g"] || 0,
        });
      } else {
        setFoodData(null);
      }
    } catch (error) {
      console.error("Error fetching food data", error);
      setFoodData(null);
    } finally {
      setLoading(false);
    }
  };

  const addToMeals = () => {
    if (!foodData) return;

    const savedLogs = JSON.parse(localStorage.getItem("mealLogs")) || {};
    const newMeal = {
      meal: foodData.name,
      calories: Math.round(foodData.calories),
    };

    if (!savedLogs[today]) savedLogs[today] = [];
    savedLogs[today].push(newMeal);

    localStorage.setItem("mealLogs", JSON.stringify(savedLogs));
    alert(`${foodData.name} added to Meals log ✅`);
  };

  return (
    <PageWrapper title=<center>"🍏 Nutrition Search"</center>>
      {/* Search Form */}
      <form onSubmit={searchFood} className="flex gap-2 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter food (e.g. apple, rice)"
          className="border p-2 rounded w-full focus:ring focus:ring-blue-200"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-gray-900 to-gray-600
                     hover:from-gray-800 hover:to-gray-500  text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-gray-500">Searching...</p>}

      {/* Food Data */}
      {foodData ? (
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-semibold capitalize">{foodData.name}</h2>
          <p>Calories: {Math.round(foodData.calories)} kcal</p>
          <p>Protein: {foodData.protein} g</p>
          <p>Carbs: {foodData.carbs} g</p>
          <p>Fat: {foodData.fat} g</p>

          <button
            onClick={addToMeals}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            ➕ Add to Meals
          </button>
        </div>
      ) : (
        !loading && <p className="text-gray-500">No food found yet.</p>
      )}
    </PageWrapper>
  );
}

export default Nutrition;
