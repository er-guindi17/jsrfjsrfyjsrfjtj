import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, ExternalLink, MessageSquare, Ticket, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Pedido() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleDiscordJoin = () => {
    window.open('https://discord.gg/BnaMtfTXth', '_blank');
  };

  const handleOpenTicket = () => {
    window.open('https://discord.com/channels/1412114615634231499/1412114787910947006', '_blank');
  };

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-950 text-white"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
    >
      {/* Header con botón de regreso */}
      <motion.div
        className="bg-gray-900/50 border-b border-gray-800"
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              onClick={handleBackToHome}
              className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Sección principal */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <div className="flex justify-center mb-6">
              <motion.div
                className="relative"
                initial={{ rotate: -15, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <Bot className="w-16 h-16 text-purple-400" />
                <div className="absolute -top-1 -right-1">
                  <Badge className="bg-green-500 text-white px-2 py-1 text-xs">
                    ¡Listo!
                  </Badge>
                </div>
              </motion.div>
            </div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              ¿Listo para tu bot? 🚀
            </motion.h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              ¡Genial! Estás a solo 3 pasos de tener tu bot personalizado funcionando. 
              Es súper fácil, ¡vamos allá! 🎉
            </p>
          </motion.div>

          {/* Pasos para hacer el pedido */}
          <div className="space-y-6">
            {[
              {
                num: 1,
                color: "purple",
                title: "¡Únete a nuestro Discord! 🎮",
                desc: "Primero necesitas estar en nuestro servidor para poder hacer el pedido",
                text: "Haz clic en el botón para unirte a nuestro Discord. ¡Es gratis y súper rápido!",
                code: "https://discord.gg/xxxxxx",
                btn: {
                  action: handleDiscordJoin,
                  label: "Unirse al Discord",
                  color: "bg-[#5865F2] hover:bg-[#4752C4]",
                  icon: <MessageSquare className="w-4 h-4 mr-2" />
                }
              },
              {
                num: 2,
                color: "blue",
                title: "Abre un ticket de compra 🎫",
                desc: "Ve al canal de tickets y crea uno nuevo para tu pedido",
                text: "Una vez en el Discord, ve al canal de tickets de compra y abre uno nuevo",
                code: "discord.com/channels/1407042605665095792/1407047567556214856",
                btn: {
                  action: handleOpenTicket,
                  label: "Abrir Ticket",
                  color: "bg-blue-600 hover:bg-blue-700",
                  icon: <Ticket className="w-4 h-4 mr-2" />
                }
              },
              {
                num: 3,
                color: "green",
                title: "¡Cuéntanos todo sobre tu bot! 📝",
                desc: "Explica detalladamente cómo quieres que sea tu bot",
                extra: true
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className={`bg-gray-800 border-${step.color}-500/50 hover:border-${step.color}-500 transition-colors`}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-${step.color}-600 rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                        {step.num}
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl">{step.title}</CardTitle>
                        <CardDescription className="text-gray-400">{step.desc}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {!step.extra ? (
                      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <div className="flex-1">
                          <p className="text-gray-300 mb-2">{step.text}</p>
                          <code className={`text-sm text-${step.color}-300 bg-gray-900 px-2 py-1 rounded break-all`}>
                            {step.code}
                          </code>
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            onClick={step.btn.action}
                            className={`${step.btn.color} text-white`}
                          >
                            {step.btn.icon}
                            {step.btn.label}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </motion.div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-gray-300">
                          En el ticket, cuéntanos todo lo que necesitas. ¡Mientras más detalles, mejor! 
                        </p>
                        <motion.div
                          className="bg-gray-900 p-4 rounded-lg"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <h4 className="text-white font-semibold mb-3">📋 Información que nos ayuda:</h4>
                          <ul className="space-y-2 text-gray-300">
                            {["Tipo de bot", "Comandos específicos", "Funciones especiales", "Hosting", "Presupuesto"].map((item, i) => (
                              <li className="flex items-start" key={i}>
                                <span className="text-green-400 mr-2">•</span>
                                <span><strong>{item}:</strong> ...</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                        <motion.div
                          className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7 }}
                        >
                          <p className="text-purple-200">
                            <strong>💡 Tip:</strong> ¡No te preocupes si no sabes todos los detalles técnicos! 
                            Nosotros te ayudamos a definir exactamente lo que necesitas. 
                            Solo cuéntanos qué quieres lograr con tu bot y nosotros nos encargamos del resto 😊
                          </p>
                        </motion.div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Sección de contacto adicional */}
          <motion.div
            className="mt-16 text-center"
            variants={fadeInUp}
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-white mb-4">¿Tienes dudas? 🤔</h3>
                <p className="text-gray-300 mb-6">
                  ¡No hay problema! Estamos aquí para ayudarte en cada paso del proceso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={handleDiscordJoin}
                      variant="outline"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    >
                      Preguntar en Discord
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={handleBackToHome}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
                    >
                      Volver al inicio
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

            {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Bot className="w-8 h-8 text-purple-400 mr-2" />
              <span className="text-2xl font-bold text-white">Discord Bot Shop</span>
            </div>
            <p className="text-gray-400 mb-4">
              Creando bots de Discord personalizados que unen comunidades 💚
            </p>
            <p className="text-gray-400 mb-4">
              Página y servicios creados por er.guindilla
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <span>© 2025 Discord Bot Shop. Todos los derechos reservados.</span>
            </div>
          </div>
        </div>
      </footer>

    </motion.div>
  );
}
