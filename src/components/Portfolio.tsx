import { ExternalLink, Github } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'แพลตฟอร์มอีคอมเมิร์ซครบวงจร พร้อมระบบชำระเงินและจัดการสินค้า',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      image: 'bg-gradient-primary',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'แอปพลิเคชันจัดการงานสำหรับทีม พร้อมระบบแจ้งเตือนแบบเรียลไทม์',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io'],
      image: 'bg-gradient-to-br from-purple-500 to-pink-500',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Restaurant Website',
      description: 'เว็บไซต์ร้านอาหารพร้อมระบบจองโต๊ะและสั่งอาหารออนไลน์',
      technologies: ['React', 'Firebase', 'Stripe', 'PWA'],
      image: 'bg-gradient-to-br from-green-500 to-blue-500',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Dashboard',
      description: 'แดชบอร์ดสำหรับนักลงทุน พร้อมกราฟแบบเรียลไทม์และการวิเคราะห์',
      technologies: ['Vue.js', 'D3.js', 'WebSocket', 'AWS'],
      image: 'bg-gradient-to-br from-orange-500 to-red-500',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Learning Management System',
      description: 'ระบบจัดการการเรียนรู้ออนไลน์ พร้อมวิดีโอและแบบทดสอบ',
      technologies: ['React', 'Express', 'MySQL', 'JWT'],
      image: 'bg-gradient-to-br from-cyan-500 to-blue-500',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Mobile Banking App',
      description: 'แอปธนาคารมือถือ พร้อมระบบความปลอดภัยระดับสูง',
      technologies: ['React Native', 'Redux', 'Biometric', 'Encryption'],
      image: 'bg-gradient-to-br from-indigo-500 to-purple-500',
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        {/* Header */}
        <div className="portfolio-header">
          <h2 className="portfolio-title">
            ผลงานของฉัน
          </h2>
          <p className="portfolio-description">
            โปรเจกต์ที่ฉันได้สร้างขึ้นด้วยความตั้งใจและเทคโนโลยีที่ทันสมัย
            แต่ละผลงานแสดงถึงความเชี่ยวชาญและความคิดสร้างสรรค์
          </p>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className={`portfolio-image ${project.image === 'bg-gradient-primary' ? 'gradient-primary' : 
                project.image === 'bg-gradient-to-br from-purple-500 to-pink-500' ? 'gradient-purple' :
                project.image === 'bg-gradient-to-br from-green-500 to-blue-500' ? 'gradient-green' :
                project.image === 'bg-gradient-to-br from-orange-500 to-red-500' ? 'gradient-orange' :
                project.image === 'bg-gradient-to-br from-cyan-500 to-blue-500' ? 'gradient-cyan' : 'gradient-indigo'}`}>
                <div className="portfolio-overlay">
                  <div className="portfolio-buttons">
                    <button
                      className="portfolio-button portfolio-button-demo"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </button>
                    <button
                      className="portfolio-button portfolio-button-code"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-content">
                <h3 className="portfolio-card-title">
                  {project.title}
                </h3>
                <p className="portfolio-card-description">
                  {project.description}
                </p>
                <div className="portfolio-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="portfolio-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="portfolio-cta">
          <p className="portfolio-cta-text">
            สนใจดูผลงานเพิ่มเติมหรือหารือเกี่ยวกับโปรเจกต์ใหม่?
          </p>
          <button 
            className="portfolio-cta-button"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            มาคุยกันเลย
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;