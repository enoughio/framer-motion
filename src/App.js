import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router"; // Fixed the import
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import { AnimatePresence } from "framer-motion";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza((prev) => ({ ...prev, base }));
  };

  const addTopping = (topping) => {
    setPizza((prev) => {
      const isToppingSelected = prev.toppings.includes(topping);
      const newToppings = isToppingSelected
        ? prev.toppings.filter((item) => item !== topping)
        : [...prev.toppings, topping];
      return { ...prev, toppings: newToppings };
    });
  };

  return (
    <Router>
      <Header />
      <AnimatedRoutes pizza={pizza} addBase={addBase} addTopping={addTopping} />
    </Router>
  );
}

function AnimatedRoutes({ pizza, addBase, addTopping }) {
  const location = useLocation(); // Correct usage inside Router

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
        <Route
          path="/toppings"
          element={<Toppings addTopping={addTopping} pizza={pizza} />}
        />
        <Route path="/order" element={<Order pizza={pizza} />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
