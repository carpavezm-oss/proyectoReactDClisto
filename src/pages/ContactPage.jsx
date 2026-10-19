import React, { useState } from 'react';
import MainLayout from '../components/templates/MainLayout';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';

const ContactPage = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <MainLayout>
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card shadow-sm border-0 p-4">
            <h2 className="fw-bold mb-3">📞 Contáctanos</h2>
            <p className="text-muted mb-4">¿Tienes dudas con tu pedido o una fragancia? Escríbenos.</p>
            {sent ? (
              <div className="alert alert-success">¡Mensaje enviado con éxito! Te responderemos pronto.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <Input label="Tu Nombre" value={form.nombre} onChange={(e) => setForm({...form, nombre: e.target.value})} required />
                <Input label="Correo Electrónico" type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
                <div className="mb-3">
                  <label className="form-label fw-bold">Mensaje</label>
                  <textarea className="form-control" rows="4" value={form.mensaje} onChange={(e) => setForm({...form, mensaje: e.target.value})} required></textarea>
                </div>
                <Button type="submit" variant="dark" className="w-100 btn-lg">Enviar Mensaje</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;