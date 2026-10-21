import React from 'react';
import MainLayout from '../components/templates/MainLayout';
import BlogCard from '../components/molecules/BlogCard';
import { getStoredBlogs } from '../data/data';

const BlogPage = () => {
  const blogs = getStoredBlogs();

  return (
    <MainLayout>
      <h2 className="fw-bold mb-4">📖 Blog y Consejos de Perfumería</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {blogs.map(blog => (
          <div className="col" key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default BlogPage;