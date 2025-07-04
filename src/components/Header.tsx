import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'หน้าแรก', href: '#home' },
    { name: 'เกี่ยวกับ', href: '#about' },
    { name: 'ผลงาน', href: '#portfolio' },
    { name: 'ติดต่อ', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`header ${isScrolled ? 'scrolled' : 'transparent'}`}
    >
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-button"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="contact-button"
            >
              ติดต่องาน
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="mobile-nav-button"
              >
                {item.name}
              </button>
            ))}
            <div className="mobile-contact-container">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="mobile-contact-button"
              >
                ติดต่องาน
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;