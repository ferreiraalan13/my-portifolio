// components/Projects.tsx
import { ExternalLink, Github } from "lucide-react";
import connectEtecImg from "../assets/connectEtecImg.png";
import toDoListImg from "../assets/toDoListimg.png";
import mktimg from "../assets/market-place-img.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Market Place",
      description: "Market place de para venda de produtos diversos",
      image: mktimg,
      technologies: ["Next.js", "D3.js", "Python", "PostgreSQL"],
      demoUrl: "https://market-place-ten-brown.vercel.app/",
      githubUrl: "https://github.com/ferreiraalan13/market-place",
    },
    {
      id: 2,
      title: "ConnectEtec",
      description:
        "Plataforma de conexão entre alunos e ex-alunos da ETEC para networking e oportunidades profissionais.",
      image: connectEtecImg,
      technologies: [
        "React",
        "Typescript",
        "Firebase",
        "Chakra UI",
        "JAVA Spring Boot",
        "MySQL",
      ],
      demoUrl: "https://connect-etec.vercel.app/login",
      githubUrl: "https://github.com/ferreiraalan13/ConnectEtec",
    },
    {
      id: 3,
      title: "Lista de tarefas",
      description:
        "Aplicativo de gerenciamento de tarefas, permitindo aos usuários criar, editar e organizar suas atividades diárias.",
      image: toDoListImg,
      technologies: ["React", "Typescript", "Chakra UI", "LocalStorage"],
      demoUrl: "https://to-do-list-delta-one-90.vercel.app/",
      githubUrl: "https://github.com/ferreiraalan13/to-do-list",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Meus Projetos
          </span>
        </h2>

        <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Confira alguns dos meus trabalhos mais recentes e desafiadores
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/50 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="flex items-center space-x-2 text-white bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
