import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Target, Dumbbell, Medal } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'อุปกรณ์กีฬา',
      description: 'ลูกบอล, ไม้แบด, รองเท้า, เสื้อผ้า',
      color: 'text-primary'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'คุณภาพสูง',
      description: 'มาตรฐานสากล, วัสดุดี, ทนทาน',
      color: 'text-secondary'
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: 'บริการฝึกซ้อม',
      description: 'โค้ช, หลักสูตร, สถานที่ฝึก',
      color: 'text-primary'
    },
    {
      icon: <Medal className="h-8 w-8" />,
      title: 'รางวัลความเป็นเลิศ',
      description: 'ผลิตภัณฑ์ยอดเยี่ยม, รับรองคุณภาพ',
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
              เกี่ยวกับ H3SPORT
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              แบรนด์กีฬาที่มุ่งมั่นพัฒนาและส่งเสริมวงการกีฬา ด้วยผลิตภัณฑ์และบริการที่มีคุณภาพระดับมาตรฐานสากล
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                ประวัติและวิสัยทัศน์
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  H3SPORT เป็นแบรนด์กีฬาที่ก่อตั้งขึ้นด้วยความมุ่งมั่นในการส่งเสริมและพัฒนาวงการกีฬาไทย 
                  ด้วยประสบการณ์กว่า 10 ปี ในอุตสาหกรรมกีฬา
                </p>
                <p>
                  เราเชี่ยวชาญในการผลิตและจำหน่ายอุปกรณ์กีฬาคุณภาพสูง รวมถึงให้บริการฝึกอบรม 
                  และสร้างสรรค์โปรแกรมการออกกำลังกายที่เหมาะสมกับแต่ละบุคคล
                </p>
                <p>
                  วิสัยทัศน์ของเราคือการเป็นแบรนด์กีฬาชั้นนำที่สร้างแรงบันดาลใจ 
                  และส่งเสริมให้คนไทยมีสุขภาพที่ดีผ่านการกีฬาและการออกกำลังกาย
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
                  <p className="text-lg font-medium">โลโก้ H3SPORT</p>
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