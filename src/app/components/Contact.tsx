import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import logoIcon from '../../assets/513b903ee38365639baa28d43c334248edc62c49.png';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2D2D2D]">
            Hablemos de tu <span className="text-[#ED1C24]">Proyecto</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            ¿Tienes una idea? Estamos listos para convertirla en realidad. 
            Contáctanos y descubre cómo podemos ayudarte.
          </p>
        </div>

        <div className="flex justify-center items-center min-h-screen w-full">
          <div className="w-full max-w-4xl px-4">
            <div className="bg-gradient-to-br from-[#2D2D2D] to-[#1D1D1D] p-8 rounded-lg text-white">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <img 
                    src={logoIcon} 
                    alt="Consultoría Chaidez" 
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <div className="flex-1 w-full text-center md:text-left">
                  <h3 className="text-2xl mb-6">Información de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                      <Mail className="text-[#ED1C24] flex-shrink-0" size={20} />
                      <div>
                        <div className="text-sm text-white/60 mb-1">Email</div>
                        <a 
                          href="mailto:programjesuse@gmail.com" 
                          className="hover:text-[#ED1C24] transition-colors"
                        >
                          programjesuse@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                      <Phone className="text-[#ED1C24] flex-shrink-0" size={20} />
                      <div>
                        <div className="text-sm text-white/60 mb-1">Teléfono</div>
                        <a 
                          href="tel:+526671774365" 
                          className="hover:text-[#ED1C24] transition-colors"
                        >
                          +52 (66) 7177-4365
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                      <MapPin className="text-[#ED1C24] flex-shrink-0" size={20} />
                      <div>
                        <div className="text-sm text-white/60 mb-1">Ubicación</div>
                        <p>Monterrey, Nuevo León, México</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
