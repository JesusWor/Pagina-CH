import { Code2, Database, Smartphone, Cloud, Globe, Workflow } from 'lucide-react';

const technologies = [
  {
    category: 'Frontend',
    icon: Globe,
    items: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    icon: Code2,
    items: ['Node.js', 'C#', '.NET', 'Express', 'ASP.NET Core']
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    items: ['React Native', 'Progressive Web Apps', 'Responsive Design']
  },
  {
    category: 'Base de Datos',
    icon: Database,
    items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    items: ['Azure', 'AWS', 'Docker', 'CI/CD', 'Kubernetes']
  },
  {
    category: 'Metodologías',
    icon: Workflow,
    items: ['Agile', 'Scrum', 'DevOps', 'Clean Architecture', 'TDD']
  }
];

export function Technologies() {
  return (
    <section id="technologies" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2D2D2D]">
            Nuestro <span className="text-[#ED1C24]">Stack Tecnológico</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Utilizamos las tecnologías más modernas y robustas del mercado para garantizar 
            soluciones escalables, seguras y de alto rendimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#ED1C24]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#ED1C24]/10 rounded-lg flex items-center justify-center">
                    <Icon className="text-[#ED1C24]" size={24} />
                  </div>
                  <h3 className="text-xl text-[#2D2D2D]">{tech.category}</h3>
                </div>
                <ul className="space-y-2">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#ED1C24] rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
