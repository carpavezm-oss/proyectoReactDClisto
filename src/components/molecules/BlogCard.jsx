import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img src={blog.imagen} className="card-img-top" alt={blog.titulo} style={{ height: '180px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <span className="text-muted small mb-1">{blog.fecha} | {blog.autor}</span>
        <h5 className="card-title fw-bold">{blog.titulo}</h5>
        <p className="card-text text-muted small flex-grow-1">{blog.resumen}</p>
        <Link to={`/blog/${blog.id}`} className="btn btn-outline-dark btn-sm mt-auto">
          Leer artículo completo
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;