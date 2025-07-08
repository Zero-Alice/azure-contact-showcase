import { Trophy, Target, Dumbbell, Medal } from 'lucide-react';
import './About.css';

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
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h2 className="about-title">
            เกี่ยวกับ H3SPORT
          </h2>
          <p className="about-description">
            แบรนด์กีฬาที่มุ่งมั่นพัฒนาและส่งเสริมวงการกีฬา ด้วยผลิตภัณฑ์และบริการที่มีคุณภาพระดับมาตรฐานสากล
          </p>
        </div>

        <div className="about-content">
          {/* Left Content */}
          <div className="about-text">
            <h3>ประวัติและวิสัยทัศน์</h3>
            <div className="about-text-content">
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
          <div className="about-image">
            <div className="about-image-placeholder">
              <div className="about-image-content">
                <div className="about-logo">
                  <Trophy className="h-16 w-16 text-white" />
                </div>
                <p className="about-logo-text">โลโก้ H3SPORT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className={`skill-icon ${skill.color === 'text-primary' ? 'primary' : 'secondary'}`}>
                {skill.icon}
              </div>
              <h3 className="skill-title">
                {skill.title}
              </h3>
              <p className="skill-description">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;