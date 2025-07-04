import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Portfolio</h3>
              <p className="text-white/80">
                สร้างสรรค์เว็บไซต์ที่สวยงามและทันสมัย
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/80 flex items-center justify-center md:justify-end">
                สร้างด้วย
                <Heart className="h-4 w-4 mx-1 text-red-400" />
                และ React
              </p>
              <p className="text-white/60 text-sm mt-1">
                © 2024 Portfolio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;