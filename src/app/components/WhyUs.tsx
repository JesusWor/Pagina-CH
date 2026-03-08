import { Shield, Zap, Users, Award, TrendingUp, HeartHandshake } from 'lucide-react';

export function WhyUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Calidad Garantizada',
      description: 'Seguimos estándares internacionales y mejores prácticas de desarrollo para entregar código limpio, mantenible y escalable.'
    },
    {
      icon: Zap,
      title: 'Entregas Ágiles',
      description: 'Utilizamos metodologías ágiles que nos permiten adaptarnos rápidamente a cambios y entregar valor de forma continua.'
    },
    {
      icon: Users,
      title: 'Equipo Experto',
      description: 'Contamos con desarrolladores senior especializados en las tecnologías más demandadas del mercado.'
    },
    {
      icon: Award,
      title: 'Certificados y Respaldados',
      description: 'Como socios de Accenture, nuestros procesos están certificados bajo los más altos estándares de la industria.'
    },
    {
      icon: TrendingUp,
      title: 'Escalabilidad',
      description: 'Diseñamos soluciones pensando en el crecimiento futuro de tu negocio, garantizando escalabilidad y rendimiento.'
    },
    {
      icon: HeartHandshake,
      title: 'Compromiso Total',
      description: 'Tu éxito es nuestro éxito. Nos involucramos profundamente en cada proyecto para garantizar resultados excepcionales.'
    }
  ];

  return (
    <section id="whyus" className="py-20 px-4 bg-gradient-to-br from-[#2D2D2D] to-[#1D1D1D]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            ¿Por Qué Elegirnos<span className="text-[#ED1C24]">?</span>
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Combinamos experiencia técnica, metodologías probadas y un compromiso genuino 
            con el éxito de nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#ED1C24] to-[#C41820] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl mb-3 text-white">{reason.title}</h3>
                <p className="text-white/70 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <div className="text-5xl text-[#ED1C24] mb-3">98%</div>
            <div className="text-white/80">Satisfacción de Clientes</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <div className="text-5xl text-[#ED1C24] mb-3">100%</div>
            <div className="text-white/80">Proyectos Entregados a Tiempo</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <div className="text-5xl text-[#ED1C24] mb-3">24/7</div>
            <div className="text-white/80">Soporte y Mantenimiento</div>
          </div>
        </div>
      </div>
    </section>
  );
}
