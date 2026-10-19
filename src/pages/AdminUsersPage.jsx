import React, { useState } from 'react';
import AdminLayout from '../components/templates/AdminLayout';
import Button from '../components/atoms/Button';
import { getStoredUsers, deleteUser } from '../data/data';

const AdminUsersPage = () => {
  const [users, setUsers] = useState(getStoredUsers());

  const handleDelete = (id) => {
    const updated = deleteUser(id);
    setUsers(updated);
  };

  return (
    <AdminLayout>
      <h2 className="fw-bold mb-4">👥 Gestión de Usuarios</h2>
      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td className="fw-bold">{u.nombre}</td>
                  <td>{u.email}</td>
                  <td><span className="badge bg-secondary">{u.rol}</span></td>
                  <td><span className="badge bg-success">{u.estado}</span></td>
                  <td>
                    <Button variant="outline-danger" className="btn-sm" onClick={() => handleDelete(u.id)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUsersPage;