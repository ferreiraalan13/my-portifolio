// components/About.tsx
import { Code2, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Desenvolvimento Full Stack",
      description:
        "Soluções completas do frontend ao backend com as melhores tecnologias do mercado.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsividade",
      description:
        "Desenvolvimento mobile-first para uma experiência perfeita em todos os dispositivos.",
    },
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>

          <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            Sou um desenvolvedor apaixonado por criar soluções digitais que
            fazem a diferença na vida das pessoas.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-900/50 p-6 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/30 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Tecnologias & Ferramentas
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "Next.js",
                "Python",
                "PostgreSQL",
                "MongoDB",
                "Git",
                "Docker",
                "AWS",
                "Figma",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-purple-500/10 border border-purple-400/30 text-purple-300 rounded-full text-sm font-medium hover:bg-purple-500/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
