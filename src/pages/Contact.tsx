import { useData } from '@/hooks/useData';
import { useConfig } from '@/hooks/useConfig';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { NeuralNetwork } from '@/components/NeuralNetwork';
import { FloatingOrbs } from '@/components/FloatingOrbs';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ParallaxSection } from '@/components/ParallaxSection';

const Contact = () => {
  const { data } = useData();
  const { config } = useConfig();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  if (!data || !config) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const iconMap: Record<string, any> = {
    Github,
    Linkedin,
    Twitter,
    Mail,
  };

  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      <ParallaxSection speed={0.3}>
        <NeuralNetwork />
      </ParallaxSection>
      <ParallaxSection speed={0.5}>
        <FloatingOrbs />
      </ParallaxSection>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center gradient-holographic">
          {data.contact.texts?.pageTitle || "Get In Touch"}
          </h1>
          <p className="text-center text-lg text-muted-foreground mb-12">
            {data.contact.texts?.pageSubtitle || "Let's create something amazing together"}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection animation="slide-right" delay={100}>
            <h2 className="text-3xl font-bold mb-6 gradient-text">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            {config.pages?.contact?.showSocials && data.contact?.socials && (
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold gradient-text mb-4">{data.contact.texts?.connectTitle || "Connect With Me"}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {data.contact.socials.map((social: any) => {
                    const Icon = iconMap[social.icon];
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 glass-morphism p-4 rounded-lg card-3d hover:border-primary/40 transition-all group"
                      >
                        <div className="p-2 rounded-lg group-hover:animate-ripple"
                             style={{ background: 'var(--gradient-neural)' }}>
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="glass-morphism p-6 rounded-xl card-3d">
              <h3 className="text-xl font-semibold gradient-text mb-4">{data.contact.texts?.quickInfoTitle || "Quick Info"}</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3 group">
                  <span className="text-2xl group-hover:animate-ripple">📍</span>
                  <span>{data.personal?.location || 'Location not available'}</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <span className="text-2xl group-hover:animate-ripple">📧</span>
                  <span>{data.personal?.email || 'Email not available'}</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <span className="text-2xl group-hover:animate-ripple">📱</span>
                  <span>{data.personal?.phone || 'Phone not available'}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          {config.pages?.contact?.showForm && (
            <AnimatedSection animation="slide-left" delay={200}>
              <form onSubmit={handleSubmit} className="glass-morphism p-8 rounded-xl space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 group-hover:gradient-text transition-all">
                    {data.contact.texts?.formNameLabel || "Name"}
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="glass border-primary/30 focus:border-primary transition-all duration-300"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 group-hover:gradient-text transition-all">
                    {data.contact.texts?.formEmailLabel || "Email"}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="glass border-primary/30 focus:border-primary transition-all duration-300"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 group-hover:gradient-text transition-all">
                    {data.contact.texts?.formMessageLabel || "Message"}
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className="glass border-primary/30 focus:border-primary transition-all duration-300"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {data.contact.texts?.formSubmitBtn || "Send Message"}
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </form>
            </AnimatedSection>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
