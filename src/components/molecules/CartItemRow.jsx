import React from 'react';
import Button from '../atoms/Button';

const CartItemRow = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <tr>
      <td>
        <img
          src={item.imagen}
          alt={item.nombre}
          style={{ width: '50px', height: '50px', objectFit: 'contain' }}
        />
      </td>
      <td className="align-middle fw-bold">{item.nombre}</td>
      <td className="align-middle">${item.precioFinal.toLocaleString('es-CL')}</td>
      <td className="align-middle" style={{ width: '130px' }}>
        <div className="input-group input-group-sm">
          <button
            className="btn btn-outline-secondary"
            onClick={() => onUpdateQuantity(item.id, item.cantidad - 1)}
          >
            -
          </button>
          <span className="input-group-text bg-white px-3">{item.cantidad}</span>
          <button
            className="btn btn-outline-secondary"
            onClick={() => onUpdateQuantity(item.id, item.cantidad + 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="align-middle fw-bold">
        ${(item.precioFinal * item.cantidad).toLocaleString('es-CL')}
      </td>
      <td className="align-middle text-end">
        <Button variant="outline-danger" className="btn-sm" onClick={() => onRemove(item.id)}>
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default CartItemRow;