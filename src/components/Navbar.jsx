import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo-glexcom.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + título */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Glexcom Logo" className="w-10 h-10 bg-white rounded-full p-1" />
          <span className="text-lg sm:text-xl font-bold">GLEX COMUNICACIONES</span>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="sm:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Enlaces de navegación - escritorio */}
        <div className="hidden sm:flex space-x-6 text-sm sm:text-base">
          <Link to="/" onClick={closeMenu} className="hover:underline">Inicio</Link>
          <Link to="/servicios" onClick={closeMenu} className="hover:underline">Servicios</Link>
          <Link to="/productos" onClick={closeMenu} className="hover:underline">Productos</Link>
          <Link to="/cotizaciones" onClick={closeMenu} className="hover:underline">Cotizaciones</Link>
          <Link to="/contacto" onClick={closeMenu} className="hover:underline">Contacto</Link>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="sm:hidden bg-blue-800 px-4 pb-4 space-y-2 text-sm">
          <Link to="/" onClick={closeMenu} className="block hover:underline">Inicio</Link>
          <Link to="/servicios" onClick={closeMenu} className="block hover:underline">Servicios</Link>
          <Link to="/productos" onClick={closeMenu} className="block hover:underline">Productos</Link>
          <Link to="/cotizaciones" onClick={closeMenu} className="block hover:underline">Cotizaciones</Link>
          <Link to="/contacto" onClick={closeMenu} className="block hover:underline">Contacto</Link>
        </div>
      )}
    </nav>
  );
}
