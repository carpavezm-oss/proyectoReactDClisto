import React from 'react';

const AdminStatCard = ({ title, value, subtitle, bg = 'primary', icon = '📊' }) => {
  return (
    <div className={`card text-white bg-${bg} shadow-sm border-0 h-100`}>
      <div className="card-body d-flex align-items-center justify-content-between">
        <div>
          <p className="card-text text-uppercase mb-1 small fw-bold opacity-75">{title}</p>
          <h2 className="card-title fw-bold mb-0">{value}</h2>
          {subtitle && <small className="opacity-75">{subtitle}</small>}
        </div>
        <div className="fs-1">{icon}</div>
      </div>
    </div>
  );
};

export default AdminStatCard;