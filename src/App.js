import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/base"
          element={<Base addBase={addBase} pizza={pizza} />}
        />
        <Route
          path="/toppings"
          element={<Toppings addTopping={addTopping} pizza={pizza} />}
        />
        <Route path="/order" element={<Order pizza={pizza} />} />
      </Routes>
    </Router>
  );
}

export default App;
