'use client'

import { useEffect, useRef } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Factory,
  Leaf,
  Menu,
  MessageCircle,
  Snowflake,
  Sprout,
  ThermometerSnowflake,
  X,
  Zap,
} from 'lucide-react'
import { useState } from 'react'

const assets = {
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_frozenhive-w40MJf3JetsicoxM-y2MXrbQkGq1sJw7qmCDu9vFjWVf6V4.png',
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/front-m7VoJwB28ZFLB9VQ.png-xm1AAsUsiq7G0ALm10ARFKZ7kKI1kH.jpeg',
  chiller: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chiller-product-list_rev2-Tj6wD3vka2leVGHX-uSIkgK4WQSeL3E7F9EcRsDE2JERHCc.png',
  portable: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portable-cold-storage-uUwRkp1GNGFZ58H9.png_1-WOOFhpwEINmDgllZL1BfcAzFqvVq8s.jpeg',
  rental: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cold-storage-rental-CdPwGhfDHDeDXiVZ.png-tT5ey9bAGISG1RXQnoDJBr7yHhhTD6.png',
  system: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smart-cooling-system-1-B3caU84m1dtvX2fs-vh1j0KkfyNYTK1GPNUZSfiUwkJQdR4.png',
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.style.setProperty('--reveal-delay', `${delay}ms`)
        node.classList.add('is-visible')
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [delay])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

