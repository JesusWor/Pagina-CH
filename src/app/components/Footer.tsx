import logoIcon from '../../assets/513b903ee38365639baa28d43c334248edc62c49.png';

export function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-colWs-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoIcon} alt="Consultoría Chaidez" className="w-12 h-12" />
              <div>
                <div className="text-xl">CONSULTORÍA</div>
                <div className="text-[#ED1C24] text-xl">CHAIDEZ</div>
              </div>
            </div>
            <p className="text-white/70 mb-4">
              Desarrollo de Software Enterprise
            </p>
            <p className="text-white/60 text-sm">
              Transformando ideas en soluciones tecnológicas innovadoras desde 2020.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#services" className="hover:text-[#ED1C24] transition-colors">Desarrollo Web</a></li>
              <li><a href="#services" className="hover:text-[#ED1C24] transition-colors">Desarrollo Mobile</a></li>
              <li><a href="#services" className="hover:text-[#ED1C24] transition-colors">Consultoría</a></li>
              <li><a href="#services" className="hover:text-[#ED1C24] transition-colors">Arquitectura</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Empresa</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#about" className="hover:text-[#ED1C24] transition-colors">Sobre Nosotros</a></li>
              <li><a href="#technologies" className="hover:text-[#ED1C24] transition-colors">Tecnologías</a></li>
              <li><a href="#process" className="hover:text-[#ED1C24] transition-colors">Proceso</a></li>
              <li><a href="#contact" className="hover:text-[#ED1C24] transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Consultoría Chaidez. Todos los derechos reservados.</p>
          <p className="mt-2">Socio Estratégico de Accenture</p>
        </div>
      </div>
    </footer>
  );
}