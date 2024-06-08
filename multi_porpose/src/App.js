// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import { navData } from "./data/navData";
import { sidebarData } from "./data/sidebarData";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {isAuthenticated && <NavBar items={navData} />}
        <div className="flex flex-grow">
          {isAuthenticated && <Sidebar items={sidebarData} />}
          <div className="flex-grow p-4">
            <Routes>
              <Route
                path="/"
                element={<Login setAuth={setIsAuthenticated} />}
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <About />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/contact"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Contact />
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={<Login setAuth={setIsAuthenticated} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
