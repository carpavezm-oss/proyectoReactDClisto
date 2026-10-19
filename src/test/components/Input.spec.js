import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../../components/atoms/Input';

describe('Input Component', () => {
  it('1. Renderiza la etiqueta label cuando es proporcionada', () => {
    const { getByText } = render(<Input label="Correo Electrónico" name="email" />);
    expect(getByText('Correo Electrónico')).toBeDefined();
  });

  it('2. Actualiza el valor y dispara el evento onChange', () => {
    let value = '';
    const handleChange = (e) => { value = e.target.value; };
    const { container } = render(<Input name="test" value={value} onChange={handleChange} />);
    
    const inputElement = container.querySelector('input');
    fireEvent.change(inputElement, { target: { value: 'Nuevo valor' } });
    expect(value).toBe('Nuevo valor');
  });

  it('3. Muestra la clase de error y mensaje cuando se pasa la prop error', () => {
    const { getByText, container } = render(<Input error="Campo requerido" />);
    const inputElement = container.querySelector('input');
    
    expect(inputElement.className).toContain('is-invalid');
    expect(getByText('Campo requerido')).toBeDefined();
  });
});