import { ArrowDown, Download } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import './Hero.css';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroImage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            ยินดีต้อนรับสู่
            <span className="hero-brand">H3SPORT</span>
          </h1>
          
          <p className="hero-description">
            แบรนด์กีฬาที่มุ่งมั่นสร้างสรรค์ผลิตภัณฑ์และบริการด้านกีฬาที่มีคุณภาพ
            <br />
            เพื่อส่งเสริมการออกกำลังกายและการกีฬาอย่างยั่งยืน
          </p>
          
          <div className="hero-buttons">
            <button 
              onClick={scrollToPortfolio}
              className="hero-button hero-button-primary"
            >
              ดูผลิตภัณฑ์
              <ArrowDown className="ml-2 h-5 w-5" />
            </button>
            
            <button 
              onClick={scrollToContact}
              className="hero-button hero-button-secondary"
            >
              ติดต่อเรา
            </button>
            
            <button className="hero-button hero-button-secondary">
              <Download className="mr-2 h-5 w-5" />
              แคตตาล็อก
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="hero-stat">
              <h3 className="hero-stat-number">500+</h3>
              <p className="hero-stat-label">ลูกค้าพึงพอใจ</p>
            </div>
            <div className="hero-stat">
              <h3 className="hero-stat-number">10+</h3>
              <p className="hero-stat-label">ปีประสบการณ์</p>
            </div>
            <div className="hero-stat">
              <h3 className="hero-stat-number">50+</h3>
              <p className="hero-stat-label">ผลิตภัณฑ์</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <ArrowDown className="hero-scroll-icon" />
      </div>
    </section>
  );
};

export default Hero;