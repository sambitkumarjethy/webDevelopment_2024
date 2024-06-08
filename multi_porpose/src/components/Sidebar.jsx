// src/components/Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`flex items-center p-2 cursor-pointer hover:bg-blue-600 ${
          hasChildren ? "justify-between" : ""
        }`}
        onClick={hasChildren ? toggleOpen : null}
      >
        {hasChildren ? (
          <>
            <span className="text-white">{item.name}</span>
            <span className="text-white">{isOpen ? "-" : "+"}</span>
          </>
        ) : (
          <Link to={item.path} className="text-white">
            {item.name}
          </Link>
        )}
      </div>
      {hasChildren && isOpen && (
        <div className="ml-4">
          {item.children.map((child) => (
            <SidebarItem key={child.name} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ items }) => {
  return (
    <div className="w-64 bg-gradient-to-b from-blue-500 to-teal-400 shadow-md p-4">
      {items.map((item) => (
        <SidebarItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
