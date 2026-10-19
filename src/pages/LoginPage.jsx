// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import { getStoredUsers } from '../data/data';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Obtenemos la lista de usuarios registrados desde data.js / localStorage
    const users = getStoredUsers();
    const userFound = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (userFound) {
      setSuccess(true);

      // Guardamos la sesión en localStorage
      localStorage.setItem('currentUser', JSON.stringify(userFound));

      setTimeout(() => {
        if (userFound.rol === 'Administrador' || email === 'admin@oloresquematan.cl') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      }, 1200);
    } else {
      setError('El correo electrónico no se encuentra registrado.');
    }
  };

  return (
    <MainLayout>
      <div className="row justify-content-center py-5">
        <div className="col-md-5">
          <div className="card shadow-sm border-0 p-4">
            <h2 className="fw-bold mb-4 text-center">🔐 Iniciar Sesión</h2>

            {error && <div className="alert alert-danger py-2">{error}</div>}
            {success && <div className="alert alert-success py-2">¡Ingreso exitoso! Redirigiendo...</div>}

            <form onSubmit={handleLogin}>
              <Input
                label="Correo Electrónico"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                label="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" variant="dark" className="w-100 btn-lg mt-3">
                Ingresar
              </Button>
            </form>

            <div className="text-center mt-3 small">
              ¿No tienes una cuenta? <Link to="/registro" className="fw-bold">Regístrate aquí</Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;