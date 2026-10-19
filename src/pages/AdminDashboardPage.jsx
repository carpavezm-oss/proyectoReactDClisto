import React from 'react';
import AdminLayout from '../components/templates/AdminLayout';
import AdminStatCard from '../components/molecules/AdminStatCard';
import { getStoredProducts, getStoredOrders, getStoredUsers } from '../data/data';

const AdminDashboardPage = () => {
  const products = getStoredProducts();
  const orders = getStoredOrders();
  const users = getStoredUsers();

  const totalSales = orders.reduce((acc, o) => acc + o.total, 0);

  return (
    <AdminLayout>
      <h2 className="fw-bold mb-4">📊 Dashboard Administrativo</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
        <div className="col">
          <AdminStatCard title="Ventas Totales" value={`$${totalSales.toLocaleString('es-CL')}`} bg="success" icon="💰" />
        </div>
        <div className="col">
          <AdminStatCard title="Órdenes Registradas" value={orders.length} bg="primary" icon="🛒" />
        </div>
        <div className="col">
          <AdminStatCard title="Productos en Catálogo" value={products.length} bg="dark" icon="📦" />
        </div>
        <div className="col">
          <AdminStatCard title="Usuarios Totales" value={users.length} bg="secondary" icon="👥" />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboardPage;