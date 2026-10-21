// src/components/templates/AdminLayout.jsx
import React, { useState } from 'react';
import AdminSideBar from '../organisms/AdminSideBar';
import Button from '../atoms/Button';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="d-flex min-vh-100 bg-light flex-column flex-md-row">
      

      <div className="d-md-none bg-dark text-white p-3 d-flex justify-content-between align-items-center shadow-sm">
        <span className="fw-bold fs-6">⚡ Panel Admin</span>
        <Button 
          variant="outline-light" 
          className="btn-sm" 
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? '✕ Cerrar' : '☰ Menú'}
        </Button>
      </div>

      <div className={`d-md-block ${sidebarOpen ? 'block' : 'd-none'} bg-dark`} style={{ minWidth: '260px' }}>
        <AdminSideBar />
      </div>

      <div className="flex-grow-1 p-3 p-md-4" style={{ overflowY: 'auto', width: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
