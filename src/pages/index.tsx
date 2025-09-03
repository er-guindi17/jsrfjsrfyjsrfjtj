import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Zap, Shield, Clock, Star, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Index() {
  const navigate = useNavigate();

  const handleOrderBot = () => {
    navigate('/pedido');
  };

  const handleOrderBotWithHosting = () => {
    navigate('/pedido');
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
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 10 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <Bot className="w-20 h-20 text-purple-400" />
                <motion.div
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute -top-2 -right-2"
                >
                  <Zap className="w-8 h-8 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              BotForge
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Bots de Discord Personalizados Hechos a Tu Medida 🤖✨
            </motion.p>
            <motion.p
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              ¡Transforma tu servidor de Discord con bots únicos diseñados especialmente para tu comunidad!
              Desde moderación hasta entretenimiento, creamos bots que encajan perfectamente con tu visión.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
                onClick={handleOrderBot}
              >
                ¡Quiero Mi Bot Personalizado!
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg"
              >
                Ver Ejemplos
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Sección de Características */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-4">¿Por Qué Elegir BotForge? 🚀</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              No solo construimos bots - creamos experiencias digitales hechas a medida para tu comunidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: <Bot className="w-6 h-6 text-white" />,
              title: '100% Personalizado',
              desc: 'Cada bot se construye desde cero para cumplir exactamente con tus requisitos y necesidades del servidor',
              color: 'bg-purple-600 hover:border-purple-500'
            }, {
              icon: <Zap className="w-6 h-6 text-white" />,
              title: 'Súper Rápido ⚡',
              desc: 'Código optimizado que garantiza que tu bot responda al instante a comandos y eventos',
              color: 'bg-blue-600 hover:border-blue-500'
            }, {
              icon: <Shield className="w-6 h-6 text-white" />,
              title: 'Seguro y Confiable 🛡️',
              desc: 'Construido con las mejores prácticas de seguridad y manejo robusto de errores para máximo tiempo activo',
              color: 'bg-green-600 hover:border-green-500'
            }].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className={`bg-gray-800 border-gray-700 transition-colors ${card.color}`}>
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${card.color.split(' ')[0]}`}>
                      {card.icon}
                    </div>
                    <CardTitle className="text-white">{card.title}</CardTitle>
                    <CardDescription className="text-gray-400">{card.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Precios */}
      <section className="py-20">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Precios Súper Claros 💰</h2>
            <p className="text-xl text-gray-400">Elige el paquete que mejor se adapte a tus necesidades</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Paquete Bot Personalizado */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-800 border-gray-700 relative hover:scale-105 transition-transform">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Bot de Discord Personalizado</CardTitle>
                  <CardDescription className="text-gray-400">
                    Un bot completamente personalizado construido según tus especificaciones
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">$199</span>
                    <span className="text-gray-400 ml-2">pago único</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Desarrollo de bot completamente personalizado',
                      'Hasta 20 comandos personalizados',
                      'Funciones básicas de moderación',
                      'Código fuente incluido',
                      'Guía de configuración y despliegue',
                      '30 días de soporte'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={handleOrderBot}
                  >
                    ¡Pedir Bot Personalizado!
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Paquete Bot + Hosting */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-800 border-purple-500 relative hover:scale-105 transition-transform">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    ¡Más Popular!
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Bot + Hosting 24/7</CardTitle>
                  <CardDescription className="text-gray-400">
                    Bot personalizado con hosting confiable en la nube incluido
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">$299</span>
                    <span className="text-gray-400 ml-2">+ $9/mes hosting</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Todo lo del Bot Personalizado',
                      'Hosting 24/7 en la nube',
                      '99.9% de tiempo activo garantizado',
                      'Actualizaciones y mantenimiento automático',
                      'Soporte prioritario',
                      'Monitoreo de rendimiento'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    onClick={handleOrderBotWithHosting}
                  >
                    ¡Quiero Bot + Hosting!
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Bot className="w-8 h-8 text-purple-400 mr-2" />
              <span className="text-2xl font-bold text-white">BotForge</span>
            </div>
            <p className="text-gray-400 mb-4">
              Creando bots de Discord personalizados que unen comunidades 💜
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <span>© 2024 BotForge. Todos los derechos reservados.</span>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
