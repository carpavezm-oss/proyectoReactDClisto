import React from 'react';
import AdminSideBar from '../organisms/AdminSideBar';

const AdminLayout = ({ children }) => {
  return (
    <div className="d-flex min-vh-100 bg-light">
      <AdminSideBar />
      <div className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
