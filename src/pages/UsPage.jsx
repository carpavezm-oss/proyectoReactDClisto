import React from 'react';
import MainLayout from '../components/templates/MainLayout';

const UsPage = () => {
  return (
    <MainLayout>
      <div className="row align-items-center g-5 py-4">
        <div className="col-md-6">
          <h1 className="fw-bold mb-3">Sobre Olores Que Matan</h1>
          <p className="lead text-muted">
            Nacimos en Santiago con la misión de democratizar la perfumería de alta gama y ofrecer fragancias con carácter, elegancia y durabilidad insuperable.
          </p>
          <p className="text-secondary">
            Cada perfume en nuestro catálogo es seleccionado rigurosamente para garantizar notas olfativas complejas que se adaptan a la piel de nuestros clientes, brindando confianza y distinción en cada ocasión.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600" alt="Perfumería" className="img-fluid rounded shadow" />
        </div>
      </div>
    </MainLayout>
  );
};

export default UsPage;