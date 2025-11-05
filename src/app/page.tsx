'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Heart, Users, Gift, Zap, Star, Lock, MessageCircle } from 'lucide-react'

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

const PulseButton = ({ children, href, className = "", variant = "primary" }: { 
  children: React.ReactNode, 
  href: string, 
  className?: string,
  variant?: "primary" | "secondary"
}) => {
  const [isPressed, setIsPressed] = useState(false)

  const baseClasses = "inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl"
  const primaryClasses = "bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 text-white hover:from-pink-600 hover:via-red-600 hover:to-pink-700 hover:shadow-pink-500/50"
  const secondaryClasses = "bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white hover:from-purple-700 hover:via-pink-700 hover:to-red-700 hover:shadow-purple-500/50"

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variant === "primary" ? primaryClasses : secondaryClasses} ${className}`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === "primary" ? "0 20px 40px rgba(236, 72, 153, 0.4)" : "0 20px 40px rgba(147, 51, 234, 0.4)"
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      onTapStart={() => setIsPressed(true)}
      onTapEnd={() => setIsPressed(false)}
      style={{
        filter: isPressed ? 'brightness(1.2)' : 'brightness(1)',
      }}
    >
      <motion.span
        animate={isPressed ? { scale: 1.1 } : { scale: 1 }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.span>
    </motion.a>
  )
}

const FeatureCard = ({ icon: Icon, title, description, delay }: {
  icon: any,
  title: string,
  description: string,
  delay: number
}) => (
  <AnimatedSection delay={delay}>
    <motion.div 
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="bg-gradient-to-r from-pink-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  </AnimatedSection>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Header */}
      <motion.header 
        className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.img 
            src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/43fde210-3ecf-472a-8a8d-12a62c52e68f.jpg" 
            alt="Clube do Contos" 
            className="h-12 w-auto"
            whileHover={{ scale: 1.05 }}
          />
          <PulseButton href="https://t.me/CLUBEDOCONTOS_BOT" className="text-sm px-6 py-2">
            💋 Entrar Agora
          </PulseButton>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-600 bg-clip-text text-transparent">
                Histórias reais
              </span>
              <br />
              de brasileiros(as)
              <br />
              <span className="text-4xl md:text-5xl text-gray-300">do seu cotidiano</span>
            </h1>
          </motion.div>

          <AnimatedSection delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Descubra um universo de experiências íntimas, confissões reais e histórias que você nunca imaginou que existissem.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <PulseButton href="https://t.me/CLUBEDOCONTOS_BOT" className="text-xl px-12 py-6 mb-8">
              💋 Quero participar deste grupo no Telegram
            </PulseButton>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>+5.000 membros</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                <span>4.9/5 avaliação</span>
              </div>
              <div className="flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                <span>100% privado</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Exclusive Section */}
      <section className="py-20 px-6 bg-black/30">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O que acontece no <span className="text-pink-400">Clube</span>, fica no <span className="text-pink-400">Clube</span>.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              No grupo, você recebe <strong className="text-pink-400">contos exclusivos</strong>, <strong className="text-pink-400">confissões anônimas</strong> e participa de <strong className="text-pink-400">dinâmicas valendo prêmios e Pix</strong>. Para receber o Pix tem que enviar seus contos.
              <br /><br />
              <span className="text-2xl font-semibold text-white">Não é apenas leitura, é uma experiência de prazer em comunidade.</span>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <PulseButton href="https://t.me/CLUBEDOCONTOS_BOT" variant="secondary" className="text-xl px-12 py-6">
              💋 Entrar no Clube agora a partir de R$9,90
            </PulseButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Por que mais de <span className="text-pink-400">5.000 brasileiros</span> já fazem parte?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={MessageCircle}
              title="Contos Exclusivos Diários"
              description="Receba histórias inéditas e picantes todos os dias, escritas por membros reais da comunidade."
              delay={0.2}
            />
            <FeatureCard
              icon={Gift}
              title="Prêmios e Pix"
              description="Participe de dinâmicas semanais e ganhe prêmios em dinheiro enviando seus próprios contos."
              delay={0.4}
            />
            <FeatureCard
              icon={Lock}
              title="Ambiente Seguro"
              description="Comunidade privada e discreta, onde você pode ser você mesmo sem julgamentos."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Pronto para descobrir um mundo de <span className="text-pink-400">prazer e conexão</span>?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Junte-se a milhares de brasileiros que já descobriram o prazer de compartilhar e vivenciar histórias reais. 
              <strong className="text-pink-400"> Sua primeira semana custa apenas R$9,90.</strong>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <PulseButton href="https://t.me/CLUBEDOCONTOS_BOT" className="text-2xl px-16 py-8 mb-8">
              💋 Quero fazer parte do Clube agora!
            </PulseButton>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center">
                <Lock className="w-4 h-4 mr-2 text-green-400" />
                <span>100% seguro e privado</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-2 text-pink-400" />
                <span>Satisfação garantida</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/50 border-t border-white/10">
        <div className="container mx-auto text-center">
          <motion.img 
            src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/43fde210-3ecf-472a-8a8d-12a62c52e68f.jpg" 
            alt="Clube do Contos" 
            className="h-8 w-auto mx-auto mb-4 opacity-70"
            whileHover={{ opacity: 1 }}
          />
          <p className="text-gray-500 text-sm">
            © 2024 Clube do Contos. Todos os direitos reservados. Conteúdo para maiores de 18 anos.
          </p>
        </div>
      </footer>
    </div>
  )
}