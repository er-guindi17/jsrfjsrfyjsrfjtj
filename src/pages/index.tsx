import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Zap, Shield, Clock, Star, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Index() {
  const navigate = useNavigate();

  const handleOrderBot = () => {
    navigate('/pedido');
  };

  const handleOrderBotWithHosting = () => {
    navigate('/pedido');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Sección Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-950"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
        >
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
              className="relative"
            >
              <Bot className="w-20 h-20 text-purple-400" />
              <motion.div
                initial={{ rotate: -45, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-2 -right-2"
              >
                <Zap className="w-8 h-8 text-yellow-400" />
              </motion.div>
            </motion.div>
          </div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            BotForge
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Bots de Discord Personalizados Hechos a Tu Medida 🤖✨
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
                onClick={handleOrderBot}
              >
                ¡Quiero Mi Bot Personalizado!
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg">
                Ver Ejemplos
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Sección de Características */}
      <section className="py-20 bg-gray-900/50">
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-4">¿Por Qué Elegir BotForge? 🚀</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              No solo construimos bots - creamos experiencias digitales hechas a medida para tu comunidad
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: <Bot className="w-6 h-6 text-white" />,
              title: "100% Personalizado",
              description: "Cada bot se construye desde cero para cumplir exactamente con tus requisitos y necesidades del servidor",
              color: "bg-purple-600",
              borderColor: "hover:border-purple-500"
            },{
              icon: <Zap className="w-6 h-6 text-white" />,
              title: "Súper Rápido ⚡",
              description: "Código optimizado que garantiza que tu bot responda al instante a comandos y eventos",
              color: "bg-blue-600",
              borderColor: "hover:border-blue-500"
            },{
              icon: <Shield className="w-6 h-6 text-white" />,
              title: "Seguro y Confiable 🛡️",
              description: "Construido con las mejores prácticas de seguridad y manejo robusto de errores para máximo tiempo activo",
              color: "bg-green-600",
              borderColor: "hover:border-green-500"
            }].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`bg-gray-800 border-gray-700 ${item.borderColor} transition-colors`}>
                  <CardHeader>
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                      {item.icon}
                    </div>
                    <CardTitle className="text-white">{item.title}</CardTitle>
                    <CardDescription className="text-gray-400">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Puedes aplicar animaciones similares a Sección de Precios y Footer */}
    </div>
  );
}
