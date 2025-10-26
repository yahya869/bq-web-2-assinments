// App.jsx
import { Routes, Route } from "react-router-dom";
import Welcome from "./compunents/welcome";
import CartPage from "./compunents/Cart";
import Products from "./compunents/products";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Cart" element={<CartPage />} />

      </Routes>
  );
}

export default App;
