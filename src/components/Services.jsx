import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  ArrowRight,
  Star,
  Zap,
  Heart,
  Target,
  Award,
  Users,
} from 'lucide-react';

export default function Services() {
  const bookFeatures = [
    {
      icon: Target,
      title: 'Clareza de Propósito',
      description: 'Descubra seus verdadeiros desejos e objetivos de vida',
    },
    {
      icon: Zap,
      title: 'Transformação Prática',
      description: 'Ferramentas concretas para mudanças reais e duradouras',
    },
    {
      icon: Heart,
      title: 'Equilíbrio Emocional',
      description: 'Aprenda a harmonizar emoções e razão em suas decisões',
    },
    {
      icon: Star,
      title: 'Realização Pessoal',
      description: 'Construa a realidade que verdadeiramente deseja viver',
    },
  ];

  const benefits = [
    'Autoconhecimento profundo e transformador',
    'Técnicas práticas de desenvolvimento pessoal',
    'Estratégias para superar limitações mentais',
    'Métodos para criar metas alinhadas com seus valores',
    'Ferramentas para manter a motivação consistente',
    'Guia completo para transformação de vida',
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
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
            <BookOpen className="w-4 h-4 mr-2" />
            Livro Disponível
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-text">O Peso do Desejo</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Como equilibrar a vida a seu favor e criar a realidade que deseja.
            Um guia transformador para o desenvolvimento pessoal.
          </p>
        </motion.div>

        {/* Main Book Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Book Image */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-2xl opacity-30 scale-110"></div>
              <motion.img
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754010045038_wk8vu08cd7s_BRUNO_NUNES_5.jpg"
                alt="O Peso do Desejo - Livro"
                className="relative w-full h-auto rounded-3xl shadow-2xl"
              />

              {/* Rating Badge */}
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center space-x-2"
              >
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="text-lg font-bold text-gray-900">4.8</span>
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
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Transforme seus desejos em realidade
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                "O Peso do Desejo" é um serviço especializado em desenvolvimento
                pessoal que auxilia indivíduos a identificar e alcançar suas
                metas mais profundas. Com abordagens personalizadas, oferecemos
                técnicas que ajudam no reconhecimento de desejos internos,
                proporcionando clareza e motivação para a transformação
                positiva.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Nossos especialistas estão preparados para guiar você em uma
                jornada de autodescoberta, entendendo e ressignificando seus
                anseios de maneira eficaz. Alcance o equilíbrio entre o que você
                deseja e o que realmente precisa, transformando sonhos em
                realidade.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent-500 text-accent-600 font-semibold rounded-full hover:bg-accent-50 transition-all duration-300"
              >
                Fale Comigo
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            O que você vai descobrir
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits List */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-600/20 to-purple-600/20"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Award className="w-12 h-12 text-accent-400 mb-6" />
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Benefícios Transformadores
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Cada página foi cuidadosamente elaborada para oferecer insights
                práticos e ferramentas eficazes para sua jornada de
                transformação pessoal.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-200">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Users,
              number: '10K+',
              label: 'Leitores Transformados',
              color: 'text-blue-600',
            },
            {
              icon: Star,
              number: '4.8★',
              label: 'Avaliação Média',
              color: 'text-yellow-500',
            },
            {
              icon: Award,
              number: '95%',
              label: 'Recomendação',
              color: 'text-green-600',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-8 bg-white rounded-2xl shadow-elegant hover:shadow-2xl transition-all duration-300"
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
