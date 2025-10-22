// components/Contact.tsx
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ferreiraalan13/",
      color: "hover:text-blue-400",
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/ferreiraalan13",
      color: "hover:text-gray-400",
    },
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vamos Trabalhar Juntos?
            </span>
          </h2>

          <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos desafiadores.
          </p>

          <div className="flex justify-center gap-16 flex-wrap">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Entre em Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span>ferreiraalan13@gmail.com</span>
                </div>

                <a
                  href="https://wa.me/5511967764367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-6 h-6 text-purple-400" />
                  <span>+55 (11) 96776-4367</span>
                </a>

                <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span>São Paulo, Brasil</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="text-xl font-semibold text-white mb-6">
                  Redes Sociais
                </h4>
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  />
                </div>

                <button
                  onClick={() => alert("Enviar mensagem")}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
