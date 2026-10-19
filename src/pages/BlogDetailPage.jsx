import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';
import { getStoredBlogs } from '../data/data';

const BlogDetailPage = () => {
  const { id } = useParams();
  const blogs = getStoredBlogs();
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) {
    return (
      <MainLayout>
        <div className="alert alert-danger text-center my-5">
          <h3>Artículo no encontrado</h3>
          <Link to="/blog" className="btn btn-dark mt-3">Volver al Blog</Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container py-3" style={{ maxWidth: '800px' }}>
        <Link to="/blog" className="btn btn-outline-dark btn-sm mb-4">← Volver al Blog</Link>
        <span className="text-muted d-block mb-2">{blog.fecha} | Por {blog.autor}</span>
        <h1 className="fw-bold mb-4">{blog.titulo}</h1>
        <img src={blog.imagen} alt={blog.titulo} className="img-fluid rounded shadow-sm mb-4 w-100" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <p className="lead fw-bold mb-3">{blog.resumen}</p>
        <p className="fs-5 text-secondary" style={{ whiteSpace: 'pre-line' }}>{blog.contenido}</p>
      </div>
    </MainLayout>
  );
};

export default BlogDetailPage;