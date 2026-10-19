import React from 'react';

const Input = ({
  type = 'text',
  name,
  label,
  placeholder,
  value,
  onChange,
  className = '',
  required = false,
  error = ''
}) => {
  return (
    <div className="mb-3">
      {label && <label className="form-label fw-bold">{label}</label>}
      <input
        type={type}
        name={name}
        className={`form-control ${error ? 'is-invalid' : ''} ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;