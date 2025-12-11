import { AnimatedSection } from '@/components/AnimatedSection';
import { FloatingOrbs } from '@/components/FloatingOrbs';
import { NeuralNetwork } from '@/components/NeuralNetwork';
import { ParallaxSection } from '@/components/ParallaxSection';
import { useConfig } from '@/hooks/useConfig';
import { useData } from '@/hooks/useData';
import { calculateExperience } from '@/lib/experience';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const WorkHistory = () => {
  const { data } = useData();
  const { config } = useConfig();
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  
  const progressWidth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const progressPercent = useTransform(progressWidth, [0, 1], [0, 100]);

  if (!data || !config) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const sections = config.pages.workHistory.sections;

  const experience = calculateExperience(data.about.careerStartDate);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
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
          {data.workHistory?.texts?.pageTitle || "Work History"}
          </h1>
          <p className="text-center text-lg text-muted-foreground mb-12">
            {data.workHistory?.texts?.pageSubtitle || "My Professional Timeline"}
          </p>
        </AnimatedSection>

        {/* Overview */}
        {sections.overview && (
          <AnimatedSection animation="fade-up" delay={100} className="mb-16">
            <div className="glass-morphism p-10 rounded-2xl max-w-3xl mx-auto card-3d">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-holographic">
                {experience.years} Years, {experience.months} Months
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                of professional experience building scalable applications and leading development teams.
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* Timeline Progress Indicator */}
        {sections.Indicator && (
          <div className="max-w-7xl mx-auto mb-8">
            <div className="glass-morphism p-6 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold gradient-text">Timeline Progress</h3>
                <motion.span className="text-sm text-muted-foreground">
                  {progressPercent.get().toFixed(0)}%
                </motion.span>
              </div>
              <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    scaleX: progressWidth,
                    transformOrigin: 'left',
                    background: 'var(--gradient-primary)'
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Timeline */}
        {sections.timeline && (
          <div ref={timelineRef} className="relative max-w-7xl mx-auto">
            <div className="space-y-10">
              {data.workHistoryEntries.map((job: any, index: number) => (
                <AnimatedSection
                  key={index}
                  animation="slide-right"
                  delay={200 + index * 100}
                  threshold={0.15}
                >
                <div
                  className="glass-morphism p-8 rounded-xl card-3d group hover:border-primary/40 transition-all relative"
                >
                  {/* Timeline line segment - only visible between cards */}
                  {index < data.workHistoryEntries.length - 1 && (
                    <div className="absolute left-0 top-full w-0.5 h-10 hidden md:block ml-4"
                         style={{ background: 'var(--gradient-primary)' }} />
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-8 w-4 h-4 rounded-full bg-primary hidden md:block animate-ripple shadow-lg ml-2"
                       style={{ boxShadow: '0 0 20px var(--primary)' }} />
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 rounded-lg group-hover:animate-pulse-glow transition-all duration-300"
                           style={{ background: 'var(--gradient-neural)' }}>
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">{job.role}</h3>
                        <h4 className="text-xl font-semibold mb-2">{job.company}</h4>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>
                          {formatDate(job.startDate)} - {formatDate(job.endDate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-secondary" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {job.promotions.length > 0 && (
                    <div className="mb-6 p-5 glass rounded-lg border border-primary/20">
                      {job.promotions.map((promo: any, pIndex: number) => (
                        <div key={pIndex} className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-primary mt-0.5 animate-ripple" />
                          <span className="text-muted-foreground">
                            Promoted from <strong className="gradient-text">{promo.from}</strong> to <strong className="gradient-text">{promo.to}</strong> in {formatDate(promo.date)}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div>
                    <h5 className="text-xl font-semibold mb-4 gradient-text">Key Achievements:</h5>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement: string, aIndex: number) => (
                        <li key={aIndex} className="flex items-start group/item">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 group-hover/item:animate-ripple" />
                          <span className="text-muted-foreground flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkHistory;
