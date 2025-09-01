import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, ExternalLink, MessageSquare, Ticket, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Pedido() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleDiscordJoin = () => {
    window.open('https://discord.gg/xxxxxx', '_blank');
  };

  const handleOpenTicket = () => {
    window.open('https://discord.com/channels/1407042605665095792/1407047567556214856', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header con botón de regreso */}
      <div className="bg-gray-900/50 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={handleBackToHome}
            className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </div>
      </div>

      {/* Sección principal */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Bot className="w-16 h-16 text-purple-400" />
                <div className="absolute -top-1 -right-1">
                  <Badge className="bg-green-500 text-white px-2 py-1 text-xs">
                    ¡Listo!
                  </Badge>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              ¿Listo para tu bot? 🚀
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              ¡Genial! Estás a solo 3 pasos de tener tu bot personalizado funcionando. 
              Es súper fácil, ¡vamos allá! 🎉
            </p>
          </div>

          {/* Pasos para hacer el pedido */}
          <div className="space-y-6">
            {/* Paso 1 */}
            <Card className="bg-gray-800 border-purple-500/50 hover:border-purple-500 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">¡Únete a nuestro Discord! 🎮</CardTitle>
                    <CardDescription className="text-gray-400">
                      Primero necesitas estar en nuestro servidor para poder hacer el pedido
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex-1">
                    <p className="text-gray-300 mb-2">
                      Haz clic en el botón para unirte a nuestro Discord. ¡Es gratis y súper rápido!
                    </p>
                    <code className="text-sm text-purple-300 bg-gray-900 px-2 py-1 rounded">
                      https://discord.gg/xxxxxx
                    </code>
                  </div>
                  <Button 
                    onClick={handleDiscordJoin}
                    className="bg-[#5865F2] hover:bg-[#4752C4] text-white"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Unirse al Discord
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Paso 2 */}
            <Card className="bg-gray-800 border-blue-500/50 hover:border-blue-500 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">Abre un ticket de compra 🎫</CardTitle>
                    <CardDescription className="text-gray-400">
                      Ve al canal de tickets y crea uno nuevo para tu pedido
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex-1">
                    <p className="text-gray-300 mb-2">
                      Una vez en el Discord, ve al canal de tickets de compra y abre uno nuevo
                    </p>
                    <code className="text-sm text-blue-300 bg-gray-900 px-2 py-1 rounded break-all">
                      discord.com/channels/1407042605665095792/1407047567556214856
                    </code>
                  </div>
                  <Button 
                    onClick={handleOpenTicket}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Ticket className="w-4 h-4 mr-2" />
                    Abrir Ticket
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Paso 3 */}
            <Card className="bg-gray-800 border-green-500/50 hover:border-green-500 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">¡Cuéntanos todo sobre tu bot! 📝</CardTitle>
                    <CardDescription className="text-gray-400">
                      Explica detalladamente cómo quieres que sea tu bot
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    En el ticket, cuéntanos todo lo que necesitas. ¡Mientras más detalles, mejor! 
                  </p>
                  
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <h4 className="text-white font-semibold mb-3">📋 Información que nos ayuda:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span><strong>Tipo de bot:</strong> Moderación, entretenimiento, utilidades, etc.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span><strong>Comandos específicos:</strong> ¿Qué comandos necesitas?</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span><strong>Funciones especiales:</strong> Sistemas de niveles, economía, música, etc.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span><strong>Hosting:</strong> ¿Quieres que lo hosteeemos 24/7 o prefieres hacerlo tú?</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span><strong>Presupuesto:</strong> ¿Cuál es tu rango de precio?</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg">
                    <p className="text-purple-200">
                      <strong>💡 Tip:</strong> ¡No te preocupes si no sabes todos los detalles técnicos! 
                      Nosotros te ayudamos a definir exactamente lo que necesitas. 
                      Solo cuéntanos qué quieres lograr con tu bot y nosotros nos encargamos del resto 😊
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sección de contacto adicional */}
          <div className="mt-16 text-center">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-white mb-4">¿Tienes dudas? 🤔</h3>
                <p className="text-gray-300 mb-6">
                  ¡No hay problema! Estamos aquí para ayudarte en cada paso del proceso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleDiscordJoin}
                    variant="outline" 
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                  >
                    Preguntar en Discord
                  </Button>
                  <Button 
                    onClick={handleBackToHome}
                    variant="outline" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
                  >
                    Volver al inicio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Bot className="w-6 h-6 text-purple-400 mr-2" />
              <span className="text-xl font-bold text-white">BotForge</span>
            </div>
            <p className="text-gray-400 text-sm">
              ¡Estamos emocionados de crear tu bot perfecto! 🚀💜
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}