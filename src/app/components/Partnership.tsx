import { Award, Target, Zap } from 'lucide-react';

export function Partnership() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-[#ED1C24] text-white text-sm rounded-full mb-6">
              Asociación Estratégica
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-[#2D2D2D]">
              Socios de <span className="text-[#ED1C24]">Accenture</span>
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Como socio certificado de Accenture, Consultoría Chaidez combina la agilidad 
              y especialización de una empresa boutique con el respaldo y estándares de calidad 
              de una firma líder mundial en consultoría y tecnología.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Esta alianza estratégica nos permite acceder a las mejores prácticas de la industria, 
              metodologías probadas y una red global de expertos, garantizando soluciones de 
              clase mundial para nuestros clientes.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ED1C24]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-[#ED1C24]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg text-[#2D2D2D] mb-1">Certificación y Calidad</h4>
                  <p className="text-gray-600">Procesos certificados bajo estándares internacionales</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ED1C24]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-[#ED1C24]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg text-[#2D2D2D] mb-1">Alcance Global</h4>
                  <p className="text-gray-600">Acceso a recursos y conocimiento a nivel mundial</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ED1C24]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="text-[#ED1C24]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg text-[#2D2D2D] mb-1">Innovación Continua</h4>
                  <p className="text-gray-600">Actualizaciones constantes en tecnologías emergentes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1620519157189-c06a79a52f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI5OTcyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Accenture Partnership"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#ED1C24]/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
