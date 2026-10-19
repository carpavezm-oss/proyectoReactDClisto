import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <div className="card text-white overflow-hidden shadow-sm h-100 border-0">
      <img
        src={category.imagen}
        className="card-img"
        alt={category.nombre}
        style={{ height: '200px', objectFit: 'cover', filter: 'brightness(0.65)' }}
      />
      <div className="card-img-overlay d-flex flex-column justify-content-end p-3">
        <h4 className="card-title fw-bold mb-1">{category.nombre}</h4>
        <p className="card-text small mb-2">{category.descripcion}</p>
        <Link to={`/productos?cat=${category.slug}`} className="btn btn-sm btn-light w-100 fw-bold">
          Ver Mas
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;