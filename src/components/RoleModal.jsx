// src/components/RoleModal.js
import React, { useState } from "react";

function RoleModal({ role, onClose, onSave }) {
  const [name, setName] = useState(role ? role.name : "");
  const [permissions, setPermissions] = useState(role ? role.permissions : []);
  const allPermissions = ["Read", "Write", "Delete"];

  const handleCheckboxChange = (permission) => {
    if (permissions.includes(permission)) {
      setPermissions(permissions.filter((perm) => perm !== permission));
    } else {
      setPermissions([...permissions, permission]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRole = { id: role ? role.id : Date.now(), name, permissions };
    onSave(newRole);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal-overlay">
        <div className="modal-container">
          <h2 className="modal-title">{role ? "Edit Role" : "Add Role"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="block">Role Name</label>
              <input
                className="w-full border px-2 py-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Permissions</label>
              {allPermissions.map((permission) => (
                <label
                  key={permission}
                  className="inline-flex items-center mr-2"
                >
                  <input
                    type="checkbox"
                    checked={permissions.includes(permission)}
                    onChange={() => handleCheckboxChange(permission)}
                  />
                  <span className="ml-1">{permission}</span>
                </label>
              ))}
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
                className="bg-green-500 text-white px-4 py-2 rounded"
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

export default RoleModal;
