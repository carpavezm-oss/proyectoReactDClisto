import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';
import CartItemRow from '../components/molecules/CartItemRow';
import Button from '../components/atoms/Button';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, cartTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <MainLayout>
        <div className="text-center py-5">
          <h2 className="fw-bold mb-3">Tu carrito está vacío</h2>
          <p className="text-muted mb-4">¿Aún no decides qué fragancia llevar? Explora nuestro catálogo.</p>
          <Link to="/productos" className="btn btn-primary btn-lg">Ver Catálogo</Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h2 className="fw-bold mb-4">🛒 Carrito de Compras</h2>
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <CartItemRow
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <Button variant="outline-danger" className="btn-sm mt-2" onClick={clearCart}>
            Vaciar Carrito
          </Button>
        </div>
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 p-4">
            <h4 className="fw-bold mb-3">Resumen de Compra</h4>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Subtotal</span>
              <span>${cartTotal.toLocaleString('es-CL')}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span className="text-muted">Envío</span>
              <span className="text-success fw-bold">Gratis</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-4 fs-5 fw-bold">
              <span>Total</span>
              <span className="text-primary">${cartTotal.toLocaleString('es-CL')}</span>
            </div>
            <Link to="/checkout" className="btn btn-primary btn-lg w-100 fw-bold">
              Proceder al Pago 💳
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CartPage;