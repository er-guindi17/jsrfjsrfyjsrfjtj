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

  // Animaciones generales
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  // Animación de hover para cards
  const hoverCard = {
    hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(139, 92, 246, 0.5)" }
  };

  // Animación de hover para botones
  const hoverButton = {
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Hero */}
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

          <motion.p 
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            ¡Transforma tu servidor de Discord con bots únicos diseñados especialmente para tu comunidad! 
            Desde moderación hasta entretenimiento, creamos bots que encajan perfectamente con tu visión.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} whileHover="hover" variants={hoverButton}>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
                onClick={handleOrderBot}
              >
                ¡Quiero Mi Bot Personalizado!
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover="hover" variants={hoverButton}>
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg">
                Ver Ejemplos
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Características */}
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
              <motion.div key={index} variants={fadeInUp} whileHover="hover" variants={hoverCard}>
                <Card className={`bg-gray-800 border-gray-700 ${item.borderColor} transition-colors cursor-pointer`}>
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

          <motion.div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer}>
            {[
              { label: "Herramientas de Moderación", icon: <CheckCircle className="w-5 h-5 text-green-400 mr-2" />, desc: "Auto-mod, advertencias, baneos y más" },
              { label: "Comandos Personalizados", icon: <CheckCircle className="w-5 h-5 text-green-400 mr-2" />, desc: "Slash commands hechos a tu medida" },
              { label: "Entretenimiento", icon: <CheckCircle className="w-5 h-5 text-green-400 mr-2" />, desc: "Juegos, música, memes y funciones divertidas" },
              { label: "Estadísticas", icon: <CheckCircle className="w-5 h-5 text-green-400 mr-2" />, desc: "Insights del servidor y estadísticas de usuarios" }
            ].map((item, index) => (
              <motion.div key={index} className="text-center" variants={fadeInUp}>
                <div className="flex items-center justify-center mb-3">
                  {item.icon}
                  <span className="text-white font-semibold">{item.label}</span>
                </div>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Precios */}
      <section className="py-20">
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-4">Precios Súper Claros 💰</h2>
            <p className="text-xl text-gray-400">Elige el paquete que mejor se adapte a tus necesidades</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Bot Personalizado */}
            <motion.div variants={fadeInUp} whileHover="hover" variants={hoverCard}>
              <Card className="bg-gray-800 border-gray-700 relative cursor-pointer">
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
                      "Desarrollo de bot completamente personalizado",
                      "Hasta 20 comandos personalizados",
                      "Funciones básicas de moderación",
                      "Código fuente incluido",
                      "Guía de configuración y despliegue",
                      "30 días de soporte"
                    ].map((text, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {text}
                      </li>
                    ))}
                  </ul>
                  <motion.div whileHover="hover" variants={hoverButton}>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={handleOrderBot}
                    >
                      ¡Pedir Bot Personalizado!
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bot + Hosting */}
            <motion.div variants={fadeInUp} whileHover="hover" variants={hoverCard}>
              <Card className="bg-gray-800 border-purple-500 relative cursor-pointer">
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
                      "Todo lo del Bot Personalizado",
                      "Hosting 24/7 en la nube",
                      "99.9% de tiempo activo garantizado",
                      "Actualizaciones y mantenimiento automático",
                      "Soporte prioritario",
                      "Monitoreo de rendimiento"
                    ].map((text, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {text}
                      </li>
                    ))}
                  </ul>
                  <motion.div whileHover="hover" variants={hoverButton}>
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      onClick={handleOrderBotWithHosting}
                    >
                      ¡Quiero Bot + Hosting!
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
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
        </motion.div>
      </footer>

    </div>
  );
}
