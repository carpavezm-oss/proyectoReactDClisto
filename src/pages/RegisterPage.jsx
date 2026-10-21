// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import { addUser, getStoredUsers } from '../data/data';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nombre: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');


    const users = getStoredUsers();


    const emailExists = users.some(
      (u) => u.email.toLowerCase() === form.email.trim().toLowerCase()
    );

    if (emailExists) {
      setError('El correo electrónico ya se encuentra registrado.');
      return;
    }


    addUser({
      nombre: form.nombre.trim(),
      email: form.email.trim(),
      rol: 'Cliente'
    });

    setSuccess(true);

    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="row justify-content-center py-5">
        <div className="col-md-5">
          <div className="card shadow-sm border-0 p-4">
            <h2 className="fw-bold mb-4 text-center">📝 Crear Cuenta</h2>

            {error && <div className="alert alert-danger py-2">{error}</div>}
            {success && (
              <div className="alert alert-success py-2">
                ¡Registro exitoso! Redirigiendo al inicio de sesión...
              </div>
            )}

            <form onSubmit={handleRegister}>
              <Input
                label="Nombre Completo"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                required
              />
              <Input
                label="Correo Electrónico"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <Input
                label="Contraseña"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <Button type="submit" variant="primary" className="w-100 btn-lg mt-3">
                Registrarse
              </Button>
            </form>

            <div className="text-center mt-3 small">
              ¿Ya tienes cuenta? <Link to="/login" className="fw-bold">Inicia sesión</Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
