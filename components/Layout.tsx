import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PageRoute } from '../types';
import { Button } from './Button';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Hem', path: PageRoute.HOME },
    { label: 'AI & Analys', path: PageRoute.AI_ANALYSIS },
    { label: 'Om Oss', path: PageRoute.ABOUT },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-moon-200 py-2 shadow-sm' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to={PageRoute.HOME} className="flex items-center gap-3 group">
              <img 
                src="https://i.postimg.cc/k6bSjgCZ/1000035031.jpg" 
                alt="Arctic Moon AB" 
                className="h-16 w-auto object-contain mix-blend-multiply" 
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'text-arctic-600' 
                      : 'text-moon-600 hover:text-moon-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button size="sm" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                Boka Samtal
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-moon-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-moon-200 shadow-lg py-4 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`text-base font-medium py-2 border-b border-moon-100 ${
                  location.pathname === link.path ? 'text-arctic-600' : 'text-moon-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button size="md" fullWidth onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
              Boka Första Samtal
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer / Contact CTA */}
      <footer className="bg-moon-900 text-moon-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Redo att ta kontroll?</h2>
              <p className="text-lg mb-8 max-w-md text-moon-400">
                Vi börjar med ett förutsättningslöst samtal. Ingen säljpresentation, bara en diskussion om era nuvarande utmaningar kring inköp och styrning.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 bg-arctic-500 h-12"></div>
                  <div>
                    <p className="text-white font-medium">Arctic Moon AB</p>
                    <p className="text-sm">Stockholm, Sverige</p>
                  </div>
                </div>
                <p className="text-sm">info@arcticmoon.se</p>
              </div>
            </div>
            
            <div className="bg-moon-800 p-8 rounded-sm border border-moon-700">
              <h3 className="text-xl font-semibold text-white mb-4">Boka ett introduktionsmöte</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-1">E-post</label>
                  <input type="email" placeholder="namn@foretag.se" className="w-full bg-moon-900 border-moon-600 rounded-sm p-3 text-white focus:border-arctic-500 focus:ring-1 focus:ring-arctic-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Telefon</label>
                  <input type="tel" placeholder="070-123 45 67" className="w-full bg-moon-900 border-moon-600 rounded-sm p-3 text-white focus:border-arctic-500 focus:ring-1 focus:ring-arctic-500 outline-none" />
                </div>
                <Button fullWidth className="mt-2">
                  Skicka förfrågan <ArrowRight size={16} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-moon-800 mt-16 pt-8 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Arctic Moon AB. Alla rättigheter förbehållna.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;