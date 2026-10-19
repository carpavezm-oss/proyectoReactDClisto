import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';
import ProductGrid from '../components/organisms/ProductGrid';
import CategoryCard from '../components/molecules/CategoryCard';
import BlogCard from '../components/molecules/BlogCard';
import { CartContext } from '../context/CartContext';
import { getStoredProducts, getStoredCategories, getStoredBlogs } from '../data/data';

const HomePage = () => {
  const { addToCart } = useContext(CartContext);
  const products = getStoredProducts();
  const categories = getStoredCategories();
  const blogs = getStoredBlogs();

  const featuredProducts = products.filter(p => p.esOferta).slice(0, 4);

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="p-5 mb-5 bg-dark text-white rounded-3 shadow-sm position-relative overflow-hidden">
        <div className="container py-5 position-relative z-1">
          <h1 className="display-4 fw-bold text-uppercase">Olores Que Matan</h1>
          <p className="col-md-8 fs-4 text-muted">
            Descubre nuestra exclusiva colección de fragancias de alta gama diseñadas para dejar una huella inolvidable.
          </p>
          <div className="d-flex gap-3 mt-4">
            <Link to="/productos" className="btn btn-primary btn-lg fw-bold">
              Ver Catálogo Completo
            </Link>
            <Link to="/ofertas" className="btn btn-outline-light btn-lg">
              Ver Ofertas 🔥
            </Link>
          </div>

        </div>

      </div>

      {/* Categorías Destacadas */}
      <section className="mb-5">
        <h2 className="fw-bold mb-4 text-center">Explora por Categorías</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {categories.map(cat => (
            <div className="col" key={cat.id}>
              <CategoryCard category={cat} />
            </div>
          ))}
        </div>
      </section>

      {/* Productos en Oferta */}
      <section className="mb-5 py-4 bg-light rounded-3 px-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0">Ofertas Destacadas</h2>
          <Link to="/ofertas" className="btn btn-outline-dark btn-sm">Ver todas</Link>
        </div>
        <ProductGrid products={featuredProducts} onAddToCart={addToCart} />
      </section>

      {/* Blog / Consejos */}
      <section className="mb-4">
        <h2 className="fw-bold mb-4 text-center">Consejos de Perfumería</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {blogs.map(blog => (
            <div className="col" key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;