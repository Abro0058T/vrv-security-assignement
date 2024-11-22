// src/components/UserModal.js
import React, { useState, useEffect } from "react";
import "./UserModal.css";

function UserModal({ user, onClose, onSave, roles }) {
  const [name, setName] = useState(user ? user.name : "");
  const [role, setRole] = useState(user ? user.role : "");
  const [status, setStatus] = useState(user ? user.status : "Active");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: user ? user.id : Date.now(), name, role, status };
    onSave(newUser);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal-overlay">
        <div className="modal-container">
          <h2 className="modal-title">{user ? "Edit User" : "Add User"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <label className="block">Role</label>
              <select
                className="w-full border px-2 py-1"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                {roles.map((r) => (
                  <option key={r.id} value={r.name}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <label className="block">Status</label>
              <select
                className="w-full border px-2 py-1"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
