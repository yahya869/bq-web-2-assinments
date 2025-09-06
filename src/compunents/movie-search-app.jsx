import React, { useState, useEffect } from "react";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // API se movies fetch karna
  const fetchMovies = async (searchQuery) => {
    let url = "";

    if (searchQuery) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=925510821539cd7224eccdd970554587&query=${searchQuery}`;
    } else {
      url = `https://api.themoviedb.org/3/movie/popular?api_key=925510821539cd7224eccdd970554587`;
    }

    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results || []);
  };

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setQuery(searchTerm);
      setSearchTerm("");
    }
  };

  function hendleSearch() {
    setQuery(searchTerm);
    setSearchTerm("");
  }
  return (
    <div className="min-h-screen bg-teal-600">
      {/* Navbar */}
      <nav className="bg-teal-900 shadow-md px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-teal-50">Movies Tube</h1>

        {/* Search Box */}
        <div className="flex w-1/2 text-white">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full border border-teal-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />&nbsp;
          <button
            onClick={hendleSearch}
            className="bg-teal-600 text-teal-50 px-4 rounded-r-lg hover:bg-teal-700 transition"
          >
            Search
          </button>
        </div>
      </nav>

      {/* Movies Grid */}
      <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.length === 0 ? (
          <p className="text-gray-500 text-lg col-span-full text-center">
            No movies found
          </p>
        ) : (
          movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-60 object-cover"
                />
              ) : (
                <div className="w-full h-60 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">No Image</span>
                </div>
              )}

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {movie.overview || "No description available."}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
