import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoIcon from '../../assets/513b903ee38365639baa28d43c334248edc62c49.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Servicios', href: '#services' },
    { label: 'Tecnologías', href: '#technologies' },
    { label: 'Proceso', href: '#process' },
    { label: 'Contacto', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logoIcon} alt="Consultoría Chaidez" className="w-10 h-10" />
          <div className="hidden sm:block">
            <div className="text-sm text-[#2D2D2D]">CONSULTORÍA</div>
            <div className="text-sm text-[#ED1C24]">CHAIDEZ</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#2D2D2D] hover:text-[#ED1C24] transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden text-[#2D2D2D] hover:text-[#ED1C24] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-[#2D2D2D] hover:bg-gray-50 hover:text-[#ED1C24] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}