import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Navigation } from "./header/navigation";
import { StockDisplayPage } from "./pages/StockDisplay";

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>Page Not Found</div>} />
          <Route path="/StockDisplay/:symbol" element={<StockDisplayPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
