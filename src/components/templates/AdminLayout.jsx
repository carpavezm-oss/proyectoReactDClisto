import React from 'react';
import AdminSidebar from '../organisms/AdminSidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="d-flex min-vh-100 bg-light">
      <AdminSidebar />
      <div className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;