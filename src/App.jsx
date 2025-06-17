import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import Cotizaciones from './pages/Cotizaciones';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/cotizaciones" element={<Cotizaciones />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
