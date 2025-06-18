import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Contacto() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Contáctanos</h1>
      <p className="text-center text-gray-700 mb-10">
        Estamos listos para ayudarte con cualquier requerimiento tecnológico. Escríbenos o visítanos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Datos de contacto */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Dirección</h3>
              <p className="text-gray-600">Av. 2a. Norte Poniente No. 30, Col. Nueva Reforma. Tuxtla Gtz, Chis.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaPhoneAlt className="text-blue-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Teléfonos</h3>
              <p className="text-gray-600">961 2953 648 | 961 1408 634</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-blue-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Correo electrónico</h3>
              <p className="text-gray-600">ventas@glexcomtecnologias.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaClock className="text-blue-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Horario de atención</h3>
              <p className="text-gray-600">Lunes a viernes de 9:00 a 18:00 hrs</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaWhatsapp className="text-green-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">WhatsApp</h3>
              <p className="text-gray-600">+52 1 961 2953 648</p>
            </div>
          </div>

          
        </div>

        {/* Mapa embebido o imagen */}
        <div>
          <iframe
            title="Ubicación"            
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.9239582366!2d-93.10687498905634!3d16.78045841993864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8a5b0ce970d%3A0x7fe248e25e8f4b5d!2s2a.%20Nte.%20Pte.%2030%2C%20Nueva%20Reforma%2C%2029010%20Tuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1ses-419!2smx!4v1750207922100!5m2!1ses-419!2smx"
            width="100%"
            height="350"
            className="rounded-lg shadow-md border"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
