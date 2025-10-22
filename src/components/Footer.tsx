// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 md:mb-0">
            Alan Ferreira
          </div>

          <div className="text-gray-400 text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} Alan Ferreira Moraes Todos os
              direitos reservados.
            </p>
            <p className="text-sm mt-1">
              Desenvolvido com React, TypeScript e Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
