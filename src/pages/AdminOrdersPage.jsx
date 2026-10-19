import React, { useState } from 'react';
import AdminLayout from '../components/templates/AdminLayout';
import { getStoredOrders } from '../data/data';

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState(getStoredOrders());

  return (
    <AdminLayout>
      <h2 className="fw-bold mb-4">🛒 Gestión de Órdenes y Boletas</h2>
      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>ID Orden</th>
                <th>Cliente</th>
                <th>Correo</th>
                <th>Total</th>
                <th>Fecha</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id}>
                  <td className="fw-bold">{o.id}</td>
                  <td>{o.cliente}</td>
                  <td>{o.correo}</td>
                  <td className="fw-bold">${o.total.toLocaleString('es-CL')}</td>
                  <td>{o.fecha}</td>
                  <td><span className="badge bg-success">{o.estado}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminOrdersPage;