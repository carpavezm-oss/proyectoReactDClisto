// src/pages/OrderErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';

const OrderErrorPage = () => {
  return (
    <MainLayout>
      <div className="text-center py-5">
        <div className="display-1 text-danger mb-3">❌</div>
        <h1 className="fw-bold mb-3">¡Error en el Pago!</h1>
        <p className="text-muted mb-4">No pudimos procesar tu transacción con la tarjeta indicada. Por favor, intenta nuevamente.</p>
        <Link to="/checkout" className="btn btn-primary btn-lg">Volver al Checkout</Link>
      </div>
    </MainLayout>
  );
};

export default OrderErrorPage; 
