// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import UserManagement from "./components/UserManagment";
import RoleManagement from "./components/RoleManagement";

function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [roles, setRoles] = useState(() => {
    const savedRoles = localStorage.getItem("roles");
    return savedRoles ? JSON.parse(savedRoles) : [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("roles", JSON.stringify(roles));
  }, [roles]);

  return (
    <Router>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/users" className="nav-link">
            Users
          </Link>
          <Link to="/roles" className="nav-link">
            Roles
          </Link>
        </div>
      </nav>
      <div className="content">
        <Routes>
          <Route
            path="/users"
            element={
              <UserManagement users={users} setUsers={setUsers} roles={roles} />
            }
          />
          <Route
            path="/roles"
            element={
              <RoleManagement
                roles={roles}
                setRoles={setRoles}
                users={users}
                setUsers={setUsers}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
