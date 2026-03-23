import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, Mail, MessageCircle, Target, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Confetti = () => {
  const colors = ['#00d4ff', '#0050e6', '#ffffff', '#00a8cc', '#4dabf7'];
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {Array.from({ length: 60 }).map((_, i) => {
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 1.5;
        const left = Math.random() * 100;
        
        return (
          <motion.div
            key={i}
            initial={{ y: -20, x: 0, rotate: 0, opacity: 1 }}
            animate={{ 
              y: '110vh', 
              rotate: 720,
              opacity: 0
            }}
            transition={{ 
              duration, 
              delay, 
              ease: "linear",
              repeat: Infinity
            }}
            style={{
              position: 'absolute',
              left: `${left}%`,
              width: `${size}px`,
              height: `${size * (Math.random() > 0.5 ? 1 : 2.5)}px`,
              backgroundColor: color,
              borderRadius: '2px',
            }}
          />
        );
      })}
    </div>
  );
};

export default function ThankYouPage() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,80,230,0.22)_0%,transparent_65%)]" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_80%_20%,rgba(0,212,255,0.1)_0%,transparent_50%)]" />
      
      <Confetti />

      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 bg-white/[0.03] border border-brand-cyan/15 rounded-[28px] p-10 sm:p-14 max-w-[620px] w-full shadow-[0_0_80px_rgba(0,80,230,0.15)] text-center"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-[90px] h-[90px] bg-brand-grad rounded-2xl flex items-center justify-center text-black font-bold text-3xl mx-auto mb-7 shadow-[0_0_28px_rgba(0,200,255,0.4)]"
        >
          M
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-brand-grad flex items-center justify-center text-[2.2rem] mx-auto mb-7 shadow-[0_0_40px_rgba(0,212,255,0.3)] text-black"
        >
          <Check size={40} strokeWidth={3} />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-syne text-[clamp(1.9rem,5vw,2.8rem)] font-extrabold text-white leading-[1.1] mb-4"
        >
          Richiesta inviata<br/><span className="text-gradient">con successo!</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[1.05rem] text-brand-body leading-[1.75] mb-9"
        >
          Grazie per averci contattato! Abbiamo ricevuto la tua richiesta e<br/>
          ti risponderemo entro <strong className="text-brand-cyan">24–48 ore</strong> via email o su WhatsApp<br/>
          al numero che hai indicato.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-3.5 mb-9"
        >
          {[
            { i: <Mail size={20} />, t: 'Controlla la tua email', d: 'Riceverai a breve una email di conferma con i dettagli della tua richiesta.' },
            { i: <MessageCircle size={20} />, t: 'Ti contattiamo su WhatsApp', d: 'Un nostro consulente ti scriverà per fissare una call gratuita senza impegno.' },
            { i: <Target size={20} />, t: 'Preventivo personalizzato', d: 'Dopo la call riceverai un preventivo chiaro, dettagliato e senza sorprese.' }
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-3.5 bg-white/[0.04] border border-brand-cyan/15 rounded-2xl p-3.5 text-left">
              <div className="text-brand-cyan mt-0.5">{s.i}</div>
              <div>
                <strong className="block font-syne text-[0.92rem] text-white mb-0.5">{s.t}</strong>
                <span className="text-[0.82rem] text-brand-body leading-relaxed">{s.d}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3.5"
        >
          <a 
            href="https://wa.me/39XXXXXXXXXX?text=Ciao!%20Ho%20appena%20compilato%20il%20form%20sul%20vostro%20sito%20e%20vorrei%20ricevere%20informazioni%20sul%20mio%20progetto." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#25d366] to-[#128c7e] text-white font-syne font-bold text-[0.95rem] px-7 py-3.5 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-[#25d366]/30"
          >
            💬 Scrivici su WhatsApp
          </a>
          <Link 
            to="/" 
            className="bg-transparent border-1.5 border-brand-cyan/15 text-brand-body font-syne font-semibold text-[0.9rem] px-7 py-3.5 rounded-full hover:border-brand-cyan hover:text-brand-cyan transition-all flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Torna al sito
          </Link>
        </motion.div>
      </motion.div>

      <p className="relative z-20 mt-7 text-[0.75rem] text-brand-muted/40">© 2025 Moise Web Srl — The future is digital</p>
    </div>
  );
}
