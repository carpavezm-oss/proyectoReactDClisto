import React from 'react';

const Badge = ({ children, bg = 'secondary', className = '' }) => {
  return <span className={`badge bg-${bg} ${className}`}>{children}</span>;
};

export default Badge;