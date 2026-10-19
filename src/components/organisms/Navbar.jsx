import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
  const { cartCount, cartTotal } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/productos?search=${encodeURIComponent(searchQuery)}`);
      setIsOpen(false);
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm p-lg-0">
      <div className="container">
        <Link className="navbar-brand fw-bold text-uppercase tracking-wider" to="/" onClick={closeMenu}>
          Olores Que Matan
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="mainNavbar"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNavbar">
          
          {/* ----- FORMULARIO DE BÚSQUEDA CORREGIDO ----- */}
          {/* Se eliminó w-50 y mx-auto. Ahora usa márgenes responsivos y ancho completo en móvil */}
          <form className="d-flex mt-3 mt-lg-0 ms-lg-4 me-lg-auto col-12 col-lg-5" onSubmit={handleSearch}>
            {/* Input Group para pegar input y botón */}
            <div className="input-group w-100">
              <input
                className="form-control"
                type="search"
                placeholder="Buscar fragancia, notas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Buscar"
              />
              <button className="btn btn-outline-light" type="submit">
                Buscar
              </button>
            </div>
          </form>
          {/* ------------------------------------------- */}

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-1 gap-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categorias" onClick={closeMenu}>Categorías</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ofertas" onClick={closeMenu}>Ofertas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros" onClick={closeMenu}>Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog" onClick={closeMenu}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto" onClick={closeMenu}>Contacto</Link>
            </li>
            
            {/* Botones de sesión y registro alineados */}
            <div className="d-flex flex-column flex-lg-row gap-2 ms-lg-2 my-2 my-lg-0 w-100 w-lg-auto">
                <li className="nav-item">
                  <Link className="btn btn-outline-light btn-sm w-100" to="/login" onClick={closeMenu}>
                    Iniciar Sesión
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary btn-sm w-100" to="/registro" onClick={closeMenu}>
                    Crear Cuenta
                  </Link>
                </li>
            </div>

            {/* Carrito corregido para ocupar ancho completo en móvil */}
            <li className="nav-item mt-2 mt-lg-0 w-100 w-lg-auto ms-lg-3">
              <Link className="btn btn-success fw-bold d-flex align-items-center justify-content-center gap-1 w-100" to="/carrito" onClick={closeMenu}>
                <span>🛒 Carrito</span>
                <span className="badge bg-white text-dark ms-1">
                  ${cartTotal.toLocaleString('es-CL')} ({cartCount})
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;