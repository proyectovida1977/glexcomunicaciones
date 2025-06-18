import { FaCamera, FaServer, FaNetworkWired, FaPhone, FaDesktop, FaCloud } from 'react-icons/fa';

export default function Productos() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Nuestros Productos</h1>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        Glex Comunicaciones distribuye e integra tecnología de alto desempeño, seleccionada para cubrir las necesidades de conectividad, seguridad, telecomunicaciones y procesamiento empresarial.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Producto 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaCamera className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Cámaras y sistemas CCTV</h3>
          <p className="text-gray-600 text-sm">
            Cámaras IP, NVRs, kits de videovigilancia, soluciones para interior y exterior, visión nocturna, detección de movimiento.
          </p>
        </div>

        {/* Producto 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaServer className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Servidores y almacenamiento</h3>
          <p className="text-gray-600 text-sm">
            Equipos para procesamiento, respaldo y virtualización. NAS, microservidores, soluciones de centro de datos.
          </p>
        </div>

        {/* Producto 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaNetworkWired className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Switches y routers empresariales</h3>
          <p className="text-gray-600 text-sm">
            Switches PoE, routers con VPN, balanceadores de carga, firewalls UTM y puntos de acceso inalámbricos.
          </p>
        </div>

        {/* Producto 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaPhone className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Teléfonos IP y centrales</h3>
          <p className="text-gray-600 text-sm">
            Conmutadores IP, extensiones digitales, gateways VoIP, teléfonos IP para oficinas y recepciones.
          </p>
        </div>

        {/* Producto 5 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaDesktop className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Computadoras y estaciones</h3>
          <p className="text-gray-600 text-sm">
            Equipos de escritorio, all-in-one, thin clients y soluciones para centros de trabajo o aulas.
          </p>
        </div>

        {/* Producto 6 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaCloud className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Licencias y servicios en la nube</h3>
          <p className="text-gray-600 text-sm">
            Licenciamiento de software, correo empresarial, almacenamiento seguro, plataformas web y sistemas SaaS.
          </p>
        </div>
      </div>
    </div>
  );
}
