import logoCompleto from '../../assets/cb0c3eef08995d2a77f80f52d90bb2fc047d1cbf.png';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2D2D2D] via-[#3D3D3D] to-[#1D1D1D] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ED1C24_1px,transparent_1px),linear-gradient(to_bottom,#ED1C24_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pb-24">
        <img
          src={logoCompleto}
          alt="Consultoría Chaidez"
          className="w-full max-w-lg md:max-w-xl mx-auto mb-10 object-contain"
        />
        <p className="text-white/90 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto">
          Transformando ideas en <span className="text-[#ED1C24] font-semibold">soluciones tecnológicas innovadoras</span> 
          con excelencia y profesionalismo.
        </p>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-all duration-300 animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown size={42} />
      </button>
    </section>
  );
}