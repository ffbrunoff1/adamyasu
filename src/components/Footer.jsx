import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, BookOpen, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { label: 'Sobre', section: 'about' },
    { label: 'Livro', section: 'services' },
    { label: 'Contato', section: 'contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer inline-block"
                onClick={scrollToTop}
              >
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754010053499_0.png"
                  alt="Adam Yasu"
                  className="h-12 w-auto mb-6"
                />
              </motion.div>

              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Dedicado a ajudar pessoas a transformarem suas vidas através do
                desenvolvimento pessoal e autoconhecimento. Cada palavra é
                escrita com o propósito de inspirar e capacitar sua jornada de
                crescimento.
              </p>

              <div className="flex items-start space-x-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    O Peso do Desejo
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Disponível agora na Amazon. Um guia transformador para
                    equilibrar sua vida e construir a realidade que deseja.
                  </p>
                  <motion.a
                    href="https://www.amazon.com.br/Peso-Desejo-pr%C3%A1tico-equilibrar-realidade-ebook/dp/B0FB6RWQTR"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center mt-3 text-accent-400 hover:text-accent-300 transition-colors font-medium text-sm"
                  >
                    Comprar Livro →
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Links Rápidos</h3>
              <ul className="space-y-4">
                {footerLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
                <motion.li whileHover={{ x: 5 }}>
                  <a
                    href="https://www.amazon.com.br/Peso-Desejo-pr%C3%A1tico-equilibrar-realidade-ebook/dp/B0FB6RWQTR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                  >
                    Comprar Livro
                  </a>
                </motion.li>
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Conecte-se</h3>

              <div className="space-y-4">
                <motion.a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-medium">ffbrunoff@yahoo.com.br</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/adamyasu"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Instagram</div>
                    <div className="font-medium">@adamyasu</div>
                  </div>
                </motion.a>
              </div>

              {/* Newsletter */}
              <div className="mt-8 p-6 bg-gradient-accent/20 rounded-2xl border border-accent-500/20">
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-accent-400" />
                  Transformação Diária
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Acompanhe conteúdos sobre desenvolvimento pessoal e reflexões
                  sobre crescimento.
                </p>
                <motion.a
                  href="https://www.instagram.com/adamyasu"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-medium transition-colors text-sm"
                >
                  Seguir no Instagram
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 text-center md:text-left"
              >
                <p>&copy; 2024 Adam Yasu. Todos os direitos reservados.</p>
                <p className="text-sm mt-1">
                  Feito com{' '}
                  <Heart className="w-4 h-4 inline text-red-500 mx-1" />
                  para inspirar transformações.
                </p>
              </motion.div>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-12 h-12 bg-accent-600 hover:bg-accent-700 rounded-full transition-colors duration-300 group"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-5 h-5 text-white group-hover:translate-y-[-2px] transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
