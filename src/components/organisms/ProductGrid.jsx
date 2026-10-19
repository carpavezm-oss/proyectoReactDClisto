import React from 'react';
import ProductCard from '../molecules/ProductCard';

const ProductGrid = ({ products = [], onAddToCart }) => {
  if (products.length === 0) {
    return (
      <div className="alert alert-info text-center my-4">
        No se encontraron productos disponibles en esta sección.
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {products.map((product) => (
        <div className="col" key={product.id}>
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;