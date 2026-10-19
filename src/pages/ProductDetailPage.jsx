import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';
import Button from '../components/atoms/Button';
import Badge from '../components/atoms/Badge';
import { CartContext } from '../context/CartContext';
import { getStoredProducts } from '../data/data';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const products = getStoredProducts();
  
  const product = products.find(p => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <MainLayout>
        <div className="alert alert-danger text-center my-5">
          <h3>Producto no encontrado</h3>
          <Link to="/productos" className="btn btn-dark mt-3">Volver al catálogo</Link>
        </div>
      </MainLayout>
    );
  }

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <MainLayout>
      <div className="row g-5 align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: '450px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-6">
          {product.esOferta && <Badge bg="danger" className="mb-2">OFERTA ESPECIAL</Badge>}
          <h1 className="fw-bold mb-3">{product.nombre}</h1>
          <p className="text-muted mb-4">{product.descripcion}</p>

          <div className="mb-4">
            {product.esOferta ? (
              <div>
                <span className="text-decoration-line-through text-muted me-3 fs-5">
                  ${product.precio.toLocaleString('es-CL')}
                </span>
                <span className="fw-bold fs-2 text-danger">
                  ${product.precioOferta.toLocaleString('es-CL')}
                </span>
              </div>
            ) : (
              <span className="fw-bold fs-2">${product.precio.toLocaleString('es-CL')}</span>
            )}
          </div>

          <p className="small text-muted mb-3">
            📦 Stock disponible: <strong className={product.stock < 5 ? 'text-danger' : 'text-success'}>{product.stock} unidades</strong>
          </p>

          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="input-group" style={{ width: '130px' }}>
              <button className="btn btn-outline-secondary" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span className="input-group-text bg-white">{quantity}</span>
              <button className="btn btn-outline-secondary" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <Button variant="dark" className="btn-lg px-4" onClick={handleAdd}>
              Añadir al Carrito 🛒
            </Button>
          </div>

          {added && (
            <div className="alert alert-success py-2">
              ¡Producto añadido con éxito al carrito! <Link to="/carrito" className="fw-bold alert-link">Ver carrito</Link>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetailPage;