'use client';

import { useState, useEffect } from 'react';
import { Compass, Layers, Globe } from 'lucide-react';

// Product data
type Product = { id: number; name: string; description: string; image: string };
const products: Product[] = [
  { id: 1, name: 'Moraine Lake at Dawn', description: "1000-piece archival puzzle capturing the lake's iconic turquoise waters", image: '/puzzle.png' },
  { id: 2, name: 'Alpine Horizon', description: "Ceramic mug with a wraparound Moraine Lake print, ideal for coffee, tea, or hot chocolate.", image: '/cup.png' },
  { id: 3, name: 'Seasons of Banff Tote', description: "Reusable canvas tote bag featuring a warm autumn Banff landscape—perfect for markets, books, and everyday carry.", image: '/tote.png' },
  { id: 4, name: 'Summit Tee', description: "Soft natural-tone unisex tee featuring a full-color Moraine Lake illustration on the back. (Multiple Colors)", image: '/shirt.png' },
  { id: 5, name: 'Glacial Blue', description: "Classic unisex t-shirt with a vibrant Lake Louise print, inspired by turquoise glacier water. (Multiple Colors)", image: '/white_shirt.png' },
  { id: 6, name: 'Reflections', description: "Glossy acrylic wall art panel of Moraine Lake, ready to hang with a clean, modern floating look.", image: '/acr.png' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif text-xl tracking-wide text-neutral-100 hover:text-amber-200 transition-colors"
          >
            GraphicaByBanff
          </button>

          <div className="hidden md:flex items-center space-x-10">
            {(['collection', 'about', 'process', 'contact'] as const).map((item: string) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm tracking-wider uppercase text-neutral-300 hover:text-neutral-100 transition-colors"
              >
                {item}
              </button>
            ))}

            <a
              href="https://www.etsy.com/shop/GraphicaByBanff"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-amber-600/30 text-amber-200 text-sm tracking-wider uppercase hover:bg-amber-600/10 transition-all"
            >
              Shop Etsy
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-neutral-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/banff.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/80 to-neutral-900/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6 leading-tight tracking-tight">
          Banff-Inspired Art for<br />Considered Spaces
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          A curated collection of Moraine Lake and Canadian Rockies designs across puzzles, drinkware, and wall art.
        </p>

        <button
          onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-4 bg-neutral-100 text-neutral-900 text-sm tracking-wider uppercase font-medium hover:bg-amber-100 transition-all"
        >
          Explore the Collection
        </button>

        <p className="mt-16 text-xs text-neutral-500 tracking-wide">
          Designed by GraphicaByBanff · Est.2004
        </p>
      </div>
    </section>
  );
}

function Collection() {
  return (
    <section id="collection" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl text-neutral-900 mb-4 tracking-tight">Signature Collection</h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">Each piece captures the quiet majesty of the Canadian Rockies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden bg-neutral-200 mb-6 aspect-[4/5]">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-serif text-2xl text-neutral-900 mb-2">{product.name}</h3>
              <p className="text-neutral-600 leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="border-l-2 border-amber-600/20 pl-8">
          <h2 className="font-serif text-4xl text-neutral-900 mb-8 tracking-tight">About the Studio</h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>GraphicaByBanff is a studio practice dedicated to capturing the essence of Banff National Park and Moraine Lake through thoughtfully composed designs.</p>
            <p>Each piece is created with an emphasis on realism and restraint, celebrating the quiet grandeur of the Canadian Rockies. Our work is intended for those who appreciate considered design and wish to bring moments of alpine serenity into their daily lives.</p>
            <p>We believe in sustainable production. Every item is made-to-order and we ensure quality without waste or excess inventory.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { icon: <Compass className="w-8 h-8" />, title: 'Thoughtfully Designed', description: 'Each composition is carefully crafted to honor the landscape' },
    { icon: <Layers className="w-8 h-8" />, title: 'Produced On-Demand', description: 'Made to order by trusted partners using premium materials' },
    { icon: <Globe className="w-8 h-8" />, title: 'Delivered Worldwide', description: 'Shipped directly to your door with care and precision' },
  ];

  return (
    <section id="process" className="py-24 bg-neutral-900 text-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl mb-4 tracking-tight">Our Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 border border-amber-600/30 text-amber-200 mb-6">{step.icon}</div>
              <h3 className="text-xl font-medium mb-3 tracking-wide">{step.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for reaching out. We will respond within 24 hours.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please complete all fields');
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl text-neutral-900 mb-4 tracking-tight">Get In Touch</h2>
          <p className="text-neutral-600 text-lg">For inquiries, custom commissions, or wholesale opportunities</p>
        </div>

        <div className="bg-white border border-neutral-200 p-8 lg:p-12">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm uppercase tracking-wider text-neutral-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-neutral-300 bg-neutral-50 focus:outline-none focus:border-neutral-900 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm uppercase tracking-wider text-neutral-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-neutral-300 bg-neutral-50 focus:outline-none focus:border-neutral-900 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-wider text-neutral-700 mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 border border-neutral-300 bg-neutral-50 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
              />
            </div>

            <button onClick={handleSubmit} className="w-full px-10 py-4 bg-neutral-900 text-neutral-100 text-sm tracking-wider uppercase hover:bg-neutral-800 transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="font-serif text-xl text-neutral-300 tracking-wide">GraphicaByBanff</div>

          <div className="flex gap-8 text-sm tracking-wider uppercase">
            <a
              href="https://www.etsy.com/shop/GraphicaByBanff"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-100 transition-colors"
            >
              Etsy
            </a>
            <a
              href="https://www.pinterest.com/GraphicaByBanff"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-100 transition-colors"
            >
              Pinterest
            </a>
            <a href="mailto:contact@graphicabybanff.com" className="hover:text-neutral-100 transition-colors">
              Email
            </a>
          </div>

          <div className="text-xs text-neutral-600">© {currentYear} GraphicaByBanff. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Collection />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
