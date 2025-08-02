import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, BookOpen, Heart, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { icon: Star, delay: 0, x: '10%', y: '20%' },
    { icon: Heart, delay: 0.5, x: '80%', y: '15%' },
    { icon: Zap, delay: 1, x: '85%', y: '70%' },
    { icon: BookOpen, delay: 1.5, x: '15%', y: '80%' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
    >
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

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: item.delay, duration: 1 }}
          className="absolute hidden lg:block"
          style={{ left: item.x, top: item.y }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <item.icon className="w-8 h-8 text-accent-500" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-accent-500/20 text-accent-300 rounded-full text-sm font-medium backdrop-blur-sm"
            >
              <Star className="w-4 h-4 mr-2" />
              Bestseller em Desenvolvimento Pessoal
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Transforme sua vida com
              <span className="block bg-gradient-text bg-clip-text text-transparent mt-2">
                O Peso do Desejo
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Aprenda como equilibrar a vida a seu favor e criar a realidade
              que deseja. Um guia prátitico para transformação pessoal e conquista
              dos seus sonhos mais profundos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://www.amazon.com.br/Peso-Desejo-pr%C3%A1tico-equilibrar-realidade-ebook/dp/B0FB6RWQTR"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-accent text-white font-semibold rounded-full shadow-2xl hover:shadow-accent-500/25 transition-all duration-300 group"
              >
                Comprar na Amazon
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('about')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Saiba Mais
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20"
            >
              {[
                { number: '10K+', label: 'Leitores' },
                { number: '4.8â', label: 'AvaliaÃ§Ã£o' },
                { number: '2024', label: 'LanÃ§amento' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Book Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative mx-auto max-w-md lg:max-w-lg"
            >
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-30 scale-110"></div>
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754010045038_wk8vu08cd7s_BRUNO_NUNES_5.jpg"
                alt="O Peso do Desejo - Livro"
                className="relative w-full h-auto rounded-3xl shadow-2xl backdrop-blur-sm"
              />

              {/* Floating Elements around book */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Star className="w-6 h-6 text-accent-300" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Heart className="w-6 h-6 text-pink-300" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
