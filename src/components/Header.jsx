import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, BookOpen, Star, User } from 'lucide-react';
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };
  const menuItems = [
    { icon: User, label: 'Sobre', section: 'about' },
    { icon: BookOpen, label: 'Livro', section: 'services' },
    { icon: Star, label: 'Contato', section: 'contact' },
  ];
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-elegant'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754010053499_0.png"
              alt="Adam Yasu"
              className={`h-10 lg:h-12 w-auto transition-all duration-300 ${
                isScrolled ? 'invert-0' : 'invert'
              }`}
            />
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.section)}
                className={`flex items-center space-x-2 font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-accent-600'
                    : 'text-white hover:text-accent-300'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>
          {/* CTA Button Desktop */}
          <motion.a
            href="https://www.amazon.com.br/Peso-Desejo-pr%C3%A1tico-equilibrar-realidade-ebook/dp/B0FB6RWQTR"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex items-center px-6 py-2 bg-gradient-accent text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Comprar Livro
          </motion.a>
          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0,
          }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg"
        >
          <div className="py-4 px-4 space-y-4">
            {menuItems.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ x: 5 }}
                onClick={() => scrollToSection(item.section)}
                className="flex items-center space-x-3 w-full text-left py-2 text-gray-700 hover:text-accent-600 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
            <motion.a
              href="https://www.amazon.com.br/Peso-Desejo-pr%C3%A1tico-equilibrar-realidade-ebook/dp/B0FB6RWQTR"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center w-full px-6 py-3 bg-gradient-accent text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Comprar Livro
            </motion.a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
