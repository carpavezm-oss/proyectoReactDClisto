import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="d-flex flex-column p-3 bg-dark text-white min-vh-100" style={{ width: '260px' }}>
      <Link to="/admin" className="text-white text-decoration-none mb-4 text-center">
        <h4 className="fw-bold mb-0">⚙️ Dashboard</h4>
        <small className="text-muted">Olores Que Matan Admin</small>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto gap-1">
        <li className="nav-item">
          <NavLink to="/admin" end className={({ isActive }) => `nav-link text-white ${isActive ? 'active bg-primary' : ''}`}>
            📊 Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/ordenes" className={({ isActive }) => `nav-link text-white ${isActive ? 'active bg-primary' : ''}`}>
            🛒 Órdenes / Boletas
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/productos" className={({ isActive }) => `nav-link text-white ${isActive ? 'active bg-primary' : ''}`}>
            📦 Productos
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/categorias" className={({ isActive }) => `nav-link text-white ${isActive ? 'active bg-primary' : ''}`}>
            🏷️ Categorías
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/usuarios" className={({ isActive }) => `nav-link text-white ${isActive ? 'active bg-primary' : ''}`}>
            👥 Usuarios
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/blog" className={({ isActive }) => `nav-link text-white ${isActive ? 'active bg-primary' : ''}`}>
            📖 Blog
          </NavLink>
        </li>
      </ul>
      <hr />
      <div className="d-grid gap-2">
        <Link to="/" className="btn btn-outline-light btn-sm">
          🏠 Volver a la Tienda
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;