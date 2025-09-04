import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Zap, Shield, Clock, Star, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Index() {
  const navigate = useNavigate();

  const handleOrderBot = () => navigate('/pedido');
  const handleOrderBotWithHosting = () => navigate('/pedido');

  const hoverCard = { scale: 1.05, boxShadow: "0px 10px 30px rgba(139, 92, 246, 0.5)" };
  const hoverButton = { scale: 1.05, transition: { type: "spring", stiffness: 300 } };

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Bot className="w-20 h-20 text-purple-400" />
                <div className="absolute -top-2 -right-2">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Discord Bot Shop
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Bots de Discord Personalizados Hechos a Tu Medida 🤖✨
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              ¡Transforma tu servidor de Discord con bots únicos diseñados especialmente para tu comunidad! 
              Desde moderación hasta entretenimiento, creamos bots que encajan perfectamente con tu visión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={hoverButton}>
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
                  onClick={handleOrderBot}
                >
                  ¡Quiero Mi Bot Personalizado!
                </Button>
              </motion.div>
              <motion.div whileHover={hoverButton}>
                
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Características */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">¿Por Qué Elegir Discord Bot Shop? 🚀</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              No solo construimos bots - creamos experiencias digitales hechas a medida para tu comunidad de Discord
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={hoverCard}>
              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors rounded-lg overflow-hidden h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">100% Personalizado</CardTitle>
                  <CardDescription className="text-gray-400">
                    Cada bot se construye desde cero para cumplir exactamente con tus requisitos y necesidades del servidor
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div whileHover={hoverCard}>
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors rounded-lg overflow-hidden h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Súper Rápido ⚡</CardTitle>
                  <CardDescription className="text-gray-400">
                    Código optimizado que garantiza que tu bot responda al instante a comandos y eventos
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div whileHover={hoverCard}>
              <Card className="bg-gray-800 border-gray-700 hover:border-green-500 transition-colors rounded-lg overflow-hidden h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Seguro y Confiable 🛡️</CardTitle>
                  <CardDescription className="text-gray-400">
                    Construido con las mejores prácticas de seguridad y manejo robusto de errores para máximo tiempo activo
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white font-semibold">Herramientas de Moderación</span>
              </div>
              <p className="text-gray-400 text-sm">Auto-mod, advertencias, baneos y más</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white font-semibold">Comandos Personalizados</span>
              </div>
              <p className="text-gray-400 text-sm">Slash commands hechos a tu medida</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white font-semibold">Entretenimiento</span>
              </div>
              <p className="text-gray-400 text-sm">Juegos, música, memes y funciones divertidas</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white font-semibold">Estadísticas</span>
              </div>
              <p className="text-gray-400 text-sm">Insights del servidor, estadísticas de usuarios y más</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Precios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Precios Súper Bajos 💰</h2>
            <p className="text-xl text-gray-400">Elige el paquete que mejor se adapte a tus necesidades (el precio depende de la cantidad de comandos que se le añade al bot pero el precio inicial es el que aparece)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Paquete Bot Personalizado */}
            <Card className="bg-gray-800 border-gray-700 relative">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Bot de Discord Personalizado</CardTitle>
                <CardDescription className="text-gray-400">
                  Un bot completamente personalizado construido según tus especificaciones
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">€10</span>
                  <span className="text-gray-400 ml-2">pago único</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Desarrollo de bot completamente personalizado
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Hasta 20 comandos personalizados
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Funciones básicas de moderación
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Código fuente incluido
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Entrega máximo en 3 días
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    30 días de soporte
                  </li>
                </ul>
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={handleOrderBot}
                >
                  ¡Pedir Bot Personalizado!
                </Button>
              </CardContent>
            </Card>

            {/* Paquete Bot + Hosting */}
            <Card className="bg-gray-800 border-purple-500 relative">
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
                  <span className="text-4xl font-bold text-white">€10</span>
                  <span className="text-gray-400 ml-2">+ €7/mes hosting</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Todo lo del Bot Personalizado
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <Clock className="w-4 h-4 text-purple-400 mr-1" />
                    Hosting 24/7 en la nube
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    100% de tiempo activo garantizado
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Actualizaciones y mantenimiento automático
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Soporte prioritario
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    30% de descuento en la 2° compra (normal o hosting) 
                  </li>
                </ul>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  onClick={handleOrderBotWithHosting}
                >
                  ¡Quiero Bot + Hosting!
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </footer>
    </div>
  );
}
