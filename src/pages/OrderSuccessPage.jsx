// src/pages/OrderSuccessPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';

const OrderSuccessPage = () => {
  return (
    <MainLayout>
      <div className="text-center py-5">
        <div className="display-1 text-success mb-3">✅</div>
        <h1 className="fw-bold mb-3">¡Compra Exitosiza!</h1>
        <p className="text-muted mb-4">Tu pedido ha sido procesado correctamente y guardado en el sistema.</p>
        <Link to="/" className="btn btn-dark btn-lg">Volver al Inicio</Link>
      </div>
    </MainLayout>
  );
};

export default OrderSuccessPage;