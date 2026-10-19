import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CategoryCard from '../../components/molecules/CategoryCard';

const mockCategory = {
  id: 1,
  nombre: 'Perfumes de Hombre',
  slug: 'hombre',
  descripcion: 'Fragancias intensas y masculinas.',
  imagen: 'https://via.placeholder.com/150'
};

describe('CategoryCard Component', () => {
  it('1. Renderiza el nombre de la categoría correctamente', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CategoryCard category={mockCategory} />
      </BrowserRouter>
    );
    expect(getByText('Perfumes de Hombre')).toBeDefined();
  });

  it('2. Renderiza la descripción de la categoría', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CategoryCard category={mockCategory} />
      </BrowserRouter>
    );
    expect(getByText('Fragancias intensas y masculinas.')).toBeDefined();
  });

  it('3. Contiene el enlace de exploración con la ruta correcta basada en el slug', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CategoryCard category={mockCategory} />
      </BrowserRouter>
    );
    const linkElement = getByText('Explorar');
    expect(linkElement.getAttribute('href')).toBe('/categorias?cat=hombre');
  });
});