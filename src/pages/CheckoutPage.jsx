import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import { CartContext } from '../context/CartContext';
import { addOrder } from '../data/data';

const CheckoutPage = () => {
  const { cart, cartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    direccion: '',
    telefono: '',
    tarjeta: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación de pasarela de pago: Si el número de tarjeta termina en '0000', simulamos error de pago
    if (formData.tarjeta.endsWith('0000')) {
      navigate('/order-error');
      return;
    }

    const orderData = {
      cliente: formData.nombre,
      correo: formData.correo,
      direccion: formData.direccion,
      telefono: formData.telefono,
      total: cartTotal,
      estado: 'Completado',
      items: cart.map(item => ({
        id: item.id,
        nombre: item.nombre,
        precio: item.precioFinal,
        cantidad: item.cantidad,
        subtotal: item.precioFinal * item.cantidad
      }))
    };

    addOrder(orderData);
    clearCart();
    navigate('/order-success');
  };

  return (
    <MainLayout>
      <h2 className="fw-bold mb-4">💳 Finalizar Compra</h2>
      <div className="row g-5">
        <div className="col-md-7">
          <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0">
            <h4 className="fw-bold mb-3">Datos de Envío y Pago</h4>
            <Input label="Nombre Completo" name="nombre" value={formData.nombre} onChange={handleChange} required />
            <Input label="Correo Electrónico" type="email" name="correo" value={formData.correo} onChange={handleChange} required />
            <Input label="Dirección de Despacho" name="direccion" value={formData.direccion} onChange={handleChange} required />
            <Input label="Teléfono de Contacto" name="telefono" value={formData.telefono} onChange={handleChange} required />
            <Input label="Número de Tarjeta (Prueba terminada en 0000 para simular error)" name="tarjeta" placeholder="4532-****-****-****" value={formData.tarjeta} onChange={handleChange} required />
            <Button type="submit" variant="primary" className="btn-lg w-100 mt-3">
              Pagar ${cartTotal.toLocaleString('es-CL')}
            </Button>
          </form>
        </div>
        <div className="col-md-5">
          <div className="card shadow-sm border-0 p-4 bg-light">
            <h4 className="fw-bold mb-3">Resumen de tu Pedido</h4>
            <ul className="list-group list-group-flush mb-3">
              {cart.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                  <div>
                    <h6 className="my-0">{item.nombre}</h6>
                    <small className="text-muted">Cant: {item.cantidad}</small>
                  </div>
                  <span>${(item.precioFinal * item.cantidad).toLocaleString('es-CL')}</span>
                </li>
              ))}
            </ul>
            <hr />
            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total a Pagar:</span>
              <span className="text-primary">${cartTotal.toLocaleString('es-CL')}</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CheckoutPage;