import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';
import ProductGrid from '../components/organisms/ProductGrid';
import { CartContext } from '../context/CartContext';
import { getStoredProducts, getStoredCategories } from '../data/data';

const ProductsPage = () => {
  const { addToCart } = useContext(CartContext);
  const products = getStoredProducts();
  const categories = getStoredCategories();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchParam = queryParams.get('search') || '';
  const catParam = queryParams.get('cat') || '';

  const [selectedCat, setSelectedCat] = useState(catParam);
  const [searchTerm, setSearchTerm] = useState(searchParam);
  const [sortBy, setSortBy] = useState('default');

let filtered = products.filter(p => {
    const matchesCat = selectedCat 
      ? (selectedCat === 'ofertas' ? p.esOferta : p.categoria === selectedCat) 
      : true;
    const matchesSearch = searchTerm
      ? p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesCat && matchesSearch;
  });

  if (sortBy === 'asc') {
    filtered.sort((a, b) => (a.esOferta ? a.precioOferta : a.precio) - (b.esOferta ? b.precioOferta : b.precio));
  } else if (sortBy === 'desc') {
    filtered.sort((a, b) => (b.esOferta ? b.precioOferta : b.precio) - (a.esOferta ? a.precioOferta : a.precio));
  }

  return (
    <MainLayout>
      <h2 className="fw-bold mb-4">Catálogo de Fragancias</h2>
      
      <div className="row mb-4 g-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={selectedCat}
            onChange={(e) => setSelectedCat(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categories.map(c => (
              <option key={c.id} value={c.slug}>{c.nombre}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Ordenar por...</option>
            <option value="asc">Precio: Menor a Mayor</option>
            <option value="desc">Precio: Mayor a Menor</option>
          </select>
        </div>
      </div>

      <ProductGrid products={filtered} onAddToCart={addToCart} />
    </MainLayout>
  );
};

export default ProductsPage;