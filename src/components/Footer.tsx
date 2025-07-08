import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">H3SPORT</h3>
            <p className="footer-tagline">
              แบรนด์กีฬาที่มุ่งมั่นพัฒนาวงการกีฬาไทย
            </p>
          </div>
          
          <div className="footer-info">
            <p className="footer-love">
              สร้างด้วย
              <Heart className="footer-heart" />
              และความใส่ใจ
            </p>
            <p className="footer-copyright">
              © 2024 H3SPORT. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;