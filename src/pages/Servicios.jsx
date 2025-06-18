import { FaNetworkWired, FaServer, FaPhoneVolume, FaVideo, FaLock, FaLaptopCode } from 'react-icons/fa';

export default function Servicios() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Nuestros Servicios</h1>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        En Glex Comunicaciones ofrecemos soluciones tecnológicas a medida para empresas, instituciones públicas y privadas.
        Contamos con experiencia e infraestructura para diseñar, implementar y mantener sistemas eficientes y seguros.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Servicio 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaNetworkWired className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Redes y cableado estructurado</h3>
          <p className="text-gray-600 text-sm">
            Instalación profesional de redes LAN, voz y datos. Certificación de puntos, racks, canalización y fibra óptica.
          </p>
        </div>

        {/* Servicio 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaPhoneVolume className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Telefonía IP y VoIP</h3>
          <p className="text-gray-600 text-sm">
            Configuración de conmutadores digitales y sistemas VoIP para comunicación empresarial moderna.
          </p>
        </div>

        {/* Servicio 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaVideo className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Videovigilancia y CCTV</h3>
          <p className="text-gray-600 text-sm">
            Instalación de cámaras IP, NVRs, monitoreo remoto, grabación continua y soluciones para edificios y exteriores.
          </p>
        </div>

        {/* Servicio 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaServer className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Infraestructura tecnológica</h3>
          <p className="text-gray-600 text-sm">
            Suministro e instalación de servidores, racks, nodos de red, UPS y equipos activos.
          </p>
        </div>

        {/* Servicio 5 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaLock className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Ciberseguridad</h3>
          <p className="text-gray-600 text-sm">
            Evaluación de vulnerabilidades, firewalls, VPN, respaldo y gestión de accesos para entornos empresariales.
          </p>
        </div>

        {/* Servicio 6 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaLaptopCode className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Desarrollo de software</h3>
          <p className="text-gray-600 text-sm">
            Aplicaciones web personalizadas, plataformas administrativas y sistemas conectados a hardware y sensores.
          </p>
        </div>
      </div>
    </div>
  );
}
