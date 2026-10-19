import React, { useState } from 'react';
import AdminLayout from '../components/templates/AdminLayout';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import { getStoredProducts, addProduct, deleteProduct } from '../data/data';

const AdminProductsPage = () => {
  const [products, setProducts] = useState(getStoredProducts());
  const [form, setForm] = useState({ nombre: '', categoria: 'hombre', precio: '', stock: '', descripcion: '', imagen: '' });

  const handleAdd = (e) => {
    e.preventDefault();
    const updated = addProduct({
      ...form,
      precio: Number(form.precio),
      stock: Number(form.stock),
      esOferta: false,
      precioOferta: null
    });
    setProducts(updated);
    setForm({ nombre: '', categoria: 'hombre', precio: '', stock: '', descripcion: '', imagen: '' });
  };

  const handleDelete = (id) => {
    const updated = deleteProduct(id);
    setProducts(updated);
  };

  return (
    <AdminLayout>
      <h2 className="fw-bold mb-4">📦 Gestión de Productos</h2>
      
      <div className="card shadow-sm border-0 p-4 mb-4">
        <h4 className="fw-bold mb-3">Añadir Nuevo Producto</h4>
        <form onSubmit={handleAdd} className="row g-3">
          <div className="col-md-4">
            <Input label="Nombre" value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} required />
          </div>
          <div className="col-md-4">
            <label className="form-label fw-bold">Categoría</label>
            <select className="form-select" value={form.categoria} onChange={e => setForm({...form, categoria: e.target.value})}>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
              <option value="unisex">Unisex</option>
              <option value="ofertas">Ofertas</option>
            </select>
          </div>
          <div className="col-md-4">
            <Input label="Precio ($)" type="number" value={form.precio} onChange={e => setForm({...form, precio: e.target.value})} required />
          </div>
          <div className="col-md-4">
            <Input label="Stock" type="number" value={form.stock} onChange={e => setForm({...form, stock: e.target.value})} required />
          </div>
          <div className="col-md-8">
            <Input label="URL Imagen" value={form.imagen} onChange={e => setForm({...form, imagen: e.target.value})} required />
          </div>
          <div className="col-12">
            <Input label="Descripción" value={form.descripcion} onChange={e => setForm({...form, descripcion: e.target.value})} required />
          </div>
          <div className="col-12">
            <Button type="submit" variant="dark">Guardar Producto</Button>
          </div>
        </form>
      </div>

      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id}>
                  <td><img src={p.imagen} alt="" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /></td>
                  <td className="fw-bold">{p.nombre}</td>
                  <td>{p.categoria}</td>
                  <td>${p.precio.toLocaleString('es-CL')}</td>
                  <td>{p.stock}</td>
                  <td>
                    <Button variant="outline-danger" className="btn-sm" onClick={() => handleDelete(p.id)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProductsPage;