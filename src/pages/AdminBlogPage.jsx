import React, { useState } from 'react';
import AdminLayout from '../components/templates/AdminLayout';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import { getStoredBlogs } from '../data/data';

const AdminBlogPage = () => {
  const [blogs, setBlogs] = useState(getStoredBlogs());
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    titulo: '',
    resumen: '',
    contenido: '',
    autor: 'Equipo Olores Que Matan',
    imagen: ''
  });

  const handleAdd = (e) => {
    e.preventDefault();
    setError('');

    // Validar que ningún campo de texto esté vacío o tenga solo espacios en blanco
    if (
      !form.titulo.trim() || 
      !form.resumen.trim() || 
      !form.contenido.trim() || 
      !form.autor.trim() || 
      !form.imagen.trim()
    ) {
      setError('Por favor, completa todos los campos correctamente. No se aceptan valores vacíos o solo con espacios.');
      return;
    }

    const newBlog = {
      titulo: form.titulo.trim(),
      resumen: form.resumen.trim(),
      contenido: form.contenido.trim(),
      autor: form.autor.trim(),
      imagen: form.imagen.trim(),
      id: Date.now(),
      fecha: new Date().toISOString().split('T')[0]
    };

    const updated = [newBlog, ...blogs];
    setBlogs(updated);
    setForm({ titulo: '', resumen: '', contenido: '', autor: 'Equipo Olores Que Matan', imagen: '' });
  };

  const handleDelete = (id) => {
    const updated = blogs.filter(b => b.id !== id);
    setBlogs(updated);
  };

  return (
    <AdminLayout>
      <h2 className="fw-bold mb-4">📖 Gestión de Publicaciones del Blog</h2>

      <div className="card shadow-sm border-0 p-4 mb-4">
        <h4 className="fw-bold mb-3">Añadir Nuevo Artículo</h4>

        {error && <div className="alert alert-danger mb-3">{error}</div>}

        <form onSubmit={handleAdd} className="row g-3">
          <div className="col-md-6">
            <Input
              label="Título del Artículo"
              value={form.titulo}
              onChange={e => setForm({ ...form, titulo: e.target.value })}
              required
            />
          </div>
          <div className="col-md-6">
            <Input
              label="Autor"
              value={form.autor}
              onChange={e => setForm({ ...form, autor: e.target.value })}
              required
            />
          </div>
          <div className="col-12">
            <Input
              label="URL Imagen Destacada"
              value={form.imagen}
              onChange={e => setForm({ ...form, imagen: e.target.value })}
              required
            />
          </div>
          <div className="col-12">
            <Input
              label="Resumen Breve"
              value={form.resumen}
              onChange={e => setForm({ ...form, resumen: e.target.value })}
              required
            />
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label className="form-label fw-bold">Contenido Completo</label>
              <textarea
                className="form-control"
                rows="4"
                value={form.contenido}
                onChange={e => setForm({ ...form, contenido: e.target.value })}
                required
              ></textarea>
            </div>
          </div>
          <div className="col-12">
            <Button type="submit" variant="dark">Publicar Artículo</Button>
          </div>
        </form>
      </div>

      <div className="card shadow-sm border-0 p-3">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Fecha</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(b => (
                <tr key={b.id}>
                  <td className="fw-bold">{b.titulo}</td>
                  <td>{b.autor}</td>
                  <td>{b.fecha}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      className="btn-sm"
                      onClick={() => handleDelete(b.id)}
                    >
                      Eliminar
                    </Button>
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

export default AdminBlogPage;