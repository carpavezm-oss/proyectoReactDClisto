import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../components/organisms/Navbar';
import { CartContext } from '../../context/CartContext';

const mockCartContextValue = {
  cartCount: 2,
  cartTotal: 45980
};

describe('Navbar Component', () => {
  it('1. Renderiza el título o nombre de la marca correctamente', () => {
    const { getByText } = render(
      <CartContext.Provider value={mockCartContextValue}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </CartContext.Provider>
    );
    expect(getByText('🌹 Olores Que Matan')).toBeDefined();
  });

  it('2. Muestra correctamente la cantidad y el total del carrito de compras', () => {
    const { getByText } = render(
      <CartContext.Provider value={mockCartContextValue}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </CartContext.Provider>
    );

    expect(getByText('$45.980 (2)')).toBeDefined();
  });

  it('3. Contiene los enlaces de navegación principales (Home, Categorías, Ofertas, etc.)', () => {
    const { getByText } = render(
      <CartContext.Provider value={mockCartContextValue}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </CartContext.Provider>
    );
    expect(getByText('Home')).toBeDefined();
    expect(getByText('Categorías')).toBeDefined();
    expect(getByText('Ofertas')).toBeDefined();
    expect(getByText('Blog')).toBeDefined();
  });
});
