import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  ShoppingCart, 
  Settings, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Star, 
  Mail, 
  Phone, 
  Globe,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-[200] h-[72px] flex items-center justify-between px-[5%] transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl bg-brand-bg/70 border-b border-white/10' : 'bg-transparent'}`}>
      <a href="#" className="flex items-center gap-3 no-underline">
        <div className="w-10 h-10 bg-brand-grad rounded-lg flex items-center justify-center text-black font-bold text-xl">M</div>
        <span className="font-bold text-[0.95rem] text-brand-white tracking-tight">Moise Web Srl</span>
      </a>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#services" className="text-[0.85rem] font-medium text-brand-body hover:text-brand-white transition-colors">Servizi</a>
        <a href="#portfolio" className="text-[0.85rem] font-medium text-brand-body hover:text-brand-white transition-colors">Portfolio</a>
        <a href="#contact" className="text-[0.85rem] font-medium text-brand-body hover:text-brand-white transition-colors">Contatti</a>
        <a href="#contact" className="inline-flex items-center gap-2 bg-brand-grad text-black font-semibold text-[0.85rem] px-[22px] py-[10px] rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-brand-cyan/20">
          Richiedi preventivo <ArrowRight size={16} />
        </a>
      </div>

      <button className="md:hidden text-brand-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[72px] left-0 right-0 bg-brand-surf border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-body">Servizi</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-body">Portfolio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-body">Contatti</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-brand-grad text-black font-bold text-center py-3 rounded-xl">Richiedi preventivo</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100svh] grid place-items-center pt-[120px] pb-[80px] px-[5%] text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(rgba(0,200,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,255,0.025)_1px,transparent_1px)] bg-[length:56px_56px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_80%)]"></div>
      
      {/* Animated Orbs - Responsive sizes */}
      <motion.div animate={{ y: [0, -26, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-blue/15 rounded-full blur-[60px] sm:blur-[90px] top-[-8%] left-[5%] z-0" />
      <motion.div animate={{ y: [0, -26, 0] }} transition={{ duration: 9, delay: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute w-[200px] sm:w-[380px] h-[200px] sm:h-[380px] bg-brand-cyan/10 rounded-full blur-[60px] sm:blur-[90px] top-[20%] right-[-4%] z-0" />
      <motion.div animate={{ y: [0, -26, 0] }} transition={{ duration: 11, delay: 1, repeat: Infinity, ease: "easeInOut" }} className="absolute w-[180px] sm:w-[280px] h-[180px] sm:h-[280px] bg-brand-blue/5 rounded-full blur-[60px] sm:blur-[90px] bottom-[5%] left-[32%] z-0" />

      <div className="relative z-10 max-w-[840px] w-full">
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-[0.65rem] sm:text-[0.72rem] font-medium tracking-[0.13em] uppercase text-brand-cyan mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#00c8ff] animate-pulse"></span>
          Agenzia Web — Italia
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-[clamp(2.4rem,8vw,5rem)] leading-[1.1] sm:leading-[1.06] tracking-[-0.025em] text-brand-white"
        >
          Il sito web che<br/>la tua azienda <em className="italic text-gradient">merita</em>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="text-[0.95rem] sm:text-[1.05rem] font-light leading-[1.78] text-brand-body max-w-[540px] mx-auto mt-5 px-4"
        >
          Progettiamo siti web su misura per le aziende italiane — veloci, moderni e progettati per convertire.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26 }}
          className="flex flex-col sm:flex-row justify-center gap-3.5 mt-10 px-6"
        >
          <a href="#contact" className="btn-p group w-full sm:w-auto justify-center">
            Inizia il tuo progetto <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="btn-g group w-full sm:w-auto justify-center">
            Guarda i nostri lavori <ArrowRight size={18} className="rotate-90 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36 }}
          className="grid grid-cols-2 sm:flex mt-[60px] justify-center border border-white/10 rounded-2xl bg-brand-surf/30 backdrop-blur-md overflow-hidden max-w-[520px] mx-auto"
        >
          {[
            { n: '50+', l: 'Progetti' },
            { n: '100%', l: 'Soddisfatti' },
            { n: '48h', l: 'Risposta' },
            { n: '5★', l: 'Rating' }
          ].map((s, i) => (
            <div key={i} className={`py-[18px] px-3 text-center border-white/10 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b sm:border-b-0' : ''} sm:flex-1 ${i < 3 ? 'sm:border-r' : 'sm:border-r-0'}`}>
              <span className="font-serif text-[1.5rem] sm:text-[1.85rem] italic text-gradient block leading-none">{s.n}</span>
              <span className="text-[0.6rem] sm:text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-brand-muted mt-1.5 block">{s.l}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Logos = () => (
  <div id="logos" className="bg-brand-surf border-y border-white/10">
    <div className="max-w-[1140px] mx-auto py-6 px-[5%] flex items-center justify-center gap-2.5 flex-wrap">
      <span className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-brand-muted mr-1.5 whitespace-nowrap">Settori serviti</span>
      {['Artigianato', 'Ristorazione', 'Salute & Benessere', 'E-commerce', 'Personal Trainer', 'Edilizia', 'Moda', 'Startup'].map((l, i) => (
        <span key={i} className="text-[0.76rem] font-medium text-brand-body bg-white/5 border border-white/10 rounded-full px-4 py-1.5 whitespace-nowrap hover:border-brand-cyan hover:text-brand-white transition-all cursor-default">
          {l}
        </span>
      ))}
    </div>
  </div>
);

const PainPoints = () => (
  <section id="pain" className="bg-brand-bg">
    <div className="max-w-[1140px] mx-auto py-24 px-[5%]">
      <motion.div 
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-brand-cyan mb-4 before:content-[''] before:block before:w-[18px] before:h-[1px] before:bg-brand-cyan">Il problema</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.1rem)] leading-[1.1] tracking-[-0.022em] text-brand-white mb-3.5">Perché molte aziende<br/>faticano <em className="italic text-gradient">online</em></h2>
        <p className="text-[0.95rem] font-light leading-[1.78] text-brand-body max-w-[500px]">Il web è pieno di agenzie poco trasparenti, preventivi gonfiati e siti consegnati in ritardo. Noi siamo l'alternativa.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] border border-white/10 rounded-3xl overflow-hidden bg-white/10">
        {[
          { n: '01', t: 'Non sai a chi affidarti', d: 'Troppi freelance che spariscono dopo il pagamento. Noi siamo un\'azienda con contratto scritto e supporto reale.' },
          { n: '02', t: 'Prezzi poco trasparenti', d: 'Preventivi che cambiano, costi nascosti, canoni mai comunicati. Con noi sai tutto prima di firmare.' },
          { n: '03', t: 'Consegne in ritardo', d: 'Mesi di attesa per un sito mediocre. Noi rispettiamo le scadenze e ti aggiorniamo ogni settimana.' },
          { n: '04', t: 'Siti che non convertono', d: 'Un sito bello ma inutile. Ogni progetto che realizziamo è pensato per portarti clienti.' }
        ].map((p, i) => (
          <div key={i} className="bg-brand-surf p-[34px_26px] hover:bg-[#090f1e] transition-colors relative group overflow-hidden">
            <div className="absolute inset-0 bg-brand-grad opacity-0 group-hover:opacity-[0.03] transition-opacity" />
            <div className="font-serif text-[2.8rem] italic text-gradient leading-none mb-3.5 opacity-45">{p.n}</div>
            <h3 className="text-[0.95rem] font-semibold text-brand-white mb-1.5 tracking-tight">{p.t}</h3>
            <p className="text-[0.83rem] font-light leading-[1.68] text-brand-body">{p.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = ({ onSelectService }: { onSelectService: (s: string) => void }) => (
  <section id="services" className="bg-brand-surf border-t border-white/10">
    <div className="max-w-[1140px] mx-auto py-24 px-[5%]">
      <motion.div 
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[600px]"
      >
        <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-brand-cyan mb-4 before:content-[''] before:block before:w-[18px] before:h-[1px] before:bg-brand-cyan">Soluzioni</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.1rem)] leading-[1.1] tracking-[-0.022em] text-brand-white mb-3.5">Tre pacchetti,<br/>ogni <em className="italic text-gradient">esigenza</em> coperta</h2>
        <p className="text-[0.95rem] font-light leading-[1.78] text-brand-body">Scegli il servizio più adatto alla tua attività. Ti guideremo verso la scelta giusta in una call gratuita.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px] mt-[52px]">
        {/* Landing Page */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-[34px_28px] relative overflow-hidden group hover:border-brand-cyan/35 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-blue/15 transition-all cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-[13px] bg-gradient-to-br from-brand-blue/20 to-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center text-[1.4rem] mb-[22px]">🚀</div>
          <h3 className="font-serif text-[1.4rem] font-normal text-brand-white mb-[9px] tracking-tight">Landing Page</h3>
          <p className="text-[0.85rem] font-light leading-[1.7] text-brand-body mb-[22px]">Pagina professionale, veloce e ottimizzata — il punto di partenza per presentarsi online in modo serio.</p>
          <ul className="mb-6">
            {['Design responsive mobile-first', 'Privacy Policy, Cookie & Termini', 'Ottimizzazione SEO on-page', 'Form di contatto funzionante', 'Integrazione Google Analytics', 'Consegna in 5–7 giorni lavorativi'].map((l, i) => (
              <li key={i} className="text-[0.8rem] font-normal text-brand-body py-[7px] border-b border-white/5 flex gap-2.5 items-start last:border-none">
                <span className="w-[5px] h-[5px] rounded-full bg-brand-cyan mt-[6px] flex-shrink-0"></span>
                {l}
              </li>
            ))}
          </ul>
          <button onClick={() => onSelectService('Landing Page')} className="w-full bg-transparent border border-white/10 text-brand-white font-semibold text-[0.85rem] py-3 rounded-xl hover:border-brand-cyan hover:bg-brand-cyan/5 transition-all flex items-center justify-center gap-2">
            Scegli questo piano <ArrowRight size={16} />
          </button>
        </div>

        {/* E-commerce */}
        <div className="bg-gradient-to-br from-brand-blue/10 to-brand-cyan/5 border border-brand-cyan/30 rounded-3xl p-[34px_28px] relative overflow-hidden group hover:border-brand-cyan/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-blue/20 transition-all cursor-pointer">
          <span className="absolute top-[18px] right-[18px] bg-brand-grad text-black text-[0.6rem] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full">Più richiesto</span>
          <div className="w-[50px] h-[50px] rounded-[13px] bg-gradient-to-br from-brand-blue/20 to-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center text-[1.4rem] mb-[22px]">🛒</div>
          <h3 className="font-serif text-[1.4rem] font-normal text-brand-white mb-[9px] tracking-tight">Sito E-commerce</h3>
          <p className="text-[0.85rem] font-light leading-[1.7] text-brand-body mb-[22px]">Piattaforma completa per vendere online con catalogo, pagamenti sicuri e pannello ordini avanzato.</p>
          <ul className="mb-6">
            {['Catalogo prodotti illimitato', 'Stripe, PayPal, bonifico e altri', 'Gestione ordini e spedizioni', 'Dashboard admin personalizzata', 'Email automatiche e fatturazione', 'Privacy, Cookie & Termini inclusi', '30 giorni supporto post-lancio'].map((l, i) => (
              <li key={i} className="text-[0.8rem] font-normal text-brand-body py-[7px] border-b border-white/5 flex gap-2.5 items-start last:border-none">
                <span className="w-[5px] h-[5px] rounded-full bg-brand-cyan mt-[6px] flex-shrink-0"></span>
                {l}
              </li>
            ))}
          </ul>
          <button onClick={() => onSelectService('Sito E-commerce')} className="w-full bg-brand-grad text-black font-bold text-[0.85rem] py-3 rounded-xl hover:opacity-90 hover:shadow-lg hover:shadow-brand-cyan/30 transition-all flex items-center justify-center gap-2">
            Scegli questo piano <ArrowRight size={16} />
          </button>
        </div>

        {/* Gestionale */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-[34px_28px] relative overflow-hidden group hover:border-brand-cyan/35 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-blue/15 transition-all cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-[13px] bg-gradient-to-br from-brand-blue/20 to-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center text-[1.4rem] mb-[22px]">⚙️</div>
          <h3 className="font-serif text-[1.4rem] font-normal text-brand-white mb-[9px] tracking-tight">Gestionale & Area Membri</h3>
          <p className="text-[0.85rem] font-light leading-[1.7] text-brand-body mb-[22px]">Soluzione enterprise con backend avanzato, abbonamenti ricorrenti e contenuti riservati per i tuoi iscritti.</p>
          <ul className="mb-6">
            {['Area riservata con login sicuro', 'Abbonamenti mensili automatici', 'Contenuti bloccati per periodo', 'Pagamenti ricorrenti (Stripe)', 'Dashboard clienti + analytics', 'Ideale per coach, trainer, scuole', 'Automazioni email e notifiche'].map((l, i) => (
              <li key={i} className="text-[0.8rem] font-normal text-brand-body py-[7px] border-b border-white/5 flex gap-2.5 items-start last:border-none">
                <span className="w-[5px] h-[5px] rounded-full bg-brand-cyan mt-[6px] flex-shrink-0"></span>
                {l}
              </li>
            ))}
          </ul>
          <button onClick={() => onSelectService('Sito + Gestionale e Area Membri')} className="w-full bg-transparent border border-white/10 text-brand-white font-semibold text-[0.85rem] py-3 rounded-xl hover:border-brand-cyan hover:bg-brand-cyan/5 transition-all flex items-center justify-center gap-2">
            Scegli questo piano <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const projects = [
    { name: "L'Arte Coperture", url: 'lartecoperture.com', fullUrl: 'https://lartecoperture.com', tag: 'Edilizia & Coperture' },
    { name: "SHS Italia", url: 'shs-italia.com', fullUrl: 'https://shs-italia.com', tag: 'Servizi Professionali' },
    { name: "BE Ristrutturazioni", url: 'be-ristrutturazioni.it', fullUrl: 'https://be-ristrutturazioni.it', tag: 'Edilizia & Design' },
    { name: "House of Street Style", url: 'houseofstreetstyle.com', fullUrl: 'https://houseofstreetstyle.com', tag: 'Fashion E-commerce' }
  ];

  return (
    <section id="portfolio" className="bg-brand-bg border-t border-white/10">
      <div className="max-w-[1140px] mx-auto py-24 px-[5%]">
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-[580px] mx-auto"
        >
          <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-brand-cyan mb-4 before:content-[''] before:block before:w-[18px] before:h-[1px] before:bg-brand-cyan">Portfolio</span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.1rem)] leading-[1.1] tracking-[-0.022em] text-brand-white mb-3.5">Siti reali,<br/>risultati <em className="italic text-gradient">concreti</em></h2>
          <p className="text-[0.95rem] font-light leading-[1.78] text-brand-body">Ogni progetto è stato progettato e sviluppato su misura. Clicca per visitare il sito.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] mt-[52px]">
          {projects.map((p, i) => (
            <a key={i} href={p.fullUrl} target="_blank" rel="noopener noreferrer" className="group block relative rounded-3xl overflow-hidden border border-white/10 aspect-video bg-brand-surf transition-all hover:border-brand-cyan/35 hover:shadow-2xl hover:shadow-brand-blue/20 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-[30px] bg-brand-bg/90 border-b border-white/5 flex items-center px-3 gap-1.5 z-20">
                <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                <div className="w-2 h-2 rounded-full bg-[#27c840]" />
                <div className="ml-2 bg-white/5 border border-white/5 rounded-md h-[17px] flex-1 flex items-center px-2 text-[0.58rem] text-brand-muted overflow-hidden whitespace-nowrap">{p.url}</div>
              </div>
              
              <div className="absolute inset-[30px_0_0] overflow-hidden pointer-events-none">
                <div className="w-[200%] h-[200%] scale-50 origin-top-left bg-brand-surf flex items-center justify-center text-brand-muted text-sm italic">
                  Preview di {p.name}
                </div>
              </div>

              <div className="absolute inset-0 z-30 bg-gradient-to-t from-brand-bg/95 via-transparent to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="font-serif text-base text-brand-white mb-1">{p.name}</div>
                <div className="text-[0.68rem] font-semibold uppercase tracking-widest text-brand-cyan">{p.tag}</div>
              </div>

              <div className="absolute top-10 right-3.5 z-40 w-[34px] h-[34px] rounded-full bg-brand-grad flex items-center justify-center text-black font-bold opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all">
                <ArrowRight size={14} className="-rotate-45" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-30 p-[9px_16px_12px] bg-gradient-to-t from-brand-bg/95 to-transparent">
                <div className="font-serif text-[0.9rem] text-brand-white">{p.name}</div>
                <div className="text-[0.67rem] text-brand-muted mt-0.5">{p.url} · {p.tag}</div>
              </div>
            </a>
          ))}
        </div>
        <p className="text-center text-[0.78rem] text-brand-muted mt-7">Tutti i siti sopra sono stati progettati, sviluppati e consegnati da Moise Web Srl.</p>
      </div>
    </section>
  );
};

const Process = () => (
  <section id="process" className="bg-brand-surf border-t border-white/10">
    <div className="max-w-[1140px] mx-auto py-24 px-[5%]">
      <motion.div 
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-[560px] mx-auto"
      >
        <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-brand-cyan mb-4 before:content-[''] before:block before:w-[18px] before:h-[1px] before:bg-brand-cyan">Come lavoriamo</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.1rem)] leading-[1.1] tracking-[-0.022em] text-brand-white">Dal primo contatto<br/>al <em className="italic text-gradient">lancio</em></h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mt-[52px] relative">
        <div className="hidden md:block absolute top-[27px] left-[8%] right-[8%] h-[1px] bg-gradient-to-r from-brand-blue to-brand-cyan opacity-20 pointer-events-none" />
        {[
          { n: '1', t: 'Richiesta', d: 'Compili il form in 2 minuti.' },
          { n: '2', t: 'Consulenza', d: 'Call gratuita entro 48 ore.' },
          { n: '3', t: 'Preventivo', d: 'Proposta chiara e dettagliata.' },
          { n: '4', t: 'Sviluppo', d: 'Aggiornamenti costanti.' },
          { n: '5', t: '🚀 Online', d: 'Lancio + supporto post.' }
        ].map((s, i) => (
          <div key={i} className="text-center px-3.5 relative z-10">
            <div className="w-[54px] h-[54px] rounded-full mx-auto mb-4 bg-brand-grad flex items-center justify-center font-serif italic text-[1.25rem] text-black shadow-[0_0_0_5px_rgba(0,200,255,0.07)]">
              {s.n}
            </div>
            <h4 className="text-[0.88rem] font-semibold text-brand-white mb-1.5">{s.t}</h4>
            <p className="text-[0.76rem] font-light text-brand-body leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyUs = () => (
  <section id="why" className="bg-brand-bg border-t border-white/10">
    <div className="max-w-[1140px] mx-auto py-24 px-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-center">
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-brand-cyan mb-4 before:content-[''] before:block before:w-[18px] before:h-[1px] before:bg-brand-cyan">Perché noi</span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.1rem)] leading-[1.1] tracking-[-0.022em] text-brand-white mb-3.5">Il partner digitale<br/>che <em className="italic text-gradient">mancava</em></h2>
          <p className="text-[0.95rem] font-light leading-[1.78] text-brand-body">Non siamo una grande agenzia impersonale. Siamo il tuo team — vicini, onesti, reattivi.</p>
          <div className="flex flex-col gap-4 mt-8">
            {[
              { i: '🎯', t: 'Trasparenza totale', d: 'Prezzi fissi, nessun costo nascosto. Tutto per iscritto prima di iniziare.' },
              { i: '⚡', t: 'Risposta in 48 ore', d: 'Garantiamo un feedback entro due giorni lavorativi, senza eccezioni.' },
              { i: '📱', t: 'Mobile-first & veloce', d: 'Ogni sito è perfetto su smartphone e ottimizzato per i motori di ricerca.' },
              { i: '🤝', t: 'Supporto continuativo', d: 'Non spariremo dopo la consegna. Siamo il tuo reparto web esterno.' }
            ].map((w, i) => (
              <div key={i} className="flex gap-3.5 p-[18px] bg-white/5 border border-white/10 rounded-2xl hover:border-brand-cyan/35 hover:bg-brand-cyan/5 transition-all group">
                <div className="w-[38px] h-[38px] rounded-lg flex-shrink-0 bg-gradient-to-br from-brand-blue/25 to-brand-cyan/15 border border-brand-cyan/10 flex items-center justify-center text-base">{w.i}</div>
                <div>
                  <h4 className="text-[0.88rem] font-semibold text-brand-white mb-1">{w.t}</h4>
                  <p className="text-[0.8rem] font-light text-brand-body leading-relaxed">{w.d}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="flex items-center justify-center min-h-[340px] relative">
          <div className="absolute w-[300px] h-[300px] rounded-full border border-brand-cyan/10" />
          <div className="absolute w-[200px] h-[200px] rounded-full border border-brand-blue/15" />
          <div className="absolute w-[100px] h-[100px] rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-cyan/5" />
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="w-[120px] h-[120px] bg-brand-grad rounded-3xl flex items-center justify-center text-4xl shadow-2xl shadow-brand-cyan/40 relative z-10">
            M
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testi" className="bg-brand-surf border-t border-white/10">
    <div className="max-w-[1140px] mx-auto py-24 px-[5%]">
      <motion.div 
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-[540px] mx-auto"
      >
        <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-brand-cyan mb-4 before:content-[''] before:block before:w-[18px] before:h-[1px] before:bg-brand-cyan">Clienti</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.1rem)] leading-[1.1] tracking-[-0.022em] text-brand-white">Lo dicono <em className="italic text-gradient">loro</em></h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-[52px]">
        {[
          { q: 'Finalmente un\'agenzia seria. Il sito è bellissimo, consegnato in tempo, e ora riceviamo richieste ogni settimana tramite il form di contatto.', a: 'Marco C.', s: 'Officina Meccanica — Bologna' },
          { q: 'Il mio e-commerce funziona alla perfezione. Gestisco tutto da sola e il supporto è sempre disponibile quando ne ho bisogno.', a: 'Sara B.', s: 'Boutique Online — Milano' },
          { q: 'Come personal trainer avevo bisogno di gestire abbonamenti e schede. Moise Web ha realizzato esattamente quello che immaginavo, e anche di più.', a: 'Luca R.', s: 'Personal Trainer — Roma' }
        ].map((t, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-[26px_22px] hover:border-brand-cyan/35 hover:-translate-y-1 transition-all">
            <div className="text-brand-cyan text-[0.88rem] mb-3.5 tracking-[2px]">★★★★★</div>
            <blockquote className="font-serif italic text-[0.97rem] text-brand-white leading-[1.65] mb-[18px]">"{t.q}"</blockquote>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-grad flex items-center justify-center font-serif font-bold text-[0.85rem] text-black">
                {t.a.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <strong className="block text-[0.83rem] text-brand-white font-semibold">{t.a}</strong>
                <span className="text-[0.73rem] text-brand-muted">{t.s}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactForm = ({ selectedService }: { selectedService: string }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    azienda: '',
    settore: '',
    descrizione: '',
    servizio: selectedService,
    messaggio: '',
    fonte: ''
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, servizio: selectedService }));
    }
  }, [selectedService]);

  const validate = (s: number) => {
    const newErrors: Record<string, boolean> = {};
    if (s === 1) {
      if (!formData.nome.trim()) newErrors.nome = true;
      if (!formData.cognome.trim()) newErrors.cognome = true;
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true;
      if (!formData.telefono.trim()) newErrors.telefono = true;
    } else if (s === 2) {
      if (!formData.azienda.trim()) newErrors.azienda = true;
      if (!formData.settore) newErrors.settore = true;
      if (!formData.descrizione.trim()) newErrors.descrizione = true;
    } else if (s === 3) {
      if (!formData.servizio) newErrors.servizio = true;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validate(step)) {
      setStep(prev => prev + 1);
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(4)) return;

    setIsSubmitting(true);
    try {
      await fetch('https://hook.eu1.make.com/99hr9pzyr50bypvipfiws5jzcliuk86r', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() })
      });
      navigate('/grazie');
    } catch (err) {
      alert('Errore di rete. Riprova o scrivici su WhatsApp.');
      setIsSubmitting(false);
    }
  };

  const progress = (step / 4) * 100;

  return (
    <section id="contact" className="bg-brand-bg border-t border-white/10">
      <div className="max-w-[1140px] mx-auto py-24 px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-[60px] items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-[90px]"
          >
            <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-brand-cyan mb-4 before:content-[''] before:block before:w-[18px] before:h-[1px] before:bg-brand-cyan">Contatti</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.1rem)] leading-[1.1] tracking-[-0.022em] text-brand-white mb-3.5">Parliamo del<br/>tuo <em className="italic text-gradient">progetto</em></h2>
            <p className="text-[0.95rem] font-light leading-[1.78] text-brand-body">Compila il form in 2 minuti. Riceverai una consulenza gratuita senza impegno.</p>
            <div className="flex flex-col gap-3 mt-6">
              {[
                { i: '📧', t: 'Email di conferma', d: 'immediata dopo l\'invio.' },
                { i: '📱', t: 'Ti contattiamo via email o WhatsApp', d: 'entro 24–48h.' },
                { i: '🎯', t: 'Preventivo personalizzato', d: 'e dettagliato, nessuna sorpresa.' },
                { i: '🔒', t: 'I tuoi dati sono al sicuro', d: '— nessuno spam, mai.' }
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-[30px] h-[30px] rounded-lg flex-shrink-0 bg-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center text-[0.82rem]">{b.i}</div>
                  <p className="text-[0.83rem] font-light text-brand-body leading-relaxed"><strong>{b.t}</strong> {b.d}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surf border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-brand-blue/10"
          >
            <div className="bg-white/5 rounded-full h-[3px] mb-2 overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} className="h-full bg-brand-grad rounded-full" />
            </div>
            <div className="flex justify-between mb-7">
              <span className="text-[0.68rem] text-brand-muted font-medium uppercase tracking-wider">Step {step} di 4</span>
              <div className="flex gap-1.5 items-center">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === step ? 'bg-brand-cyan scale-150' : 'bg-white/10'}`} />
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                    <p className="font-serif text-[1.35rem] italic text-brand-white mb-1">Chi sei?</p>
                    <p className="text-[0.83rem] font-light text-brand-body mb-5">Iniziamo con i tuoi contatti. Ci vogliono 30 secondi.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5">
                        <label className="text-[0.69rem] font-bold tracking-widest uppercase text-brand-cyan">Nome *</label>
                        <input type="text" value={formData.nome} onChange={e => setFormData({...formData, nome: e.target.value})} placeholder="Mario" className={`w-full bg-white/5 border ${errors.nome ? 'border-red-500' : 'border-white/10'} rounded-xl p-3 text-brand-white outline-none focus:border-brand-cyan transition-all`} />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[0.69rem] font-bold tracking-widest uppercase text-brand-cyan">Cognome *</label>
                        <input type="text" value={formData.cognome} onChange={e => setFormData({...formData, cognome: e.target.value})} placeholder="Rossi" className={`w-full bg-white/5 border ${errors.cognome ? 'border-red-500' : 'border-white/10'} rounded-xl p-3 text-brand-white outline-none focus:border-brand-cyan transition-all`} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5">
                        <label className="text-[0.69rem] font-bold tracking-widest uppercase text-brand-cyan">Email *</label>
                        <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="mario@azienda.it" className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl p-3 text-brand-white outline-none focus:border-brand-cyan transition-all`} />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[0.69rem] font-bold tracking-widest uppercase text-brand-cyan">WhatsApp / Tel *</label>
                        <input type="tel" value={formData.telefono} onChange={e => setFormData({...formData, telefono: e.target.value})} placeholder="+39 333 000 0000" className={`w-full bg-white/5 border ${errors.telefono ? 'border-red-500' : 'border-white/10'} rounded-xl p-3 text-brand-white outline-none focus:border-brand-cyan transition-all`} />
                      </div>
                    </div>
                    <div className="flex justify-end pt-4">
                      <button type="button" onClick={nextStep} className="bg-brand-grad text-black font-bold px-8 py-3 rounded-full hover:opacity-90 transition-all flex items-center gap-2">
                        Avanti <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                    <p className="font-serif text-[1.35rem] italic text-brand-white mb-1">La tua attività</p>
                    <p className="text-[0.83rem] font-light text-brand-body mb-5">Raccontaci chi sei. Ci aiuterà a prepararci per la call.</p>
                    <div className="space-y-1.5">
                      <label className="text-[0.69rem] font-bold tracking-widest uppercase text-brand-cyan">Nome azienda / attività *</label>
                      <input type="text" value={formData.azienda} onChange={e => setFormData({...formData, azienda: e.target.value})} placeholder="Es. Pizzeria da Mario, Studio Rossi…" className={`w-full bg-white/5 border ${errors.azienda ? 'border-red-500' : 'border-white/10'} rounded-xl p-3 text-brand-white outline-none focus:border-brand-cyan transition-all`} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[0.69rem] font-bold tracking-widest uppercase text-brand-cyan">Settore *</label>
                      <select value={formData.settore} onChange={e => setFormData({...formData, settore: e.target.value})} className={`w-full bg-brand-surf border ${errors.settore ? 'border-red-500' : 'border-white/10'} rounded-xl p-3 text-brand-white outline-none focus:border-brand-cyan transition-all appearance-none cursor-pointer`}>
                        <option value="">— Seleziona il settore —</option>
                        {['Ristorazione / Food', 'Salute & Benessere', 'Moda & Abbigliamento', 'Servizi Professionali', 'Formazione / Coaching', 'E-commerce Generico', 'Artigianato / Manifattura', 'Immobiliare', 'Tecnologia / Startup', 'Edilizia / Ristrutturazioni', 'Altro'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[0.69rem] font-bold tracking-widest uppercase text-brand-cyan">Descrizione attività *</label>
                      <textarea value={formData.descrizione} onChange={e => setFormData({...formData, descrizione: e.target.value})} placeholder="Cosa fa la tua azienda? Chi sono i tuoi clienti?" className={`w-full bg-white/5 border ${errors.descrizione ? 'border-red-500' : 'border-white/10'} rounded-xl p-3 text-brand-white outline-none focus:border-brand-cyan transition-all min-h-[100px]`} />
                    </div>
                    <div className="flex justify-between pt-4">
                      <button type="button" onClick={prevStep} className="border border-white/10 text-brand-body font-medium px-6 py-3 rounded-full hover:border-brand-cyan hover:text-brand-white transition-all">
                        Indietro
                      </button>
                      <button type="button" onClick={nextStep} className="bg-brand-grad text-black font-bold px-8 py-3 rounded-full hover:opacity-90 transition-all flex items-center gap-2">
                        Avanti <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                    <p className="font-serif text-[1.35rem] italic text-brand-white mb-1">Che sito ti serve?</p>
                    <p className="text-[0.83rem] font-light text-brand-body mb-5">Scegli la soluzione più vicina alle tue esigenze.</p>
                    <div className="space-y-2.5">
                      {[
                        { v: 'Landing Page', i: '🚀', t: 'Landing Page', d: 'Pagina professionale con Privacy, Cookie & Termini.' },
                        { v: 'Sito E-commerce', i: '🛒', t: 'Sito E-commerce', d: 'Negozio online con pagamenti e gestione ordini.' },
                        { v: 'Sito + Gestionale e Area Membri', i: '⚙️', t: 'Gestionale & Area Membri', d: 'Backend avanzato con abbonamenti e contenuti riservati.' }
                      ].map(s => (
                        <label key={s.v} className={`flex items-start gap-3.5 p-3.5 bg-white/5 border-2 rounded-2xl cursor-pointer transition-all ${formData.servizio === s.v ? 'border-brand-cyan bg-brand-cyan/5 shadow-lg shadow-brand-cyan/10' : 'border-white/5 hover:border-brand-cyan/30'}`}>
                          <input type="radio" name="svc" checked={formData.servizio === s.v} onChange={() => setFormData({...formData, servizio: s.v})} className="hidden" />
                          <span className="text-2xl mt-0.5">{s.i}</span>
                          <div>
                            <div className="font-bold text-[0.85rem] text-brand-white">{s.t}</div>
                            <div className="text-[0.74rem] font-light text-brand-body mt-0.5 leading-relaxed">{s.d}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.servizio && <p className="text-red-500 text-xs">Seleziona un servizio.</p>}
                    <div className="flex justify-between pt-4">
                      <button type="button" onClick={prevStep} className="border border-white/10 text-brand-body font-medium px-6 py-3 rounded-full hover:border-brand-cyan hover:text-brand-white transition-all">
                        Indietro
                      </button>
                      <button type="button" onClick={nextStep} className="bg-brand-grad text-black font-bold px-8 py-3 rounded-full hover:opacity-90 transition-all flex items-center gap-2">
                        Avanti <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                    <p className="font-serif text-[1.35rem] italic text-brand-white mb-1">Ultime note</p>
                    <p className="text-[0.83rem] font-light text-brand-body mb-5">Hai idee specifiche, un budget in mente, o un sito di riferimento?</p>
                    <div className="space-y-1.5">
                      <label className="text-[0.69rem] font-bold tracking-widest uppercase text-brand-cyan">Messaggio / Richieste particolari</label>
                      <textarea value={formData.messaggio} onChange={e => setFormData({...formData, messaggio: e.target.value})} placeholder="Es. Vorrei mantenere i colori aziendali, ho già un dominio..." className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-brand-white outline-none focus:border-brand-cyan transition-all min-h-[120px]" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[0.69rem] font-bold tracking-widest uppercase text-brand-cyan">Come hai trovato Moise Web?</label>
                      <select value={formData.fonte} onChange={e => setFormData({...formData, fonte: e.target.value})} className="w-full bg-brand-surf border border-white/10 rounded-xl p-3 text-brand-white outline-none focus:border-brand-cyan transition-all appearance-none cursor-pointer">
                        <option value="">— Seleziona —</option>
                        <option>Google</option><option>Passaparola / Amici</option><option>Social Media</option><option>Annuncio pubblicitario</option><option>Altro</option>
                      </select>
                    </div>
                    <div className="flex justify-between items-center gap-3 pt-4">
                      <button type="button" onClick={prevStep} className="border border-white/10 text-brand-body font-medium px-6 py-3 rounded-full hover:border-brand-cyan hover:text-brand-white transition-all">
                        Indietro
                      </button>
                      <button type="submit" disabled={isSubmitting} className="flex-1 bg-brand-grad text-black font-bold px-8 py-3 rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-cyan/30 disabled:opacity-50">
                        {isSubmitting ? 'Invio in corso...' : 'Invia la richiesta 🚀'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-brand-surf border-t border-white/10 py-11 px-[5%] text-center">
    <div className="w-10 h-10 bg-brand-grad rounded-lg flex items-center justify-center text-black font-bold text-xl mx-auto mb-3">M</div>
    <p className="font-serif italic text-[0.95rem] text-brand-body">The future is digital</p>
    <div className="flex gap-5 justify-center flex-wrap mt-4.5">
      <a href="#" className="text-[0.76rem] text-brand-muted hover:text-brand-cyan transition-colors">Privacy Policy</a>
      <a href="#" className="text-[0.76rem] text-brand-muted hover:text-brand-cyan transition-colors">Cookie Policy</a>
      <a href="#" className="text-[0.76rem] text-brand-muted hover:text-brand-cyan transition-colors">Termini e Condizioni</a>
      <a href="mailto:info@moiseweb.it" className="text-[0.76rem] text-brand-muted hover:text-brand-cyan transition-colors">info@moiseweb.it</a>
    </div>
    <p className="mt-5.5 text-[0.7rem] text-brand-muted/40">© 2025 Moise Web Srl · P.IVA XXXXXXXXXX · Tutti i diritti riservati</p>
  </footer>
);

const WhatsAppButton = () => (
  <a href="https://wa.me/39XXXXXXXXXX?text=Ciao%20Moise%20Web!%20Vorrei%20informazioni%20sui%20vostri%20servizi." target="_blank" rel="noopener noreferrer" className="fixed bottom-[26px] right-[26px] z-[500] w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#25d366] to-[#1da352] flex items-center justify-center text-white text-[1.45rem] shadow-[0_4px_22px_rgba(37,211,102,0.42)] hover:scale-110 hover:shadow-[0_8px_38px_rgba(37,211,102,0.58)] transition-all">
    <MessageCircle />
  </a>
);

// --- Page Component ---

export default function LandingPage() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (s: string) => {
    setSelectedService(s);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Logos />
      <PainPoints />
      <Services onSelectService={handleSelectService} />
      <Portfolio />
      <Process />
      <WhyUs />
      <Testimonials />
      <ContactForm selectedService={selectedService} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
