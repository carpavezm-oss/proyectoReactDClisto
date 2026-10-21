import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BlogCard from '../../components/molecules/BlogCard';

const mockBlog = {
  id: 1,
  titulo: 'Cómo elegir tu perfume ideal',
  resumen: 'Consejos prácticos para encontrar tu fragancia según tu pH.',
  fecha: '2026-03-01',
  autor: 'Admin',
  imagen: 'https://via.placeholder.com/150'
};

describe('BlogCard Component', () => {
  it('1. Renderiza el título del artículo de blog correctamente', () => {
    const { getByText } = render(
      <BrowserRouter>
        <BlogCard blog={mockBlog} />
      </BrowserRouter>
    );
    expect(getByText('Cómo elegir tu perfume ideal')).toBeDefined();
  });

  it('2. Muestra la fecha y el autor del artículo', () => {
    const { getByText } = render(
      <BrowserRouter>
        <BlogCard blog={mockBlog} />
      </BrowserRouter>
    );
    expect(getByText('2026-03-01 | Admin')).toBeDefined();
  });

  it('3. Contiene el enlace para leer el artículo completo con la ruta correcta', () => {
    const { getByText } = render(
      <BrowserRouter>
        <BlogCard blog={mockBlog} />
      </BrowserRouter>
    );
    const linkElement = getByText('Leer artículo completo');
    expect(linkElement.getAttribute('href')).toBe('/blog/1');
  });
});