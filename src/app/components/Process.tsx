import { Lightbulb, FileSearch, Code, Rocket } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: Lightbulb,
      number: '01',
      title: 'Análisis y Planificación',
      description: 'Entendemos tus necesidades y objetivos de negocio. Definimos el alcance, tecnologías y arquitectura del proyecto.'
    },
    {
      icon: FileSearch,
      number: '02',
      title: 'Diseño y Prototipado',
      description: 'Creamos wireframes y prototipos interactivos. Diseñamos la arquitectura de software y bases de datos.'
    },
    {
      icon: Code,
      number: '03',
      title: 'Desarrollo y Testing',
      description: 'Desarrollamos utilizando metodologías ágiles con entregas incrementales. Realizamos pruebas exhaustivas de calidad.'
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Despliegue y Soporte',
      description: 'Implementamos en producción con zero downtime. Brindamos capacitación y soporte continuo post-lanzamiento.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2D2D2D]">
            Nuestro <span className="text-[#ED1C24]">Proceso</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Un enfoque estructurado y probado que garantiza el éxito de cada proyecto, 
            desde la concepción hasta el despliegue y más allá.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#ED1C24] to-[#C41820] rounded-full mb-4 relative z-10">
                    <Icon className="text-white" size={32} />
                  </div>
                  <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#ED1C24]/50 to-transparent -z-0 hidden lg:block" 
                       style={{ display: index === steps.length - 1 ? 'none' : 'block' }}></div>
                  
                  <div className="text-6xl text-[#ED1C24]/10 mb-2">{step.number}</div>
                  <h3 className="text-xl mb-3 text-[#2D2D2D]">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg border-l-4 border-[#ED1C24]">
          <h3 className="text-2xl mb-4 text-[#2D2D2D]">Metodología Ágil</h3>
          <p className="text-gray-700 mb-4">
            Trabajamos con sprints de 2 semanas, permitiendo entregas continuas y feedback 
            constante. Esto garantiza que el producto final se ajuste perfectamente a tus 
            expectativas y necesidades cambiantes del mercado.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700">
              Daily Standups
            </span>
            <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700">
              Sprint Reviews
            </span>
            <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700">
              Retrospectivas
            </span>
            <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700">
              Entregas Incrementales
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
