import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <span className="font-bold">GLEX COMUNICACIONES</span>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/servicios" className="hover:underline">Servicios</Link>
          <Link to="/productos" className="hover:underline">Productos</Link>
          <Link to="/cotizaciones" className="hover:underline">Cotizaciones</Link>
          <Link to="/contacto" className="hover:underline">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
