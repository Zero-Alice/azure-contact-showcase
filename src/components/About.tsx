import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Target, Dumbbell, Medal } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'ผลงานการแข่งขัน',
      description: 'เหรียญทอง, เหรียญเงิน, เหรียญทองแดง',
      color: 'text-primary'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'ความแม่นยำ',
      description: 'การควบคุมลูกบอล, การเซ็ตเป้าหมาย',
      color: 'text-secondary'
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: 'การฝึกซ้อม',
      description: 'ความแข็งแกร่ง, ความอดทน, เทคนิค',
      color: 'text-primary'
    },
    {
      icon: <Medal className="h-8 w-8" />,
      title: 'การสอน',
      description: 'ถ่ายทอดประสบการณ์, พัฒนานักกีฬา',
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
              เกี่ยวกับนักกีฬา
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              นักกีฬามืออาชีพที่มีความหลงใหลในการแข่งขันและมุ่งมั่นสู่ความเป็นเลิศในสนามกีฬา
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
                  ฉันเป็นนักกีฬามืออาชีพที่มีประสบการณ์มากกว่า 8 ปี ในสนามแข่งขันระดับชาติและนานาชาติ 
                  โดยได้ร่วมแข่งขันในรายการต่างๆ มากมาย
                </p>
                <p>
                  ฉันเชี่ยวชาญในเทคนิคการเล่นที่หลากหลาย มีความแข็งแกร่งทางร่างกายและจิตใจ 
                  พร้อมทั้งมีการเตรียมความพร้อมที่เป็นระบบและมีประสิทธิภาพ
                </p>
                <p>
                  นอกจากการแข่งขันแล้ว ฉันยังให้ความสำคัญกับการถ่ายทอดประสบการณ์และความรู้ 
                  ให้กับนักกีฬารุ่นใหม่เพื่อพัฒนาวงการกีฬาของประเทศ
                </p>
              </div>
            </div>

            {/* Right Content - Profile Image Placeholder */}
            <div className="relative">
              <div className="w-full h-80 bg-gradient-primary rounded-2xl shadow-elegant flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Trophy className="h-16 w-16 text-white" />
                  </div>
                  <p className="text-lg font-medium">รูปโปรไฟล์นักกีฬา</p>
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