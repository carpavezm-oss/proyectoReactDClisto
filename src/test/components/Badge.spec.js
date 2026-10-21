import React from 'react';
import { render } from '@testing-library/react';
import Badge from '../../components/atoms/Badge';

describe('Badge Component', () => {
  it('1. Renderiza correctamente el texto o contenido hijo', () => {
    const { getByText } = render(<Badge>OFERTA</Badge>);
    expect(getByText('OFERTA')).toBeDefined();
  });

  it('2. Aplica la variante de color bg de Bootstrap correctamente', () => {
    const { container } = render(<Badge bg="danger">NUEVO</Badge>);
    const badgeElement = container.querySelector('span');
    expect(badgeElement.className).toContain('bg-danger');
  });

  it('3. Aplica clases CSS adicionales personalizadas', () => {
    const { container } = render(<Badge className="custom-class">STOCK</Badge>);
    const badgeElement = container.querySelector('span');
    expect(badgeElement.className).toContain('custom-class');
  });
});