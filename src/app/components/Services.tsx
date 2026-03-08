import { Layers, Code, Smartphone, Cloud, Settings, BarChart } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desarrollo de Software a Medida',
    description: 'Creamos soluciones personalizadas adaptadas a las necesidades específicas de tu negocio.'
  },
  {
    icon: Cloud,
    title: 'Aplicaciones Web Enterprise',
    description: 'Sistemas web robustos y escalables para empresas en crecimiento.'
  },
  {
    icon: Smartphone,
    title: 'Desarrollo Mobile',
    description: 'Aplicaciones móviles nativas y multiplataforma con la mejor experiencia de usuario.'
  },
  {
    icon: Layers,
    title: 'Arquitectura de Software',
    description: 'Diseño de arquitecturas escalables, mantenibles y de alto rendimiento.'
  },
  {
    icon: Settings,
    title: 'Integración de Sistemas',
    description: 'Conectamos tus sistemas existentes para optimizar procesos y mejorar la eficiencia.'
  },
  {
    icon: BarChart,
    title: 'Consultoría Tecnológica',
    description: 'Asesoramiento experto para la transformación digital de tu organización.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2D2D2D]">
            Nuestros <span className="text-[#ED1C24]">Servicios</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Ofrecemos un portafolio completo de servicios de desarrollo de software 
            para impulsar el crecimiento de tu empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-[#ED1C24]/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#ED1C24] to-[#C41820] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl mb-3 text-[#2D2D2D]">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
