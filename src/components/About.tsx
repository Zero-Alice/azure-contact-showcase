import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Tailwind CSS',
      color: 'text-primary'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, Responsive Design',
      color: 'text-secondary'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Development',
      description: 'React Native, Flutter, PWA',
      color: 'text-primary'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Performance',
      description: 'Optimization, SEO, Core Web Vitals',
      color: 'text-secondary'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              เกี่ยวกับฉัน
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              นักพัฒนาเว็บที่มีความหลงใหลในการสร้างสรรค์ผลงานที่มีคุณภาพและสร้างประสบการณ์ที่ดีให้กับผู้ใช้
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                ความเป็นมาและประสบการณ์
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ฉันเป็นนักพัฒนาเว็บที่มีประสบการณ์มากกว่า 3 ปี ในการสร้างเว็บไซต์และแอปพลิเคชันสำหรับธุรกิจขนาดต่างๆ 
                  ตั้งแต่สตาร์ทอัพไปจนถึงบริษัทขนาดใหญ่
                </p>
                <p>
                  ฉันเชี่ยวชาญในการใช้เทคโนโลยีสมัยใหม่ เช่น React, TypeScript, และ Node.js 
                  เพื่อสร้างผลงานที่มีประสิทธิภาพสูงและตอบสนองความต้องการของลูกค้าได้อย่างแม่นยำ
                </p>
                <p>
                  นอกจากการเขียนโปรแกรมแล้ว ฉันยังให้ความสำคัญกับการออกแบบ UX/UI 
                  เพื่อให้ผู้ใช้ได้รับประสบการณ์ที่ดีที่สุดจากผลงานที่ฉันสร้าง
                </p>
              </div>
            </div>

            {/* Right Content - Profile Image Placeholder */}
            <div className="relative">
              <div className="w-full h-80 bg-gradient-primary rounded-2xl shadow-elegant flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code className="h-16 w-16 text-white" />
                  </div>
                  <p className="text-lg font-medium">รูปโปรไฟล์</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="group hover:shadow-card transition-smooth cursor-pointer gradient-card border-0">
                <CardContent className="p-6 text-center">
                  <div className={`${skill.color} mb-4 flex justify-center group-hover:scale-110 transition-bounce`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;