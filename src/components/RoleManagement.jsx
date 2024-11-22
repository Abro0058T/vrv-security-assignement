// src/components/RoleManagement.js
import React, { useState, useEffect } from "react";
import "./RoleManagement.css";
import RoleModal from "./RoleModal.jsx";
import { FaEdit, FaTrash } from "react-icons/fa";

function RoleManagement({ roles, setRoles, users, setUsers }) {
  const [showModal, setShowModal] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);

  useEffect(() => {
    localStorage.setItem("roles", JSON.stringify(roles));
  }, [roles]);

  const addRole = (role) => {
    setRoles([...roles, { id: Date.now(), ...role }]);
  };

  const editRole = (updatedRole) => {
    setRoles(
      roles.map((role) => (role.id === updatedRole.id ? updatedRole : role))
    );
  };

  const deleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));

    const roleToDelete = roles.find((role) => role.id === id);
    if (roleToDelete) {
      const updatedUsers = users.map((user) =>
        user.role === roleToDelete.name ? { ...user, role: "" } : user
      );
      setUsers(updatedUsers);
    }
  };

  const openModal = (role = null) => {
    setCurrentRole(role);
    setShowModal(true);
  };

  return (
    <div className="container">
      <h1 className="title">Role Management</h1>
      <button className="add-button" onClick={() => openModal()}>
        Add Role
      </button>
      <table className="table">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Role Name</th>
            <th className="py-2 px-4 border-b">Permissions</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td className="py-2 px-4 border-b">{role.name}</td>
              <td className="py-2 px-4 border-b">
                {role.permissions.join(", ")}
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => openModal(role)}
                  className="text-yellow-500 mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => deleteRole(role.id)}
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
        <RoleModal
          role={currentRole}
          onClose={() => setShowModal(false)}
          onSave={(role) => {
            currentRole ? editRole(role) : addRole(role);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

export default RoleManagement;
