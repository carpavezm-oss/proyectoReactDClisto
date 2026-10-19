import React, { useState } from 'react';
import AdminLayout from '../components/templates/AdminLayout';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import { getStoredCategories, addCategory, deleteCategory } from '../data/data';

const AdminCategoriesPage = () => {
  const [categories, setCategories] = useState(getStoredCategories());
  const [form, setForm] = useState({ nombre: '', slug: '', descripcion: '', imagen: '' });

  const handleAdd = (e) => {
    e.preventDefault();
    const updated = addCategory(form);
    setCategories(updated);
    setForm({ nombre: '', slug: '', descripcion: '', imagen: '' });
  };

  const handleDelete = (id) => {
    const updated = deleteCategory(id);
    setCategories(updated);
  };

  return (
    <AdminLayout>
      <h2 className="fw-bold mb-4">🏷️ Gestión de Categorías</h2>
      
      <div className="card shadow-sm border-0 p-4 mb-4">
        <h4 className="fw-bold mb-3">Nueva Categoría</h4>
        <form onSubmit={handleAdd} className="row g-3">
          <div className="col-md-4">
            <Input label="Nombre" value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} required />
          </div>
          <div className="col-md-4">
            <Input label="Genero (ej: hombre)" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} required />
          </div>
          <div className="col-md-4">
            <Input label="URL Imagen" value={form.imagen} onChange={e => setForm({...form, imagen: e.target.value})} required />
          </div>
          <div className="col-12">
            <Input label="Descripción" value={form.descripcion} onChange={e => setForm({...form, descripcion: e.target.value})} required />
          </div>
          <div className="col-12">
            <Button type="submit" variant="dark">Añadir Categoría</Button>
          </div>
        </form>
      </div>

      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Genero</th>
                <th>Descripción</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(c => (
                <tr key={c.id}>
                  <td className="fw-bold">{c.nombre}</td>
                  <td><code>{c.slug}</code></td>
                  <td>{c.descripcion}</td>
                  <td>
                    <Button variant="outline-danger" className="btn-sm" onClick={() => handleDelete(c.id)}>Eliminar</Button>
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

export default AdminCategoriesPage;