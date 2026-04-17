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
    description: 'High performance quad-core router with 10x Gigabit ports.'
  },
  {
    id: '2',
    name: 'Ubiquiti UniFi 6 Lite',
    category: 'Access Point',
    price: 'Rp 1.850.000',
    image: 'https://picsum.photos/seed/wifi6/400/300',
    description: '2x2 high-efficiency Wi-Fi 6 AP.'
  },
  {
    id: '3',
    name: 'Cisco CBS250-24T-4G Switch',
    category: 'Switch',
    price: 'Rp 5.200.000',
    image: 'https://picsum.photos/seed/switch/400/300',
    description: '24-port Gigabit Ethernet switch.'
  },
  {
    id: '4',
    name: 'Fiber Patch Cord SC-SC 3M',
    category: 'Cable',
    price: 'Rp 45.000',
    image: 'https://picsum.photos/seed/fiber/400/300',
    description: 'High quality single-mode duplex patch cord.'
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
          <a href="#contact" className="bg-brand-pink text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-dark transition-all transform hover:scale-105 active:scale-95">
            Contact
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
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-brand-soft">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-brand-pink/20 mb-6 font-bold text-[10px] uppercase tracking-wider text-brand-dark">
              <Zap className="w-4 h-4 text-brand-pink" /> High-Speed Connectivity
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-none text-gray-900 mb-8">
              Koneksi Cepat <br /> <span className="text-brand-pink">Tanpa Batas.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              Penyedia perangkat jaringan terpercaya untuk kebutuhan rumah, kantor, hingga skala enterprise. Kecepatan maksimal, harga bersahabat.
            </p>
            <button className="bg-brand-pink text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-brand-pink/30 hover:bg-brand-dark transition-all">
              Mulai Belanja
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative bg-white p-8 rounded-[40px] shadow-2xl border border-white/50">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-soft p-6 rounded-3xl flex flex-col items-center justify-center text-center">
                  <Router className="w-10 h-10 text-brand-pink mb-2" />
                  <span className="text-[10px] font-bold uppercase">Router</span>
                </div>
                <div className="bg-gray-50 p-6 rounded-3xl flex flex-col items-center justify-center text-center">
                  <Wifi className="w-10 h-10 text-gray-400 mb-2" />
                  <span className="text-[10px] font-bold uppercase text-gray-400">Wi-Fi 6</span>
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

      {/* Featured Products */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-4xl font-display font-bold text-center">Produk <span className="text-brand-pink">Terlaris</span></h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <Network className="text-brand-pink w-6 h-6" />
            <span className="text-xl font-display font-bold">FadiyaNet</span>
          </div>
          <p className="text-gray-400 text-sm">&copy; 2026 Fadiya Net. Optimized for Low-Memory Systems.</p>
        </div>
      </footer>
    </div>
  );
}
