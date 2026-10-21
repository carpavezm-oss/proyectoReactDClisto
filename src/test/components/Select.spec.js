import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select from '../../components/atoms/Select';

const mockOptions = [
  { value: 'hombre', label: 'Hombre' },
  { value: 'mujer', label: 'Mujer' }
];

describe('Select Component', () => {
  it('1. Renderiza la etiqueta label correctamente', () => {
    const { getByText } = render(<Select label="Categoría" options={mockOptions} />);
    expect(getByText('Categoría')).toBeDefined();
  });

  it('2. Renderiza todas las opciones pasadas como prop', () => {
    const { getByText } = render(<Select options={mockOptions} />);
    expect(getByText('Hombre')).toBeDefined();
    expect(getByText('Mujer')).toBeDefined();
  });

  it('3. Dispara el evento onChange al seleccionar una opción', () => {
    let selectedValue = '';
    const handleChange = (e) => { selectedValue = e.target.value; };
    const { container } = render(<Select options={mockOptions} onChange={handleChange} />);
    
    const selectElement = container.querySelector('select');
    fireEvent.change(selectElement, { target: { value: 'mujer' } });
    expect(selectedValue).toBe('mujer');
  });
});