import { useState } from 'react';

export default function Cotizaciones() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    requerimiento: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar el formulario a una API o correo
    alert('Gracias. Tu solicitud ha sido enviada.');
    setForm({
      nombre: '',
      empresa: '',
      correo: '',
      telefono: '',
      requerimiento: '',
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Solicita tu Cotización</h1>
      <p className="text-center text-gray-700 mb-10">
        Completa el siguiente formulario y uno de nuestros asesores se pondrá en contacto contigo a la brevedad.
      </p>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-1">Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Empresa / Institución</label>
          <input
            type="text"
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Correo electrónico</label>
            <input
              type="email"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">¿Qué necesitas cotizar?</label>
          <textarea
            name="requerimiento"
            value={form.requerimiento}
            onChange={handleChange}
            rows="5"
            required
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej. 10 cámaras IP, servidor, instalación de red, etc."
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition"
          >
            Enviar solicitud
          </button>
        </div>
      </form>
    </div>
  );
}
