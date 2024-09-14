// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import { navData } from "./data/navData";
import { sidebarData } from "./data/sidebarData";
import Listing from "./pages/Listing";
import Dashboard from "./pages/Dashboard";
import AccountHead from "./pages/admin/AccountHead";
import ExpenceType from "./pages/admin/ExpenceType";
import Formsubmit from "./pages/test/Formsubmit";
import PostCreate from "./pages/blog/PostCreate";
import CommentCreate from "./pages/blog/CommentCreate";
import CdeEditor from "./pages/codeeditor/CdeEditor";
import TodoList from "./pages/todo/TodoList";
import UsestateHook from "./pages/hooks/UsestateHook";
import UseEffectHook from "./pages/hooks/UseEffectHook";
import UseContextHook from "./pages/hooks/UseContextHook";
import LoginContextProvider from "./context/LoginContextProvider";
import UseRefHook from "./pages/hooks/UseRefHook";
import UseReducerHook from "./pages/hooks/UseReducerHook";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <LoginContextProvider>
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
                  path="/dataTable"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <Listing />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/expense_type"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <ExpenceType />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/accounts_head"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <AccountHead />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/test/form_submit"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <Formsubmit />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/blog/post_create"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <PostCreate />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/blog/comment_create"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <CommentCreate />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/todos/list"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <TodoList />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/hooks/usestate"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <UsestateHook />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/hooks/useeffect"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <UseEffectHook />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/hooks/usecontext"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <UseContextHook />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/hooks/useRef"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <UseRefHook />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/hooks/usereducer"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <UseReducerHook />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/editor"
                  element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <CdeEditor />
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
      </LoginContextProvider>
    </Router>
  );
};

export default App;
