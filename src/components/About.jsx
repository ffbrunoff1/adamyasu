import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, Users, BookOpen, Heart, Star } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: BookOpen,
      title: 'Autor Especialista',
      description:
        'Dedicado ao desenvolvimento pessoal e transformaÃ§Ã£o de vidas',
    },
    {
      icon: Users,
      title: 'Milhares de Leitores',
      description: 'Impactando vidas ao redor do Brasil e do mundo',
    },
    {
      icon: Award,
      title: 'Reconhecimento',
      description: 'AvaliaÃ§Ãµes excepcionais e feedback positivo dos leitores',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            whileInView={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            ConheÃ§a o Autor
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sobre <span className="bg-gradient-text">Adam Yasu</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um escritor dedicado a ajudar pessoas a transformarem suas vidas
            atravÃ©s do autoconhecimento e desenvolvimento pessoal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Author Image */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-2xl opacity-20 scale-105"></div>
              <motion.img
                whileHover={{ scale: 1.02 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754010046271_85spzcfmw8y_Adam_Yasu.png"
                alt="Adam Yasu"
                className="relative w-full h-auto rounded-3xl shadow-2xl"
              />

              {/* Floating Quote */}
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center"
              >
                <Quote className="w-8 h-8 text-accent-600" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Uma jornada de transformaÃ§Ã£o pessoal
              </h3>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Adam Yasu Ã© um escritor apaixonado por desenvolvimento pessoal
                  e transformaÃ§Ã£o humana. Com uma abordagem Ãºnica e prÃ¡tica, ele
                  dedica sua carreira a ajudar pessoas a descobrirem seu
                  verdadeiro potencial.
                </p>

                <p>
                  AtravÃ©s de sua obra "O Peso do Desejo", Adam compartilha
                  insights profundos sobre como equilibrar a vida e criar a
                  realidade que verdadeiramente desejamos, baseando-se em anos
                  de estudo e experiÃªncia pessoal.
                </p>

                <p>
                  Sua missÃ£o Ã© clara: inspirar e capacitar indivÃ­duos a
                  transformarem seus sonhos em realidade, oferecendo ferramentas
                  prÃ¡ticas para o autoconhecimento e crescimento pessoal.
                </p>
              </div>
            </div>

            {/* Quote */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative p-6 bg-gradient-to-r from-accent-50 to-stone-50 rounded-2xl border-l-4 border-accent-500"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent-300" />
              <p className="text-lg italic text-gray-700 leading-relaxed">
                "A transformaÃ§Ã£o real acontece quando alinhamos nossos desejos
                mais profundos com aÃ§Ãµes conscientes e direcionadas."
              </p>
              <cite className="block mt-4 text-accent-700 font-medium not-italic">
                - Adam Yasu
              </cite>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center mr-4">
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  {achievement.title}
                </h4>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-600/20 to-accent-700/20"></div>
            <div className="relative z-10">
              <Heart className="w-12 h-12 text-accent-400 mx-auto mb-6" />
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                MissÃ£o de Transformar Vidas
              </h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Acredito que cada pessoa tem o potencial de criar a vida dos
                seus sonhos. Meu objetivo Ã© fornecer as ferramentas e insights
                necessÃ¡rios para que vocÃª descubra esse potencial e o transforme
                em realidade tangÃ­vel.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
