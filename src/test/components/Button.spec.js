import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../components/atoms/Button';

describe('Button Component', () => {
  it('1. Renderiza correctamente el texto o contenido hijo', () => {
    const { getByText } = render(<Button>Comprar</Button>);
    expect(getByText('Comprar')).toBeDefined();
  });

  it('2. Aplica la variante de Bootstrap correctamente (ej: variant="danger")', () => {
    const { container } = render(<Button variant="danger">Eliminar</Button>);
    const buttonElement = container.querySelector('button');
    expect(buttonElement.className).toContain('btn-danger');
  });

  it('3. Ejecuta el evento onClick al hacer clic', () => {
    let clicked = false;
    const handleClick = () => { clicked = true; };
    const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
    
    fireEvent.click(getByText('Click Me'));
    expect(clicked).toBe(true);
  });
});