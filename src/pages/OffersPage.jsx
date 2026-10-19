import React, { useContext } from 'react';
import MainLayout from '../components/templates/MainLayout';
import ProductGrid from '../components/organisms/ProductGrid';
import { CartContext } from '../context/CartContext';
import { getStoredProducts } from '../data/data';

const OffersPage = () => {
  const { addToCart } = useContext(CartContext);
  const products = getStoredProducts();
  const offerProducts = products.filter(p => p.esOferta);

  return (
    <MainLayout>
      <div className="bg-danger text-white p-4 rounded-3 mb-4 shadow-sm">
        <h2 className="fw-bold mb-1">🔥 Ofertas Especiales</h2>
        <p className="mb-0">Aprovecha descuentos exclusivos por tiempo limitado en nuestras mejores fragancias.</p>
      </div>
      <ProductGrid products={offerProducts} onAddToCart={addToCart} />
    </MainLayout>
  );
};

export default OffersPage;