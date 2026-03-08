export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-[#2D2D2D]">
              Quiénes <span className="text-[#ED1C24]">Somos</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Consultoría Chaidez es una empresa líder en desarrollo de software empresarial, 
              especializada en crear soluciones tecnológicas innovadoras que impulsan la 
              transformación digital de nuestros clientes.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Como socios estratégicos de Accenture, combinamos la excelencia técnica con 
              un profundo conocimiento de las necesidades del negocio para entregar productos 
              de clase mundial.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl text-[#ED1C24] mb-2">10+</div>
                <div className="text-gray-600 text-sm">Proyectos Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl text-[#ED1C24] mb-2">50+</div>
                <div className="text-gray-600 text-sm">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl text-[#ED1C24] mb-2">15+</div>
                <div className="text-gray-600 text-sm">Especialistas</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcyOTcwMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Equipo Consultoría Chaidez"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#ED1C24]/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
