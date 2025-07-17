import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              ติดต่อฉัน
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              พร้อมรับงานโปรเจกต์ใหม่ หรือหารือเกี่ยวกับความต้องการของคุณ
              ติดต่อมาได้เลย ฉันจะตอบกลับโดยเร็วที่สุด
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-foreground">ข้อมูลติดต่อ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-smooth group"
                    >
                      <div className="text-primary group-hover:text-secondary transition-smooth">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.title}</p>
                        <p className="text-sm">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-foreground">ติดตามฉัน</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-white transition-smooth group"
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-foreground">ส่งข้อความถึงฉัน</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">ชื่อ-นามสกุล</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="กรอกชื่อของคุณ"
                          required
                          className="bg-background border-border focus:border-primary transition-smooth"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">อีเมล</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="กรอกอีเมลของคุณ"
                          required
                          className="bg-background border-border focus:border-primary transition-smooth"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">หัวข้อ</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="หัวข้อที่ต้องการปรึกษา"
                        required
                        className="bg-background border-border focus:border-primary transition-smooth"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">ข้อความ</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="รายละเอียดโปรเจกต์หรือสิ่งที่ต้องการปรึกษา"
                        rows={5}
                        required
                        className="bg-background border-border focus:border-primary transition-smooth resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full gradient-primary text-white font-medium transition-bounce"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      ส่งข้อความ
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;