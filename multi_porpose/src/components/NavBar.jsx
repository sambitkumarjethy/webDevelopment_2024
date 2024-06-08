// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ items }) => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-400 shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-white">
            MyApp
          </Link>
        </div>
        <ul className="flex space-x-4">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="block px-4 py-2 text-white hover:bg-blue-600"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
