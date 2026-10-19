import React from 'react';
import MainLayout from '../components/templates/MainLayout';
import CategoryCard from '../components/molecules/CategoryCard';
import { getStoredCategories } from '../data/data';

const CategoriesPage = () => {
  const categories = getStoredCategories();

  return (
    <MainLayout>
      <h2 className="fw-bold mb-4">🏷️ Categorías de Fragancias</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {categories.map(cat => (
          <div className="col" key={cat.id}>
            <CategoryCard category={cat} />
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default CategoriesPage;