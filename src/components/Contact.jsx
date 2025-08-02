import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Instagram,
  Sparkles,
  Heart,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        'https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            recipientEmail: 'ffbrunoff@yahoo.com.br',
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Converse Comigo',
      description: 'Envie uma mensagem direta atravÃ©s do formulÃ¡rio',
      action: 'Preencha o formulÃ¡rio abaixo',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Acompanhe conteÃºdos e novidades',
      action: 'Seguir @adamyasu',
      link: 'https://www.instagram.com/adamyasu',
    },
    {
      icon: Mail,
      title: 'Email Direto',
      description: 'Para parcerias e colaboraÃ§Ãµes',
      action: 'ffbrunoff@yahoo.com.br',
      link: 'mailto:ffbrunoff@yahoo.com.br',
    },
  ];

  return (
    <section
      id="contact"
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
            <Heart className="w-4 h-4 mr-2" />
            Entre em Contato
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vamos <span className="bg-gradient-text">Conversar?</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estou sempre disponÃ­vel para falar sobre desenvolvimento pessoal,
            trocar ideias ou simplesmente conectar com pessoas que buscam
            transformaÃ§Ã£o.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <option.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {option.description}
              </p>

              {option.link ? (
                <motion.a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors"
                >
                  {option.action}
                  <Send className="ml-2 w-4 h-4" />
                </motion.a>
              ) : (
                <span className="text-accent-600 font-medium">
                  {option.action}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 lg:p-10 rounded-3xl shadow-elegant"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center mr-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Envie uma Mensagem
                </h3>
                <p className="text-gray-600">
                  Responderei o mais breve possÃ­vel
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome Completo
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensagem
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Compartilhe seus pensamentos, dÃºvidas ou feedback..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Enviando...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Enviar Mensagem
                    <Send className="ml-2 w-5 h-5" />
                  </div>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-green-50 text-green-700 rounded-xl border border-green-200"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Mensagem enviada com sucesso! Retornarei em breve.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-red-50 text-red-700 rounded-xl border border-red-200"
                >
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Erro ao enviar mensagem. Tente novamente ou entre em contato
                  por email.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-accent-600 to-purple-700 p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Sparkles className="w-8 h-8 text-accent-200" />
              </div>

              <h3 className="text-2xl font-bold mb-4">Conecte-se Comigo</h3>

              <p className="text-accent-100 text-lg leading-relaxed mb-6">
                Adoro conversar sobre desenvolvimento pessoal, compartilhar
                experiÃªncias e ajudar pessoas em sua jornada de transformaÃ§Ã£o.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Resposta RÃ¡pida</div>
                    <div className="text-accent-200 text-sm">
                      Normalmente em atÃ© 24 horas
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Conversa GenuÃ­na</div>
                    <div className="text-accent-200 text-sm">
                      Interesse real em ajudar vocÃª
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-elegant border border-gray-100"
            >
              <div className="text-4xl text-accent-500 mb-4">"</div>
              <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
                Cada conversa Ã© uma oportunidade de crescimento mÃºtuo. Estou
                sempre disponÃ­vel para conectar com pessoas que buscam
                transformaÃ§Ã£o real.
              </p>
              <cite className="text-accent-700 font-medium not-italic">
                - Adam Yasu
              </cite>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
