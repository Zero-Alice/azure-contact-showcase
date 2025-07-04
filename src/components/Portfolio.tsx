import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

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
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              ผลงานของฉัน
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              โปรเจกต์ที่ฉันได้สร้างขึ้นด้วยความตั้งใจและเทคโนโลยีที่ทันสมัย
              แต่ละผลงานแสดงถึงความเชี่ยวชาญและความคิดสร้างสรรค์
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden shadow-card hover:shadow-elegant transition-smooth border-0 gradient-card">
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white text-primary hover:bg-white/90"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white text-white hover:bg-white hover:text-primary"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              สนใจดูผลงานเพิ่มเติมหรือหารือเกี่ยวกับโปรเจกต์ใหม่?
            </p>
            <Button 
              size="lg"
              className="gradient-primary text-white font-medium px-8 py-3 text-lg transition-bounce"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              มาคุยกันเลย
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;