import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CartItemRow from '../../components/molecules/CartItemRow';

const mockItem = {
  id: 1,
  nombre: 'Vogue Night',
  precioFinal: 25000,
  cantidad: 2,
  imagen: 'https://via.placeholder.com/50'
};

describe('CartItemRow Component', () => {
  it('1. Renderiza el nombre del producto y su precio unitario', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <CartItemRow item={mockItem} onUpdateQuantity={() => {}} onRemove={() => {}} />
        </tbody>
      </table>
    );
    expect(getByText('Vogue Night')).toBeDefined();
    expect(getByText('$25.000')).toBeDefined();
  });

  it('2. Muestra correctamente la cantidad actual del producto', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <CartItemRow item={mockItem} onUpdateQuantity={() => {}} onRemove={() => {}} />
        </tbody>
      </table>
    );
    expect(getByText('2')).toBeDefined();
  });

  it('3. Calcula y muestra el subtotal correctamente (precio * cantidad)', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <CartItemRow item={mockItem} onUpdateQuantity={() => {}} onRemove={() => {}} />
        </tbody>
      </table>
    );
    // 25000 * 2 = 50000
    expect(getByText('$50.000')).toBeDefined();
  });
});