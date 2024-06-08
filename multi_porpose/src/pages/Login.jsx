import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../components/InputText";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedProject, setSelectedProject] = useState("projectA");
  const navigate = useNavigate();

  const projects = [
    { value: "projectA", label: "Project A", dashboardRoute: "/dashboard" },
    { value: "projectB", label: "Project B", dashboardRoute: "/dashboard" },
    { value: "projectC", label: "Project C", dashboardRoute: "/dashboard" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication logic
    if (username === "user" && password === "password") {
      setAuth(true);
      const project = projects.find(
        (project) => project.value === selectedProject
      );
      // console.log(project, selectedProject);
      navigate(project.dashboardRoute);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">
          Login
        </h1>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <InputText
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputText
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Dropdown
            label="Select Project"
            options={projects}
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
          />
          <Button
            label="Login"
            onClick={handleSubmit}
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white font-semibold rounded-lg shadow-md"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
