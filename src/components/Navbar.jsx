import { Link } from 'react-router-dom';
import logo from '../assets/logo-glexcom.png';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo + Título */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Glexcom Logo" className="w-10 h-10 rounded-full bg-white p-1" />
          <span className="text-xl font-bold">GLEX COMUNICACIONES</span>
        </div>

        {/* Enlaces de navegación */}
        <div className="space-x-4 text-sm sm:text-base">
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
