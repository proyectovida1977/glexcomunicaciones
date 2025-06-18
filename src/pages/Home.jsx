import { Link } from 'react-router-dom';
import { FaNetworkWired, FaPhoneVolume, FaCamera, FaLaptopCode } from 'react-icons/fa';
import equipo from '../assets/glex-equipo.jpg';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800">Bienvenido a Glex Comunicaciones</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Expertos en soluciones tecnológicas integrales: cableado estructurado, redes, telefonía IP, CCTV y más.
        </p>
        <Link to="/cotizaciones">
          <button className="mt-6 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full shadow-md">
            Solicita una cotización
          </button>
        </Link>
      </div>

      {/* Servicios destacados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="p-6 bg-white shadow rounded-lg">
          <FaNetworkWired className="mx-auto text-4xl text-blue-600 mb-4" />
          <h3 className="font-bold text-lg mb-2">Redes y cableado</h3>
          <p className="text-gray-600 text-sm">Diseño e instalación de redes LAN, voz y datos para empresas y gobierno.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <FaPhoneVolume className="mx-auto text-4xl text-blue-600 mb-4" />
          <h3 className="font-bold text-lg mb-2">Telefonía IP</h3>
          <p className="text-gray-600 text-sm">Implementación de sistemas VoIP y conmutadores virtuales con alta calidad.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <FaCamera className="mx-auto text-4xl text-blue-600 mb-4" />
          <h3 className="font-bold text-lg mb-2">Videovigilancia</h3>
          <p className="text-gray-600 text-sm">Sistemas de CCTV, NVR y cámaras inteligentes para seguridad profesional.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <FaLaptopCode className="mx-auto text-4xl text-blue-600 mb-4" />
          <h3 className="font-bold text-lg mb-2">Desarrollo software</h3>
          <p className="text-gray-600 text-sm">Aplicaciones web a la medida, integradas a tus sistemas existentes.</p>
        </div>
      </div>

      {/* Imagen empresarial */}
      <div className="mt-16 text-center">
        <img
          src={equipo}
          alt="Equipo de Glex Comunicaciones"
          className="mx-auto rounded-lg shadow-lg w-full max-w-4xl"
        />
      
      </div>
    </div>
  );
}
