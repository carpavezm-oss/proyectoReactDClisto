import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../../components/molecules/ProductCard';

const mockProduct = {
  id: 1,
  nombre: 'Vogue Night',
  descripcion: 'Una fragancia intemporal con notas de madera.',
  precio: 29990,
  precioOferta: 24990,
  esOferta: true,
  imagen: 'https://via.placeholder.com/150'
};

describe('ProductCard Component', () => {
  it('1. Renderiza el nombre del producto correctamente', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ProductCard product={mockProduct} onAddToCart={() => {}} />
      </BrowserRouter>
    );
    expect(getByText('Vogue Night')).toBeDefined();
  });

  it('2. Muestra la etiqueta de oferta cuando esOferta es true', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ProductCard product={mockProduct} onAddToCart={() => {}} />
      </BrowserRouter>
    );
    expect(getByText('OFERTA')).toBeDefined();
  });

  it('3. Muestra el precio formateado correctamente', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ProductCard product={mockProduct} onAddToCart={() => {}} />
      </BrowserRouter>
    );

    expect(getByText('$24.990')).toBeDefined();
  });
});
