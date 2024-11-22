// src/components/UserManagement.js
import React, { useState, useEffect } from "react";
import "./UserManagement.css";
import UserModal from "./UserModal";
import { FaEdit, FaTrash } from "react-icons/fa";

function UserManagement({ users, setUsers, roles }) {
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    //mock fetch API
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Mock API calls
  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
  };

  const editUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Open modal for add or edit
  const openModal = (user = null) => {
    setCurrentUser(user);
    setShowModal(true);
  };

  return (
    <div className="container">
      <h1 className="title">User Management</h1>
      <button className="add-button" onClick={() => openModal()}>
        Add User
      </button>
      <table className="table">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.role}</td>
              <td className="py-2 px-4 border-b">{user.status}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => openModal(user)}
                  className="text-yellow-500 mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <UserModal
          user={currentUser}
          onClose={() => setShowModal(false)}
          onSave={(user) => {
            currentUser ? editUser(user) : addUser(user);
            setShowModal(false);
          }}
          roles={roles}
        />
      )}
    </div>
  );
}

export default UserManagement;
