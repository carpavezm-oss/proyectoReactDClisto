// src/components/templates/MainLayout.jsx
import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 py-3 py-md-4">
        {/* container-fluid en móviles con padding y container en pantallas medianas */}
        <div className="container-fluid container-md px-3">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;