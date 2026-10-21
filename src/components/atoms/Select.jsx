import React from 'react';

const Select = ({ name, label, value, onChange, options = [], className = '', required = false }) => {
  return (
    <div className="mb-3">
      {label && <label className="form-label fw-bold">{label}</label>}
      <select
        name={name}
        className={`form-select ${className}`}
        value={value}
        onChange={onChange}
        required={required}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;