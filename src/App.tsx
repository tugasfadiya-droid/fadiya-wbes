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
    <nav className={scrolled ? 'scrolled-nav' : ''} style={{ padding: '1rem 0' }}>
      <div className="max-w-7xl px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center" style={{ gap: '0.5rem' }}>
            <div className="bg-brand-pink" style={{ padding: '0.5rem', borderRadius: '0.5rem' }}>
              <Network style={{ color: 'white', width: '1.5rem', height: '1.5rem' }} />
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Fadiya<span className="text-brand-pink">Net</span></span>
          </div>
        </div>

        <div className="flex items-center" style={{ gap: '2rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem' }} className="hidden md-flex">
            <a href="#" style={{ textDecoration: 'none', color: 'inherit', fontWeight: '500' }}>Home</a>
            <a href="#products" style={{ textDecoration: 'none', color: 'inherit', fontWeight: '500' }}>Products</a>
          </div>
          <button className="btn-primary">Contact</button>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <section className="hero">
        <div className="max-w-7xl px-6 grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl" style={{ fontSize: '4rem', lineHeight: '1', fontWeight: 'bold', marginBottom: '2rem' }}>
              Koneksi Cepat <br /> <span className="text-brand-pink">Tanpa Batas.</span>
            </h1>
            <p style={{ color: 'var(--gray-600)', maxWidth: '400px', marginBottom: '2rem' }}>
              Penyedia perangkat jaringan premium Fadiya Net. Hemat memori, performa maksimal.
            </p>
            <button className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Beli Sekarang</button>
          </motion.div>
          
          <div className="bg-white shadow-sm" style={{ padding: '2rem', borderRadius: '2rem', border: '1px solid var(--gray-100)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ background: 'var(--brand-soft)', padding: '1.5rem', borderRadius: '1rem', textAlign: 'center' }}>
                <Router className="text-brand-pink" style={{ marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>ROUTER</div>
              </div>
              <div style={{ background: 'var(--gray-100)', padding: '1.5rem', borderRadius: '1rem', textAlign: 'center' }}>
                <Wifi style={{ color: 'var(--gray-400)', marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>WIFI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 max-w-7xl px-6">
        <h2 className="text-4xl" style={{ marginBottom: '3rem', textAlign: 'center' }}>Produk <span className="text-brand-pink">Terlaris</span></h2>
        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="card">
              <img src={p.image} alt={p.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} referrerPolicy="no-referrer" />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{p.name}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '1rem' }}>{p.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{p.price}</span>
                  <ShoppingCart className="text-brand-pink" style={{ cursor: 'pointer' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: 'auto', background: 'var(--gray-900)', color: 'white', padding: '4rem 0' }}>
        <div className="max-w-7xl px-6">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Network className="text-brand-pink" />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>FadiyaNet</span>
          </div>
          <p style={{ color: 'var(--gray-400)', fontSize: '0.8rem' }}>&copy; 2026 Fadiya Net. Lightweight Networking Solutions.</p>
        </div>
      </footer>
    </div>
  );
}
