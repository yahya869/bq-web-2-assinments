import React from "react";
import {  Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
// baaki pages bhi import ho sakte hain

function App() {
  return (
      <Routes >
        {/* Pehli screen */}
        <Route path="/" element={<Landing />} />

        {/* Profile Calculator */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
  );
}

export default App;
