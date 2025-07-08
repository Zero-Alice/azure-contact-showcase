import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import './Contact.css';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    toast({
      title: "ส่งข้อความเรียบร้อย!",
      description: "เราจะติดต่อกลับไปโดยเร็วที่สุด",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'hello@example.com',
      link: 'mailto:hello@example.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'โทรศัพท์',
      value: '+66 12 345 6789',
      link: 'tel:+66123456789'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'ที่อยู่',
      value: 'กรุงเทพมหานคร, ประเทศไทย',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: 'GitHub',
      url: 'https://github.com'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com'
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: 'Twitter',
      url: 'https://twitter.com'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">
            ติดต่อฉัน
          </h2>
          <p className="contact-description">
            พร้อมรับงานโปรเจกต์ใหม่ หรือหารือเกี่ยวกับความต้องการของคุณ
            ติดต่อมาได้เลย ฉันจะตอบกลับโดยเร็วที่สุด
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-card-header">
                <h3 className="contact-card-title">ข้อมูลติดต่อ</h3>
              </div>
              <div className="contact-card-content">
                <div className="contact-info-list">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="contact-info-item"
                    >
                      <div className="contact-info-icon">
                        {info.icon}
                      </div>
                      <div className="contact-info-text">
                        <p className="contact-info-label">{info.title}</p>
                        <p className="contact-info-value">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <h3 className="contact-card-title">ติดตามฉัน</h3>
              </div>
              <div className="contact-card-content">
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <div className="contact-card-header">
              <h3 className="contact-card-title">ส่งข้อความถึงฉัน</h3>
            </div>
            <div className="contact-card-content">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">ชื่อ-นามสกุล</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="กรอกชื่อของคุณ"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">อีเมล</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="กรอกอีเมลของคุณ"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">หัวข้อ</label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="หัวข้อที่ต้องการปรึกษา"
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">ข้อความ</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="รายละเอียดโปรเจกต์หรือสิ่งที่ต้องการปรึกษา"
                    rows={5}
                    required
                    className="form-textarea"
                  />
                </div>
                
                <button type="submit" className="submit-button">
                  <Send className="mr-2 h-5 w-5" />
                  ส่งข้อความ
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;