import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            ยินดีต้อนรับสู่
            <span className="block text-white/90">H3SPORT</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed animate-fade-in-delay">
            แบรนด์กีฬาที่มุ่งมั่นสร้างสรรค์ผลิตภัณฑ์และบริการด้านกีฬาที่มีคุณภาพ
            <br />
            เพื่อส่งเสริมการออกกำลังกายและการกีฬาอย่างยั่งยืน
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay-2">
            <Button 
              size="lg" 
              onClick={scrollToPortfolio}
              className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-3 text-lg transition-bounce"
            >
              ดูผลิตภัณฑ์
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToContact}
              className="border-white text-white hover:bg-white hover:text-primary font-medium px-8 py-3 text-lg transition-bounce"
            >
              ติดต่อเรา
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-medium px-8 py-3 text-lg transition-bounce"
            >
              <Download className="mr-2 h-5 w-5" />
              แคตตาล็อก
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center animate-fade-in-delay-3">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-glow">
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-white/80">ลูกค้าพึงพอใจ</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-glow">
              <h3 className="text-2xl font-bold mb-2">10+</h3>
              <p className="text-white/80">ปีประสบการณ์</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-glow">
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-white/80">ผลิตภัณฑ์</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;