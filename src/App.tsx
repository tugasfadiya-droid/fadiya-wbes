import { motion } from 'motion/react';
import { 
  Network, 
  Wifi, 
  Router, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  ShoppingCart, 
  MessageSquare, 
  Menu, 
  X,
  ChevronRight,
  Globe,
  Settings,
  Phone
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Types ---
interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

// --- Data ---
const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'MikroTik RB4011iGS+5HacQ2nD-IN',
    category: 'Router',
    price: 'Rp 3.450.000',
    image: 'https://picsum.photos/seed/router1/400/300',
    description: 'High performance quad-core router with 10x Gigabit ports and SFP+ 10Gbps interface.'
  },
  {
    id: '2',
    name: 'Ubiquiti UniFi 6 Lite',
    category: 'Access Point',
    price: 'Rp 1.850.000',
    image: 'https://picsum.photos/seed/wifi6/400/300',
    description: '2x2 high-efficiency Wi-Fi 6 AP that can reach up to 1.5 Gbps aggregate throughput rate.'
  },
  {
    id: '3',
    name: 'Cisco CBS250-24T-4G Smart Switch',
    category: 'Switch',
    price: 'Rp 5.200.000',
    image: 'https://picsum.photos/seed/switch/400/300',
    description: '24-port Gigabit Ethernet switch with 4x 1G SFP ports, offering advanced management features.'
  },
  {
    id: '4',
    name: 'Fiber Optic Patch Cord SC-SC 3M',
    category: 'Cable',
    price: 'Rp 45.000',
    image: 'https://picsum.photos/seed/fiber/400/300',
    description: 'High quality single-mode duplex patch cord for efficient optical fiber connectivity.'
  }
];

// --- Components ---

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-pink p-2 rounded-lg">
            <Network className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold text-gray-900 tracking-tight">Fadiya<span className="text-brand-pink">Net</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-brand-pink transition-colors">Home</a>
          <a href="#products" className="text-sm font-medium hover:text-brand-pink transition-colors">Products</a>
          <a href="#about" className="text-sm font-medium hover:text-brand-pink transition-colors">About</a>
          <a href="#contact" className="bg-brand-pink text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-dark transition-all transform hover:scale-105 active:scale-95">
            Contact Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden"
        >
          <div className="flex flex-col p-6 gap-4">
            <a href="#" onClick={() => setIsOpen(false)} className="text-lg font-medium">Home</a>
            <a href="#products" onClick={() => setIsOpen(false)} className="text-lg font-medium">Products</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium">About</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-brand-pink text-white py-3 rounded-xl text-center font-bold">
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function ProductCard({ product }: { product: Product; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl border border-gray-100 overflow-hidden group hover:shadow-2xl hover:shadow-brand-pink/10 transition-all duration-500"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-dark border border-brand-pink/20">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-brand-pink transition-colors">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-gray-50">
          <span className="text-lg font-bold text-gray-900">{product.price}</span>
          <button className="p-2 bg-gray-50 text-brand-pink rounded-xl group-hover:bg-brand-pink group-hover:text-white transition-all">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-brand-soft">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-brand-pink/20 mb-6 group cursor-default">
              <Zap className="w-4 h-4 text-brand-pink" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">High-Speed Connectivity Experts</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[0.9] text-gray-900 mb-8">
              Koneksi Tanpa Batas dengan <span className="text-brand-pink">Fadiya Net.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              Penyedia perangkat jaringan terpercaya untuk kebutuhan rumah, kantor, hingga skala enterprise. Kecepatan maksimal, harga bersahabat.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-pink text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-brand-pink/30 hover:bg-brand-dark transition-all">
                Mulai Belanja
              </button>
              <button className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                Konsultasi Gratis <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-brand-pink/10 rounded-full blur-3xl animate-pulse" />
            <div className="relative bg-white p-8 rounded-[40px] shadow-2xl border border-white/50">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-soft p-6 rounded-3xl flex flex-col items-center justify-center text-center">
                  <Router className="w-10 h-10 text-brand-pink mb-2" />
                  <span className="text-xs font-bold uppercase">Enterprise Router</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-3xl flex flex-col items-center justify-center text-center">
                  <Wifi className="w-10 h-10 text-gray-400 mb-2" />
                  <span className="text-xs font-bold uppercase text-gray-400">Wi-Fi 6 Ready</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-3xl flex flex-col items-center justify-center text-center col-span-2 flex-row gap-4">
                  <Cpu className="w-10 h-10 text-brand-pink" />
                  <div className="text-left">
                    <div className="text-xl font-bold">10Gbps</div>
                    <div className="text-[10px] font-bold uppercase opacity-50 tracking-widest text-brand-dark">SFP+ Supported</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-8 md:gap-0">
          {[
            { label: 'Happy Clients', value: '2k+' },
            { label: 'Products Sold', value: '15k+' },
            { label: 'Global Brands', value: '20+' },
            { label: 'Service Coverage', value: 'Indo' }
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-3xl font-display font-bold text-gray-900">{stat.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories / Services */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <span className="text-brand-pink font-bold uppercase tracking-tighter text-sm">Services</span>
          <h2 className="text-4xl font-display font-bold mt-2">Solusi Jaringan Terintegrasi</h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: ShieldCheck, 
              title: 'Instalasi Server', 
              desc: 'Konfigurasi server profesional untuk storage, web, maupun database.' 
            },
            { 
              icon: Globe, 
              title: 'Fiber Optic Rollout', 
              desc: 'Penyambungan (splicing) dan penarikan kabel fiber optik jarak jauh.' 
            },
            { 
              icon: Settings, 
              title: 'Maintenance', 
              desc: 'Layanan pemeliharaan berkala untuk menjaga uptime jaringan Anda.' 
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-brand-pink/30 shadow-sm transition-all"
            >
              <div className="bg-brand-soft w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="text-brand-pink w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-end mb-16">
          <div>
            <span className="text-brand-pink font-bold uppercase tracking-tighter text-sm">Shop</span>
            <h2 className="text-4xl font-display font-bold mt-2">Produk Unggulan</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-pink font-bold hover:gap-4 transition-all">
            Lihat Semua <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-brand-pink rounded-[40px] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,50 Q50,0 100,50 T0,50" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Siap Membangun Jaringan Impian?</h2>
            <p className="text-pink-100 text-lg mb-10 max-w-xl mx-auto">
              Hubungi tim ahli kami untuk konsultasi infrastruktur jaringan gratis atau pesan produk sekarang.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/something" className="bg-white text-brand-pink px-10 py-5 rounded-2xl font-bold shadow-xl hover:bg-pink-50 transition-all flex items-center gap-3">
                <MessageSquare className="w-6 h-6" /> WhatsApp Kami
              </a>
              <button className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-bold border border-white/20 hover:bg-pink-900 transition-all flex items-center gap-3">
                <Phone className="w-6 h-6" /> +62 821-xxxx-xxxx
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Network className="text-brand-pink w-8 h-8" />
              <span className="text-2xl font-display font-bold">Fadiya<span className="text-brand-pink">Net</span></span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              Pusat penjualan perangkat networking berkualitas tinggi. Kami melayani pengiriman ke seluruh wilayah Indonesia dengan jaminan keaslian produk.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-brand-pink">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-brand-pink">Follow Us</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-pink transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-pink transition-colors cursor-pointer">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-10 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Fadiya Net. All rights reserved. Made with &hearts; for Networking.
        </div>
      </footer>
    </div>
  );
}
