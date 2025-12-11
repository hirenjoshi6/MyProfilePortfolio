import { AnimatedSection } from '@/components/AnimatedSection';
import { FloatingOrbs } from '@/components/FloatingOrbs';
import { NeuralNetwork } from '@/components/NeuralNetwork';
import { ParallaxSection } from '@/components/ParallaxSection';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useConfig } from '@/hooks/useConfig';
import { Download, ExternalLink, Mail, Share2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Resume = () => {
  const { config } = useConfig();

  const resumes = [
    {
      id: 'standard',
      label: 'Current Resume',
      path: '/resume.pdf',
      downloadName: 'Hiren_Joshi_Resume.pdf',
    },
    {
      id: 'detailed',
      label: 'Detailed Resume',
      path: '/detail_resume.pdf',
      downloadName: 'Hiren_Joshi_Detailed_Resume.pdf',
    },
  ];

  const [selectedResume, setSelectedResume] = useState(resumes[0]);

  const handlePrint = () => {
    window.print();
    toast.success('Print dialog opened');
  };

  const handleShare = (platform: string) => {
    const url = new URL(selectedResume.path, window.location.origin).toString();
    const text = 'Check out my resume';
    
    switch(platform) {
      case 'email':
        window.location.href = `mailto:?subject=My Resume&body=${text} ${url}`;
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard!');
        break;
    }
  };

  if (!config) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      <ParallaxSection speed={0.3}>
        <NeuralNetwork />
      </ParallaxSection>
      <ParallaxSection speed={0.5}>
        <FloatingOrbs />
      </ParallaxSection>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 gradient-holographic">
            Resume
          </h1>
          <p className="text-center text-lg text-muted-foreground mb-8">
            My Professional Journey
          </p>
          </AnimatedSection>
          
          <AnimatedSection animation="scale-in" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Select Resume:</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="min-w-[160px] justify-between">
                    <span>{selectedResume.label}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {resumes.map((resume) => (
                    <DropdownMenuItem
                      key={resume.id}
                      onClick={() => setSelectedResume(resume)}
                    >
                      {resume.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Button 
              variant="default"
              className="group"
              onClick={() => window.open(selectedResume.path, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Open in New Tab
            </Button>
            <Button 
              variant="outline"
              className="group"
              onClick={() => {
                const link = document.createElement('a');
                link.href = selectedResume.path;
                link.download = selectedResume.downloadName;
                link.click();
              }}
            >
              <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
              Download PDF
            </Button>
            {/* <Button 
              variant="outline"
              className="group"
              onClick={handlePrint}
            >
              <Printer className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Print
            </Button> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="group">
                  <Share2 className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Share
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => handleShare('email')}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('linkedin')}>
                  <Share2 className="w-4 h-4 mr-2" />
                  LinkedIn
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('twitter')}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Twitter
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('copy')}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Copy Link
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
          <div className="glass-morphism rounded-2xl p-2 shadow-depth">
            <div className="aspect-[8.5/11] w-full bg-background/50 rounded-xl overflow-hidden">
              <iframe
                src={selectedResume.path}
                className="w-full h-full border-0"
                title="Resume"
                style={{ minHeight: '800px' }}
              />
            </div>
          </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Resume;