const products = [
  { number: '01', title: 'Cooling Tower Integrated Chiller', tag: 'Core technology', description: 'Evaporative pre-cooling takes the strain off the compressor for more efficient process cooling.', image: assets.chiller, dark: true },
  { number: '02', title: 'Portable Cold Storage', tag: 'Cold chain', description: 'Flexible, relocatable cold rooms for produce, dairy, flowers and temperature-sensitive inventory.', image: assets.portable },
  { number: '03', title: 'Cold Storage Rental', tag: 'On-demand capacity', description: 'Short-term temperature-controlled space when your operation needs capacity now.', image: assets.rental },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    let frame = 0
    const updateScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
        document.documentElement.style.setProperty('--scroll-progress', `${Math.min(window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1), 1)}`)
      })
    }
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', updateScroll) }
  }, [])
  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Frozenhive home"><img src={assets.logo} alt="Frozenhive" /></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
          <a href="#technology" onClick={() => setMenuOpen(false)}>Technology</a>
          <a href="#industries" onClick={() => setMenuOpen(false)}>Industries</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>Get a quote <ArrowUpRight /></a>
        </nav>
        <a className="header-cta" href="#contact">Get a quote <ArrowUpRight /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="top" className="hero">
        <div className="hero-image" style={{ backgroundImage: `url(${assets.hero})` }} />
        <div className="hero-wash" />
        <div className="hero-content page-width">
          <Reveal><p className="eyebrow"><span className="eyebrow-dot" /> Intelligent cooling systems · Pune, India</p></Reveal>
          <Reveal delay={80}><h1>India&apos;s cold chain,<br /><em>built for what&apos;s next.</em></h1></Reveal>
          <Reveal delay={160}><p className="hero-copy">Indian growers, food makers and manufacturers deserve cooling that works harder, costs less to run and performs through every season.</p></Reveal>
          <Reveal delay={240}><div className="hero-actions"><a className="button button-primary" href="#contact">Tell us what you need <ArrowRight /></a><a className="text-link" href="#technology">See how it works <ArrowDownRight /></a></div></Reveal>
          <Reveal delay={320}><div className="hero-proof"><div><strong>4–16°C</strong><span>controlled zones</span></div><div><strong>24/7</strong><span>temperature protection</span></div><div><strong>Made in India</strong><span>built for Indian conditions</span></div></div></Reveal>
        </div>
        <a className="scroll-cue" href="#solutions"><span>Scroll to explore</span><ChevronDown /></a>
      </section>

      <section className="statement section-pad page-width" id="about">
        <Reveal className="statement-label"><p className="eyebrow"><span className="eyebrow-dot" /> Why Frozenhive</p></Reveal>
        <Reveal className="statement-copy" delay={100}><h2>Better cooling means <span>more value from every harvest.</span></h2><p>Frozenhive brings efficient refrigeration and cold-chain infrastructure to the businesses powering India&apos;s food, agriculture and industrial growth.</p><a className="text-link dark-link" href="#technology">Our approach <ArrowRight /></a></Reveal>
      </section>

      <section className="products section-pad" id="solutions">
        <div className="page-width">
          <Reveal className="section-heading"><div><p className="eyebrow"><span className="eyebrow-dot" /> Built for Indian operations</p><h2>From farm gate to factory floor, <em>keep it fresh.</em></h2></div><p className="heading-note">One engineering partner for the full temperature journey — designed around your product, location and growth.</p></Reveal>
          <div className="product-grid">
            {products.map((product, index) => <Reveal key={product.number} delay={index * 90}><article className={`product-card ${product.dark ? 'product-card-dark' : ''}`}><div className="product-image-wrap"><img src={product.image} alt={product.title} /><span className="product-number">{product.number}</span></div><div className="product-info"><p className="card-tag">{product.tag}</p><h3>{product.title}</h3><p>{product.description}</p><a href="#contact" className="card-link">Explore solution <ArrowUpRight /></a></div></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="technology section-pad page-width" id="technology">
        <Reveal className="tech-visual"><div className="tech-image-frame"><img src={assets.system} alt="Smart cooling system flow diagram" /><div className="live-pill"><span /> System logic, visualised</div></div></Reveal>
        <Reveal className="tech-copy" delay={120}><p className="eyebrow"><span className="eyebrow-dot" /> Our India-first advantage</p><h2>Cool smarter.<br /><em>Run stronger.</em></h2><p className="large-copy">Our Cooling Tower Integrated Chiller uses evaporative cooling to reduce compressor load and operating cost. It is engineered for India&apos;s heat, humidity and demanding production schedules.</p><div className="feature-list"><div><span><Zap /></span><div><strong>Energy-aware by design</strong><p>Reduce compressor load without compromising temperature control.</p></div></div><div><span><ThermometerSnowflake /></span><div><strong>PLC-controlled precision</strong><p>Independent zones and live monitoring keep every room on spec.</p></div></div><div><span><Clock3 /></span><div><strong>Built for uptime</strong><p>Serviceable, scalable equipment designed for Indian operating conditions.</p></div></div></div><a className="button button-dark" href="#contact">Talk to an engineer <ArrowRight /></a></Reveal>
      </section>

      <section className="industries section-pad" id="industries"><div className="page-width"><Reveal className="section-heading"><div><p className="eyebrow"><span className="eyebrow-dot" /> Built where India grows</p><h2>Protect quality.<br /><em>Grow without limits.</em></h2></div></Reveal><div className="industry-grid"><Reveal><div className="industry-feature"><Leaf /><span>01</span><h3>For India&apos;s food economy</h3><p>Protect freshness, yield and shelf life from harvest to dispatch — across every climate and route.</p><a href="#contact">Find your solution <ArrowRight /></a></div></Reveal><Reveal delay={90}><div className="industry-list"><div><Sprout /><span><strong>Dairy & cold chain</strong><small>Reliable cooling for every handoff.</small></span><ArrowRight /></div><div><Factory /><span><strong>Industrial process</strong><small>Stable temperatures for demanding lines.</small></span><ArrowRight /></div><div><Snowflake /><span><strong>Floriculture & pharma</strong><small>Precision environments for sensitive goods.</small></span><ArrowRight /></div></div></Reveal></div></div></section>


      <section className="contact section-pad" id="contact"><div className="page-width contact-inner"><Reveal><p className="eyebrow light-eyebrow"><span className="eyebrow-dot" /> Start a conversation</p><h2>Build the cold chain<br /><em>your growth deserves.</em></h2><p>Tell us what you&apos;re storing, cooling or scaling. Our engineers will recommend the right configuration for your product, site and budget.</p></Reveal><Reveal delay={120} className="contact-card"><form onSubmit={(e) => e.preventDefault()}><label>Your name<input type="text" placeholder="Name" /></label><label>Work email<input type="email" placeholder="you@company.com" /></label><label>What are you looking to cool?<select defaultValue=""><option value="" disabled>Select an application</option><option>Cold storage</option><option>Industrial process cooling</option><option>Cold storage rental</option><option>Something else</option></select></label><button className="button button-primary" type="submit">Request a callback <ArrowRight /></button><small>We&apos;ll respond within one business day.</small></form></Reveal></div></section>

      <footer className="footer"><div className="page-width footer-inner"><div><img src={assets.logo} alt="Frozenhive" className="footer-logo" /><p>Intelligent cooling for a changing world.</p></div><div className="footer-links"><a href="#solutions">Solutions</a><a href="#technology">Technology</a><a href="#contact">Contact</a><a href="mailto:info@frozenhive.com">info@frozenhive.com</a></div><p className="copyright">© {new Date().getFullYear()} Frozenhive Technologies. All rights reserved.</p></div></footer>
      <a className="whatsapp" href="https://wa.me/919876543210" aria-label="Chat with Frozenhive on WhatsApp"><MessageCircle /></a>
    </main>
  )
}

function ArrowUpRight() { return <ArrowRight className="arrow-up-right" /> }
