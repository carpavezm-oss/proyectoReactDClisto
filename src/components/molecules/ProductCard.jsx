import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import Badge from '../atoms/Badge';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="position-relative">
        <img
          src={product.imagen}
          className="card-img-top p-3"
          alt={product.nombre}
          style={{ height: '220px', objectFit: 'contain' }}
        />
        {product.esOferta && (
          <div className="position-absolute top-0 start-0 m-2">
            <Badge bg="danger">OFERTA</Badge>
          </div>
        )}
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{product.nombre}</h5>
        <p className="card-text text-muted small flex-grow-1">
          {product.descripcion.length > 70
            ? `${product.descripcion.substring(0, 70)}...`
            : product.descripcion}
        </p>
        <div className="my-2">
          {product.esOferta ? (
            <div>
              <span className="text-decoration-line-through text-muted me-2 small">
                ${product.precio.toLocaleString('es-CL')}
              </span>
              <span className="fw-bold fs-5 text-danger">
                ${product.precioOferta.toLocaleString('es-CL')}
              </span>
            </div>
          ) : (
            <span className="fw-bold fs-5">${product.precio.toLocaleString('es-CL')}</span>
          )}
        </div>
        <div className="d-flex gap-2 mt-auto">
          <Link to={`/producto/${product.id}`} className="btn btn-outline-dark btn-sm flex-grow-1">
            Ver detalle
          </Link>
          <Button variant="dark" className="btn-sm" onClick={() => onAddToCart(product)}>
            Añadir 🛒
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;