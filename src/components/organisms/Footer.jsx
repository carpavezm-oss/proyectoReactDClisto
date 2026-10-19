import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mi-footer bg-dark pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold text-uppercase mb-3">Olores Que Matan</h5>
            <p className="small">
              Perfumería y fragancias exclusivas diseñadas para expresar tu verdadera esencia en cada momento de tu vida.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold text-uppercase mb-3">Navegación</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none small">Inicio</Link></li>
              <li><Link to="/productos" className="text-decoration-none small">Productos</Link></li>
              <li><Link to="/categorias" className="text-decoration-none small">Categorías</Link></li>
              <li><Link to="/nosotros" className="text-decoration-none small">Nosotros</Link></li>
              <li><Link to="/admin" className="text-warning text-decoration-none small fw-bold">⚙️ Panel Administrativo</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold text-uppercase mb-3">Atención al Cliente</h5>
            <p className="small mb-1">📧 contacto@oloresquematan.cl</p>
            <p className="small mb-1">📞 +56 9 1234 5678</p>
            <p className="small">📍 Santiago, Chile</p>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
        <div className="text-center small">
          © 2026 Olores que matan. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;